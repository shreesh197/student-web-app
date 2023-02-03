// ** React Imports
import { forwardRef, MouseEvent, useState, ChangeEvent } from "react";

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

  // ** States
  // const [state, setState] = useState<State>({
  //   password: "",
  //   showPassword: false,
  // });

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [kid, setKid] = useState("");
  const [eno, setEno] = useState(null);
  const [Dob, setDob] = useState("");
  const [disb, setDisb] = useState("");

  console.log(disb)

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  // const handleClickShowPassword = () => {
  //   setState({ ...state, showPassword: !state.showPassword });
  // };

  // const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  // const onfnameChange = (e) => setFName(e.target.value);

  const onSubmit = () => toast.success("Form Submitted");

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
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label="First Name"
                        onChange={(value: any) => {
                          onChange(value);
                          setFName(value);
                        }}
                        placeholder="Leonard"
                        error={Boolean(!fName && isSubmit)}
                        aria-describedby="validation-basic-first-name"
                      />
                    )}
                  />
                  {!fName && isSubmit && (
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
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label="Last Name"
                        onChange={(value: any) => {
                          onChange(value);
                          setLName(value);
                        }}
                        placeholder="Carter"
                        error={Boolean(!lName && isSubmit)}
                        aria-describedby="validation-basic-last-name"
                      />
                    )}
                  />
                  {!lName && isSubmit && (
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
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label="KodNest Id"
                        onChange={(value: any) => {
                          onChange(value);
                          setKid(value);
                        }}
                        error={Boolean(!kid && isSubmit)}
                        placeholder=""
                        aria-describedby="validation-basic-kodnestid"
                      />
                    )}
                  />
                  {!kid && isSubmit && (
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
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        type="tel"
                        value={value}
                        label="Emergency Contact Number  ( Father/mother/sister/brother)"
                        onChange={(value: any) => {
                          onChange(value);
                          setEno(value);
                        }}
                        error={Boolean(!eno && isSubmit)}
                        placeholder=""
                        aria-describedby="validation-basic-emergencycontactnumnber"
                      />
                    )}
                  />
                  {!eno && isSubmit && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-emergencycontactnumnber"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel
                    htmlFor="validation-basic-password"
                    error={Boolean(errors.password)}
                  >
                    Password
                  </InputLabel>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        value={value}
                        label="Password"
                        onChange={onChange}
                        id="validation-basic-password"
                        error={Boolean(errors.password)}
                        type={state.showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              aria-label="toggle password visibility"
                            >
                              <Icon
                                icon={
                                  state.showPassword
                                    ? "mdi:eye-outline"
                                    : "mdi:eye-off-outline"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {errors.password && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-basic-password"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid> */}

              <Grid item xs={12} sm={6}>
                <Controller
                  name="dob"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      selected={value}
                      showYearDropdown
                      showMonthDropdown
                      onChange={(value: any) => {
                        onChange(value);
                        setDob(value);
                      }}
                      placeholderText="MM/DD/YYYY"
                      customInput={
                        <CustomInput
                          value={value}
                          onChange={onChange}
                          label="Date of Birth"
                          error={Boolean(!Dob && isSubmit)}
                          aria-describedby="validation-basic-dob"
                        />
                      }
                    />
                  )}
                />
                {!Dob && isSubmit && (
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

              <Grid item xs={12}>
                <FormControl error={Boolean(errors.radio)}>
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
                            setDisb(e.target.value);
                          }}
                          sx={errors.radio ? { color: "error.main" } : null}
                          control={
                            <Radio
                              sx={errors.radio ? { color: "error.main" } : null}
                            />
                          }
                        />
                        <FormControlLabel
                          value="no"
                          label="No"
                          onClick={(e: any) => {
                            setDisb(e.target.value);
                          }}
                          sx={errors.radio ? { color: "error.main" } : null}
                          control={
                            <Radio
                              sx={errors.radio ? { color: "error.main" } : null}
                            />
                          }
                        />
                        {/* <FormControlLabel
                          value="other"
                          label="Other"
                          sx={errors.radio ? { color: "error.main" } : null}
                          control={
                            <Radio
                              sx={errors.radio ? { color: "error.main" } : null}
                            />
                          }
                        /> */}
                      </RadioGroup>
                    )}
                  />
                  {errors.radio && (
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

              <Grid item xs={12}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  style={{ marginTop: 30 }}
                  onClick={() => setIsSubmit(true)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </DatePickerWrapper>
    </Card>
  );
};

export default BasicDetailsView;
