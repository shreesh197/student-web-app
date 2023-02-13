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
import { useForm, Controller } from "react-hook-form";

// ** Icon Imports
import Icon from "../../common/ui-library/app-repository-admin-panel/src/@core/components/icon";
import {
  getCommunicationDetails,
  updateCommunicationDetails,
} from "../../services/ApiExecutor";
import { ContactDetailsInterface } from "../../constants/profile";

// ** Types

interface CustomInputProps {
  label: string;
  error: boolean;
  onChange: (event: ChangeEvent) => void;
}

const defaultValues = {
  email: "",
  primarycontactnumber: null,
  whatsappcontactnumber: null,
  preferredjoblocation: "",
};

const JobLocation = ["Bengaluru", "Hyderabad"];

// const CustomInput = forwardRef(({ ...props }: CustomInputProps, ref) => {
//   return <TextField inputRef={ref} {...props} sx={{ width: "100%" }} />;
// });

const Communication = ({
  handleBack,
  handleNext,
  activeStep,
  steps,
  contactDetails,
  setContactDetails,
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const [jobLocation, setJobLocation] = useState(
    contactDetails?.preferredjoblocation || ""
  );

  const dependencies = [jobLocation];

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDetailsInterface>({ defaultValues });

  useEffect(() => {
    var communicationDetailsObj = {};
    setContactDetails(communicationDetailsObj);
  }, [dependencies]);

  const checkingEmpty = () => {
    if (!jobLocation) {
      return false;
    } else {
      return true;
    }
  };

  //   const formReset = () => {
  //     setPnumber(1234567890);
  //     //  setAnumber(1234567890);
  //     setJobLocation("Bengaluru");
  //     setWnumber(1234567890);
  //     setEmail("kodnest@gmail.com");
  //   };

  const onSubmit = async () => {
    // if (isSubmit) {
    var communicationDetailsObj = {};
    setContactDetails(communicationDetailsObj);
    // const res = await updateCommunicationDetails(communicationDetailsObj);
    // console.log(res);
    // }
  };

  return (
    <div>
      {/* <CardHeader title="Basic" /> */}
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-experience-totalyearsofexperience"
                  error={Boolean(!jobLocation && isChecking)}
                  htmlFor="validation-experience-totalyearsofexperience"
                >
                  Preferred Job Location
                </InputLabel>
                <Controller
                  name="preferredJoblocation"
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
              </FormControl>
            </Grid>

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
                    // formReset();
                  }}
                >
                  Cancel
                </Button>
              )}
            </Grid> */}
            <div className="button-wrapper">
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
                  setIsCancel(false);
                }}
                sx={{ ml: 4 }}
              >
                {activeStep === steps?.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </Grid>
        </form>
      </CardContent>
    </div>
  );
};

export default Communication;
