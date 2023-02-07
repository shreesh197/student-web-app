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
import { getBasicDetails, updateBasicDetails } from "../../services/ApiExecutor";
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
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const [basicDetails, setBasicDetails] = useState(null);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [kid, setKid] = useState("123");
  const [eno, setEno] = useState(null);
  const [Dob, setDob] = useState(new Date());
  const [disb, setDisb] = useState(false);
  const [gender, setGender] = useState("");

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
        disability: res.data.disability,
        kid: "123",
        eno: null,
      };
      setFName(res.data.first_name);
      setLName(res.data.last_name);
      setDob(res.data.last_dob);
      setEno(res.data.eno);
      setKid("123");
      setBasicDetails(basicDetailsObj);
    };
    fetchData();
  }, []);

  // console.log(`first name ======> ${JSON.stringify(fName)}`);

  const checkingEmpty = () => {
    if (!fName || !lName || !disb || !gender || !eno) {
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
    <Card
      className="md:w-[60%] md:mt-[30px] md:mb-[30px] md:p-[20px] md:shadow-lg md:rounded-[16px]"
      style={{
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
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
                        disabled={!isEdit ? true : false}
                        value={!isCancel ? fName : basicDetails.firstName}
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
                        disabled={!isEdit ? true : false}
                        value={!isCancel ? lName : basicDetails.lastName}
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
                        disabled={!isEdit ? true : false}
                        value={!isCancel ? kid : basicDetails.kid}
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
                        disabled={!isEdit ? true : false}
                        type="tel"
                        value={!isCancel ? eno : basicDetails.eno}
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
                  render={({ field: { onChange } }) => (
                    <DatePicker
                      disabled={!isEdit ? true : false}
                      selected={Dob}
                      showYearDropdown
                      showMonthDropdown
                      onChange={(e: any) => {
                        // console.log(`first name ======> ${e?.target?.value}`);
                        onChange(e?.target?.value);
                        setDob(e?.target?.value);
                      }}
                      placeholderText="MM/DD/YYYY"
                      customInput={
                        <CustomInput
                          value={Dob}
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

              {/* <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel
                    id="validation-basic-select"
                    error={Boolean(errors.select)}
                    htmlFor="validation-basic-select"
                  >
                    Country
                  </InputLabel>
                  <Controller
                    name="select"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        value={value}
                        label="Country"
                        onChange={onChange}
                        error={Boolean(errors.select)}
                        labelId="validation-basic-select"
                        aria-describedby="validation-basic-select"
                      >
                        <MenuItem value="UK">UK</MenuItem>
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="Australia">Australia</MenuItem>
                        <MenuItem value="Germany">Germany</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.select && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-select"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid> */}

              {/* <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name="textarea"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        rows={4}
                        multiline
                        {...field}
                        label="Bio"
                        error={Boolean(errors.textarea)}
                        aria-describedby="validation-basic-textarea"
                      />
                    )}
                  />
                  {errors.textarea && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-textarea"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid> */}

              {/* <Grid item xs={12}>
                <FormControl error={Boolean(errors.radio && isSubmit)}>
                  <FormLabel>Disability</FormLabel>
                  <Controller
                    name="radio"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <RadioGroup
                        row
                        {...field}
                        aria-label="disability"
                        name="validation-basic-radio"
                      >
                        <FormControlLabel
                          value="yes"
                          label="Yes"
                          onClick={(e: any) => {
                            setDisb(true);
                          }}
                          sx={
                            errors.radio && isSubmit
                              ? { color: "error.main" }
                              : null
                          }
                          control={
                            <Radio
                              sx={
                                errors.radio && isSubmit
                                  ? { color: "error.main" }
                                  : null
                              }
                            />
                          }
                        />
                        <FormControlLabel
                          value="no"
                          label="No"
                          onClick={(e: any) => {
                            setDisb(false);
                          }}
                          sx={
                            errors.radio && isSubmit
                              ? { color: "error.main" }
                              : null
                          }
                          control={
                            <Radio
                              sx={
                                errors.radio && isSubmit
                                  ? { color: "error.main" }
                                  : null
                              }
                            />
                          }
                        />
                
                      </RadioGroup>
                    )}
                  />
                  {errors.radio && isSubmit && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-radio"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid> */}

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

              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </DatePickerWrapper>
    </Card>
  );
};

export default BasicDetailsView;
