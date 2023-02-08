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
import {
  BasicDetailsInterface,
  formBtnColors,
  initBasicDetails,
} from "../../helper/Profile";

interface State {
  password: string;
  showPassword: boolean;
}

interface FormInputs {
  dob: DateType;
  radio: string;
  lastName: string;
  firstName: string;
  kodnestid: string;
  emergencycontactnumnber: number;
}

interface CustomInputProps {
  value: DateType;
  label: string;
  error: boolean;
  onChange: (event: ChangeEvent) => void;
}

const defaultValues = {
  dob: null,
  radio: "",
  lastName: "",
  firstName: "",
  kodnestid: "",
  emergencycontactnumnber: null,
};

const CustomInput = forwardRef(({ ...props }: CustomInputProps, ref) => {
  return <TextField inputRef={ref} {...props} sx={{ width: "100%" }} />;
});

const BasicDetailsView = () => {
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [isEdit, setIsEdit] = useState(true);
//   const [isCancel, setIsCancel] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  const [basicDetails, setBasicDetails] = useState(null);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [kid, setKid] = useState("");
  const [eno, setEno] = useState(null);
  const [Dob, setDob] = useState(new Date());
  const [disb, setDisb] = useState(false);
  // const [gender, setGender] = useState("");

  // console.log(disb);

  // ** Hooks
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBasicDetails();
      var basicDetailsObj = {
        firstName: res.data.first_name,
        lastName: res.data.last_name,
        dob: res.data.last_dob,
        disability: false,
        kid: "123",
        eno: null,
      };
      setFName(res.data.first_name);
      setLName(res.data.last_name);
      setDob(res.data.last_dob);
      setEno(res.data.eno);
      setKid("123");
      setDisb(false);
      setBasicDetails(basicDetailsObj);
    };
    fetchData();
  }, []);

  // console.log(`first name ======> ${JSON.stringify(fName)}`);

  const checkingEmpty = () => {
    if (!fName || !lName || !disb || !eno || !Dob) {
      return false;
    } else {
      return true;
    }
  };

  const formReset = () => {
    setFName(basicDetails.firstName);
    setLName(basicDetails.lastName);
    setDisb(basicDetails.disability);
    setDob(basicDetails.dob);
    setEno(basicDetails.eno);
    setKid("123");
  };

  const onSubmit = async () => {
    // if (isSubmit) {
    console.log("Form Submitted");
    var basicDetailsObj: BasicDetailsInterface = {
      firstName: fName,
      lastName: lName,
      dob: "",
      disability: false,
      gender: "",
    };
    setBasicDetails(basicDetailsObj);
    //pass basicDetailsObj to API
    const res = await updateBasicDetails(basicDetailsObj);
    console.log(res);
    // }
  };

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
                        // value={!isCancel ? fName : basicDetails.firstName}
                        value={fName}
                        label="First Name"
                        onChange={(e: any) => {
                          // console.log(`first name ======> ${e?.target?.value}`);
                          onChange(e?.target?.value);
                          setFName(e?.target?.value);
                        }}
                        placeholder={fName}
                        error={Boolean(!fName && isChecking)}
                        aria-describedby="validation-basic-first-name"
                      />
                    )}
                  />
                  {!fName && isChecking && (
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
                        // value={!isCancel ? lName : basicDetails?.lastName}
                        value={lName}
                        label="Last Name"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setLName(e?.target?.value);
                        }}
                        placeholder={lName}
                        error={Boolean(!lName && isChecking)}
                        aria-describedby="validation-basic-last-name"
                      />
                    )}
                  />
                  {!lName && isChecking && (
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
                    name="kodnestid"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        // disabled={true}
                        value={kid}
                        label="KodNest Id"
                        onChange={(e: any) => {
                          // console.log(`first name ======> ${e?.target?.value}`);
                          onChange(e?.target?.value);
                          setKid(e?.target?.value);
                        }}
                        error={Boolean(!kid && isChecking)}
                        placeholder={kid}
                        aria-describedby="validation-basic-kodnestid"
                      />
                    )}
                  />
                  {!kid && isChecking && (
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
                    name="emergencycontactnumnber"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <TextField
                        // disabled={!isEdit ? true : false}
                        type="tel"
                        value={eno}
                        label="Emergency Contact Number  ( Father/mother/sister/brother)"
                        onChange={(e: any) => {
                          // console.log(`first name ======> ${e?.target?.value}`);
                          onChange(e?.target?.value);
                          setEno(e?.target?.value);
                        }}
                        error={Boolean(!eno && isChecking)}
                        placeholder=""
                        aria-describedby="validation-basic-emergencycontactnumnber"
                      />
                    )}
                  />
                  {!eno && isChecking && (
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
                    //   disabled={true}
                      selected={ Dob }
                      showYearDropdown
                      showMonthDropdown
                      onChange={(e) => {
                        onChange(e);
                        setDob(e);
                      }}
                      placeholderText="MM/DD/YYYY"
                      customInput={
                        <CustomInput
                          value={value}
                          onChange={onChange}
                          label="Date of Birth"
                          error={Boolean(!Dob && isChecking)}
                          aria-describedby="validation-basic-dob"
                        />
                      }
                    />
                  )}
                />
                {!Dob && isChecking && (
                  <FormHelperText
                    sx={{ mx: 3.5, color: "error.main" }}
                    id="validation-basic-dob"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  error={Boolean(!disb && isChecking)}
                //   disabled={!isEdit ? true : false}
                >
                  <FormLabel>Disability</FormLabel>
                  <Controller
                    name="radio"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <RadioGroup
                        onClick={(e: any) => {
                          setDisb(e.target.value);
                          console.log(e.target.value)
                        }}
                        row
                        {...field}
                        aria-label="disability"
                        name="validation-basic-radio"
                      >
                        <FormControlLabel
                        //   disabled={!isEdit ? true : false}
                          value={true}
                        //   checked={disb && true}
                          label="Yes"
                          sx={
                            !disb && isChecking ? { color: "error.main" } : null
                          }
                          control={
                            <Radio
                              sx={
                                !disb && isChecking
                                  ? { color: "error.main" }
                                  : null
                              }
                            />
                          }
                        />
                        <FormControlLabel
                        //   disabled={!isEdit ? true : false}
                          value={false}
                        //   checked={!disb && true}
                          label="No"
                          sx={
                            !disb && isChecking ? { color: "error.main" } : null
                          }
                          control={
                            <Radio
                              sx={
                                !disb && isChecking
                                  ? { color: "error.main" }
                                  : null
                              }
                            />
                          }
                        />
                      </RadioGroup>
                    )}
                  />
                  {!disb && isChecking && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-radio"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* <Grid item xs={12}>
                <FormControl>
                  <Controller
                    name="checkbox"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormControlLabel
                        label="Agree to our terms and conditions"
                        sx={errors.checkbox ? { color: "error.main" } : null}
                        control={
                          <Checkbox
                            {...field}
                            name="validation-basic-checkbox"
                            sx={
                              errors.checkbox ? { color: "error.main" } : null
                            }
                          />
                        }
                      />
                    )}
                  />
                  {errors.checkbox && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-checkbox"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid> */}

              {/* <Grid item xs={12}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  style={{ marginTop: 30 }}
                  onClick={() => {
                    if (!isEdit) {
                      setIsEdit(true);
                      setIsSubmit(false);
                    } else if (!checkingEmpty()) {
                      // setIsSubmit(true);
                      // setIsEdit(true);
                      setIsChecking(true);
                      console.log("errors are not nill");
                    } else {
                      setIsSubmit(true);
                      setIsEdit(false);
                      // console.log("submitted");
                      onSubmit();
                    }
                    setIsCancel(false);
                  }}
                >
                  {!isEdit ? "Edit" : "Submit"}
                </Button>
                {isEdit && (
                  <Button
                    className="ml-2"
                    size="large"
                    type="reset"
                    variant="contained"
                    style={{ marginTop: 30 }}
                    onClick={() => {
                      setIsEdit(false);
                      setIsSubmit(false);
                      setIsCancel(true);
                      formReset();
                    }}
                  >
                    Cancel
                  </Button>
                )}
              </Grid> */}
            </Grid>
          </form>
        </CardContent>
      </DatePickerWrapper>
    </div>
  );
};

export default BasicDetailsView;
