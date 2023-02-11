// ** React Imports
import {
  forwardRef,
  MouseEvent,
  useState,
  ChangeEvent,
  useEffect,
} from "react";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
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
import { useForm, Controller, set } from "react-hook-form";

// ** Icon Imports
import Icon from "../../common/ui-library/app-repository-admin-panel/src/@core/components/icon";

// ** Types
import { DateType } from "../../common/ui-library/app-repository-admin-panel/src/types/forms/reactDatepickerTypes";
import DatePickerWrapper from "../../common/ui-library/app-repository-admin-panel/src/@core/styles/libs/react-datepicker";
import {
  getBasicDetails,
  updateBasicDetails,
} from "../../services/ApiExecutor";
import { formBtnColors } from "../../helper/Profile";
import { BasicDetailsInterface } from "../../constants/profile";
import { validateEmail } from "../../helper";
import { FormGroup, Switch } from "@mui/material";

interface State {
  password: string;
  showPassword: boolean;
}

interface CustomInputProps {
  value: DateType;
  label: string;
  error: boolean;
  onChange: (event: ChangeEvent) => void;
}

const defaultValues = {
  dob: null,
  lastName: "",
  firstName: "",
  kodnestId: "",
  emergencyContact: null,
  disability: false,
  primaryContact: null,
  whatsappContact: null,
};

const CustomInput = forwardRef(({ ...props }: CustomInputProps, ref) => {
  return <TextField inputRef={ref} {...props} sx={{ width: "100%" }} />;
});

const BasicDetailsView = ({
  handleBack,
  handleNext,
  activeStep,
  steps,
  basicDetails,
  setBasicDetails,
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const [firstName, setFirstName] = useState(basicDetails.firstName || "");
  const [lastName, setLastName] = useState(basicDetails.lastName || "");
  const [kodnestId, setKodnestId] = useState(basicDetails.kodnestId || "");
  const [emergencyContact, setEmergencyContact] = useState(
    basicDetails.emergencyContact || null
  );
  const [dob, setDob] = useState(basicDetails.dob || new Date());
  const [disability, setDisability] = useState(
    basicDetails.disability || false
  );
  const [email, setEmail] = useState(basicDetails.email || "");
  const [primaryContact, setPrimaryContact] = useState(
    basicDetails.primaryContact || null
  );
  const [whatsappContact, setWhatsappContact] = useState(
    basicDetails.whatsappContact || null
  );

  // const [checked, setChecked] = useState<boolean>(
  //   basicDetails.disability || false
  // );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisability(event.target.checked);
  };

  const dependencies = [
    firstName,
    lastName,
    kodnestId,
    emergencyContact,
    dob,
    disability,
    email,
    primaryContact,
    whatsappContact,
  ];

  // ** Hooks
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BasicDetailsInterface>({ defaultValues });

  useEffect(() => {
    var basicDetailsObj: BasicDetailsInterface = {
      firstName,
      lastName,
      kodnestId,
      emergencyContact,
      dob,
      disability,
      email,
      primaryContact,
      whatsappContact,
    };
    setBasicDetails(basicDetailsObj);
  }, dependencies);

  const checkingEmpty = () => {
    if (
      !firstName ||
      !lastName ||
      // !disability ||
      !emergencyContact ||
      !dob ||
      !primaryContact ||
      !whatsappContact ||
      !email ||
      !kodnestId
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async () => {
    // if (isSubmit) {
    console.log("Form Submitted");
    var basicDetailsObj: BasicDetailsInterface = {
      firstName,
      lastName,
      kodnestId,
      emergencyContact,
      dob,
      disability,
      email,
      primaryContact,
      whatsappContact,
    };
    setBasicDetails(basicDetailsObj);
    //pass basicDetailsObj to API
    // const res = await updateBasicDetails(basicDetailsObj);
    // console.log(res);
    // }
  };

  console.log(`Disability is set to =======> $`);

  return (
    <div>
      <DatePickerWrapper>
        {/* <CardHeader title="Basic" /> */}
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        // disabled={!isEdit ? true : false}
                        name="firstName"
                        value={firstName}
                        label="First Name"
                        onChange={(e: any) => {
                          // console.log(`first name ======> ${e?.target?.value}`);
                          onChange(e?.target?.value);
                          setFirstName(e?.target?.value);
                        }}
                        placeholder="First Name"
                        error={Boolean(!firstName && isChecking)}
                        aria-describedby="validation-basic-first-name"
                      />
                    )}
                  />
                  {!firstName && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-first-name"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        // disabled={!isEdit ? true : false}
                        value={lastName}
                        // value={lastName}
                        label="Last Name"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setLastName(e?.target?.value);
                        }}
                        placeholder="Last Name"
                        error={Boolean(!lastName && isChecking)}
                        aria-describedby="validation-basic-last-name"
                      />
                    )}
                  />
                  {!lastName && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-last-name"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="kodnestId"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        value={kodnestId}
                        label="KodNest Id"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setKodnestId(e?.target?.value);
                        }}
                        error={Boolean(!kodnestId && isChecking)}
                        placeholder={kodnestId}
                        aria-describedby="validation-basic-kodnestid"
                      />
                    )}
                  />
                  {!kodnestId && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-kodnestid"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="emergencyContact"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        type="tel"
                        value={emergencyContact}
                        label="Emergency Contact Number  ( Father/mother/sister/brother)"
                        onChange={(e: any) => {
                          // console.log(`first name ======> ${e?.target?.value}`);
                          onChange(e?.target?.value);
                          setEmergencyContact(e?.target?.value);
                        }}
                        error={Boolean(!emergencyContact && isChecking)}
                        placeholder=""
                        aria-describedby="validation-basic-emergencycontactnumnber"
                      />
                    )}
                  />
                  {!emergencyContact && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-emergencycontactnumnber"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="dob"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      selected={dob}
                      showYearDropdown
                      showMonthDropdown
                      onChange={(e) => {
                        onChange(e);
                        setDob(dob);
                      }}
                      placeholderText="MM/DD/YYYY"
                      customInput={
                        <CustomInput
                          value={value}
                          onChange={onChange}
                          label="Date of Birth"
                          error={Boolean(!dob && isChecking)}
                          aria-describedby="validation-basic-dob"
                        />
                      }
                    />
                  )}
                />
                {!dob && isChecking && (
                  <FormHelperText
                    sx={{ mx: 3.5, color: "error.main" }}
                    id="validation-basic-dob"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        type="email"
                        value={email}
                        label="Email Id"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setEmail(e?.target?.value);
                        }}
                        error={Boolean(!email && isChecking)}
                        placeholder={email}
                        aria-describedby="validation-communication-email"
                      />
                    )}
                  />
                  {!email && isChecking ? (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-communication-email"
                    >
                      This field is required
                    </FormHelperText>
                  ) : (
                    !validateEmail(email) &&
                    isChecking && (
                      <FormHelperText
                        sx={{ color: "error.main" }}
                        id="validation-communication-email"
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
                    name="primaryContact"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        type="tel"
                        value={primaryContact}
                        label="Primary Contact Number"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setPrimaryContact(e?.target?.value);
                        }}
                        error={Boolean(!primaryContact && isChecking)}
                        placeholder=""
                        aria-describedby="validation-communication-primarycontactnumber"
                      />
                    )}
                  />
                  {!primaryContact && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-communication-primarycontactnumber"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="whatsappContact"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        type="tel"
                        value={whatsappContact}
                        label="WhatsApp Contact Number"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setWhatsappContact(e?.target?.value);
                        }}
                        error={Boolean(!whatsappContact && isChecking)}
                        placeholder=""
                        aria-describedby="validation-communication-whatsappcontactnumber"
                      />
                    )}
                  />
                  {!whatsappContact && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-communication-whatsappcontactnumber"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* <Grid item xs={12}>
                <FormControl error={Boolean(!disability && isChecking)}>
                  <FormLabel>Disability</FormLabel>
                  <Controller
                    name="disability"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <RadioGroup
                        onClick={(e: any) => {
                          setDisability(e.target.value);
                        }}
                        row
                        {...field}
                        aria-label="disability"
                        name="validation-basic-radio"
                      >
                        <FormControlLabel
                          value={true}
                          label="Yes"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          value={false}
                          label="No"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    )}
                  />
                  {!disability && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-radio"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid> */}
              <Grid item xs={12} className="flex space-x-6 items-center">
                {/* <FormControl error={Boolean(!disability && isChecking)}> */}
                <FormLabel>Disability</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    label={!disability ? "No" : "Yes"}
                    control={
                      <Switch checked={disability} onChange={handleChange} />
                    }
                  />
                  {/* <FormControlLabel control={<Switch />} label="No" /> */}
                </FormGroup>
              </Grid>

              <div className="button-wrapper w-[100%] flex justify-end">
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    handleBack();
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
                      handleNext();
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
      </DatePickerWrapper>
    </div>
  );
};

export default BasicDetailsView;
