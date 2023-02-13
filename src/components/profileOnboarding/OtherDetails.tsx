// ** React Imports
import {
  forwardRef,
  MouseEvent,
  useState,
  ChangeEvent,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  useEffect,
  useRef,
} from "react";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";

// ** Third Party Imports
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";

// ** Icon Imports
import Icon from "../../common/ui-library/app-repository-admin-panel/src/@core/components/icon";
import { OtherDetailsInterface } from "../../constants/profile";
import axios from "axios";
import {
  Box,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import { postOtherDetails } from "../../services/ApiExecutor";
import { validateEmail } from "../../helper";

interface State {
  password: string;
  showPassword: boolean;
}

const defaultValues = {
  city: "",
  state: "",
  preferredjoblocation: null,
  tponame: "",
  tpoemailid: "",
  tpocontactnumber: null,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const JobLocationArray = [
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Mumbai",
  "Delhi",
];

const OtherDetails = ({
  handleBack,
  handleNext,
  activeStep,
  steps,
  otherDetails,
  setOtherDetails,
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [addressDetails, setAddressDetails] = useState(null);

  const [indianSates, setIndianSates] = useState([]);
  const [cities, setCities] = useState([]);
  const [statesData, setStatesData] = useState(null);
  const [selectedState, setSelectedState] = useState(otherDetails.state || "");
  const [selectedCity, setSelectedCity] = useState(otherDetails.city || "");
  const [jobLocation, setJobLocation] = useState(
    otherDetails.jobLocation || []
  );
  const [tpoName, setTpoName] = useState(otherDetails.tpoName || "");
  const [tpoEmail, setTpoEmail] = useState(otherDetails.tpoEmail || "");
  const [tpoNumber, setTpoNumber] = useState(otherDetails.tpoNumber || null);

  const [personName, setPersonName] = useState<string[]>([]);
  // const [personNameNative, setPersonNameNative] = useState<string[]>([]);
  const [showDeclaration, setShowDeclaration] = useState<boolean>(false);
  const [declaration, setDeclaration] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const descriptionElementRef = useRef<HTMLElement>(null);

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    setShowDeclaration(false);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleShowDeclaration = (event: ChangeEvent<HTMLInputElement>) => {
    setShowDeclaration(event.target.checked);
    // if (showDeclaration) {
    //   handleClickOpen("paper");
    // }
  };

  const handleDeclaration = (event: ChangeEvent<HTMLInputElement>) => {
    setDeclaration(event.target.checked);
  };

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setJobLocation(event.target.value as string[]);
  };

  const dependencies = [
    selectedState,
    selectedCity,
    jobLocation,
    tpoName,
    tpoEmail,
    tpoNumber,
  ];

  useEffect(() => {
    const GetStates = async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json"
      );
      const { data } = res;
      const statesData = data?.states?.map((item: { state: any }) => {
        return {
          name: item.state,
          districts: item["districts"],
        };
      });
      // console.log("States data is", statesData);
      setStatesData(statesData);

      const IndiaStates = data?.states?.map((item: { state: any }) => ({
        state: item.state,
      }));
      setIndianSates(IndiaStates);
    };

    GetStates();
  }, []);

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OtherDetailsInterface>({ defaultValues });

  useEffect(() => {
    var otherDetailsObj = {
      city: "",
      state: "",
      preferredjoblocation: [],
      tponame: "",
      tpoemailid: "",
      tpocontactnumber: null,
    };
    setOtherDetails(otherDetailsObj);
  }, dependencies);

  useEffect(() => {
    onSelectState();
  }, [selectedState]);

  const onSelectState = () =>
    // e: any
    {
      // console.log("Selected state is", e.target.value);
      const cities = statesData?.filter(
        (item: { name: any }) => selectedState === item?.name
      )[0]["districts"];

      setCities(cities);
    };

  const checkingEmpty = () => {
    if (
      !selectedState ||
      !selectedCity ||
      !jobLocation ||
      !tpoName ||
      !tpoEmail ||
      !tpoNumber
    ) {
      return false;
    } else {
      return true;
    }
  };

  // const formReset = () => {
  //   setSelectedState("karnataka");
  //   setSelectedCity("bengaluru");
  // };

  const onSubmit = async () => {
    // if (isSubmit) {
    console.log("Form Submitted");
    var otherDetailsObj = {
      preferred_job_location: jobLocation,
      current_location_state: selectedState,
      current_location_city: selectedCity,
      tpo_name: tpoName,
      tpo_email: tpoEmail,
      tpo_contact: tpoNumber,
    };

    // setAddressDetails(otherDetailsObj);
    const res = await postOtherDetails(otherDetailsObj);
    console.log(res);
    // }
  };

  // console.log("Selected state is outside", selectedState);

  return (
    <div>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-address-state"
                  error={Boolean(!selectedState && isChecking)}
                  htmlFor="validation-address-state"
                >
                  Current Location - State
                </InputLabel>
                <Controller
                  name="state"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => {
                    return (
                      <Select
                        value={selectedState}
                        label="Are you Working professional?"
                        onChange={(e: any) => {
                          console.log(
                            "Selected state is inside",
                            selectedState
                          );

                          onChange(e?.target?.value);
                          // setSelectedState(e?.target?.value);
                          // onSelectState(e?.target?.value);
                        }}
                        error={Boolean(!selectedState && isChecking)}
                        labelId="validation-address-state"
                        aria-describedby="validation-address-state"
                      >
                        {indianSates?.map((item, index) => (
                          <MenuItem
                            value={item.state}
                            key={index}
                            onClick={() => {
                              console.log(`menu ====> ${item.state}`);
                              setSelectedState(item.state);
                            }}
                          >
                            {item.state}
                          </MenuItem>
                        ))}
                      </Select>
                    );
                  }}
                />
                {!selectedState && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-address-state"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-address-city"
                  error={Boolean(!selectedCity && isChecking)}
                  htmlFor="validation-address-city"
                >
                  Current Location - City
                </InputLabel>
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={selectedCity}
                      label="Current Location - City"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setSelectedCity(e?.target?.value);
                      }}
                      error={Boolean(!selectedCity && isChecking)}
                      labelId="validation-address-city"
                      aria-describedby="validation-address-city"
                    >
                      {cities?.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item && item}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!selectedCity && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-address-city"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="tponame"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { onChange } }) => (
                    <TextField
                      value={tpoName}
                      label="Your College Training and Placement Officer name"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTpoName(e?.target?.value);
                      }}
                      placeholder=""
                      error={Boolean(!tpoName && isChecking)}
                      aria-describedby="validation-tpo-tponame"
                    />
                  )}
                />
                {!tpoName && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-tponame"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="tpoemailid"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={tpoEmail}
                      label="Your College Training and Placement Officer Email ID"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTpoEmail(e?.target?.value);
                      }}
                      placeholder=""
                      error={Boolean(!tpoEmail && isChecking)}
                      aria-describedby="validation-tpo-tpoemailid"
                    />
                  )}
                />
                {!tpoEmail && isChecking ? (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-other-email"
                  >
                    This field is required
                  </FormHelperText>
                ) : (
                  !validateEmail(tpoEmail) &&
                  isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-other-email"
                    >
                      Please enter correct email format
                    </FormHelperText>
                  )
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="tpocontactnumber"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => {
                    console.log(`value inside render ======> ${value}`);
                    return (
                      <TextField
                        type="tel"
                        value={tpoNumber}
                        label="Your College Training and Placement Officer Contact Number"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setTpoNumber(e?.target?.value);
                        }}
                        placeholder=""
                        error={Boolean(!tpoNumber && isChecking)}
                        aria-describedby="validation-tpo-tpocontactnumber"
                      />
                    );
                  }}
                />
                {!tpoNumber && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-tpocontactnumber"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* <FormControl fullWidth>
                <InputLabel
                  id="validation-experience-totalyearsofexperience"
                  error={Boolean(!jobLocation && isChecking)}
                  htmlFor="validation-experience-totalyearsofexperience"
                >
                  Preferred Job Location
                </InputLabel>
                <Controller
                  name="preferredjoblocation"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <Select
                      value={jobLocation}
                      label="Total work experience"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setJobLocation(e?.target?.value);
                      }}
                      error={Boolean(!jobLocation && isChecking)}
                      labelId="validation-experience-totalyearsofexperience"
                      aria-describedby="validation-experience-totalyearsofexperience"
                    >
                      {JobLocation.map((item: string, index: number) => (
                        <MenuItem value={item.toLowerCase()}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!jobLocation && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-experience-totalyearsofexperience"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl> */}

              {/* <Typography sx={{ mb: 2, fontWeight: 500 }}>Chip</Typography> */}
              <FormControl fullWidth>
                <InputLabel
                  id="demo-multiple-chip-label"
                  error={Boolean(!jobLocation && isChecking)}
                  htmlFor="demo-multiple-chip-label"
                >
                  Preferred Job Location
                </InputLabel>
                <Select
                  error={Boolean(!jobLocation && isChecking)}
                  multiple
                  label="Preferred Job Location"
                  value={jobLocation}
                  MenuProps={MenuProps}
                  id="demo-multiple-chip"
                  onChange={handleChange}
                  labelId="demo-multiple-chip-label"
                  aria-describedby="demo-multiple-chip-label"
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                      {(selected as unknown as string[]).map((value) => (
                        <Chip key={value} label={value} sx={{ m: 0.75 }} />
                      ))}
                    </Box>
                  )}
                >
                  {JobLocationArray.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                {!jobLocation && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="demo-multiple-chip-label"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} className="flex space-x-6 items-center">
              <FormLabel>Declaration</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  label=""
                  control={
                    <Switch
                      checked={showDeclaration}
                      onChange={handleShowDeclaration}
                      onClick={handleClickOpen("paper")}
                    />
                  }
                />
              </FormGroup>
            </Grid>

            {/* {showDeclaration && ( */}
            {/* <Button variant="outlined" onClick={handleClickOpen("paper")}>
              scroll=paper
            </Button> */}
            <Dialog
              open={open}
              scroll={scroll}
              onClose={handleClose}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >
                  Cotton candy sesame snaps toffee chupa chups caramels. Candy
                  icing gummi bears pastry cake icing brownie oat cake. Tootsie
                  roll biscuit chupa chups apple pie muffin jelly-o caramels.
                  Muffin chocolate bar sweet cookie chupa chups.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
              </DialogActions>
            </Dialog>
            {/* )} */}

            <div className="button-wrapper w-[100%] flex justify-end">
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  handleBack();
                  handleClickOpen("paper");
                }}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  if (!checkingEmpty()) {
                    setIsChecking(true);
                    console.log("errors are not nill");
                  } else {
                    // handleNext();
                    setIsSubmit(true);
                    console.log("submitted");
                    onSubmit();
                  }
                }}
                sx={{ ml: 4 }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </Grid>
        </form>
      </CardContent>
    </div>
  );
};

export default OtherDetails;
