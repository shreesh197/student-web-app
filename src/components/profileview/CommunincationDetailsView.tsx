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

// ** Types

interface FormInputs {
  email: string;
  primarycontactnumber: number;
  whatsappcontactnumber: number;
  preferredjoblocation: string;
}

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

const CommunincationDetailsView = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [communicationDetails, setCommunicationDetails] = useState(null);

  const [email, setEmail] = useState("");
  const [pnumber, setPnumber] = useState(null);
  const [wnumber, setWnumber] = useState(null);
  const [jobLocation, setJobLocation] = useState("");

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  useEffect(() => {
    const fetchData = async () => {
      // const res = await getCommunicationDetails();
      var communicationDetailsObj = {
        email: "kodnest@gmail.com",
        pnumber: 1234567890,
        // anumber: 1234567890,
        jobLocation: "bengaluru",
        wnumber: 1234567890,
      };

      setPnumber(communicationDetailsObj.pnumber);
      // setAnumber(1234567890);
      setJobLocation(communicationDetailsObj.jobLocation);
      setWnumber(communicationDetailsObj.wnumber);
      setEmail(communicationDetailsObj.email);
      setCommunicationDetails(communicationDetailsObj);
    };
    fetchData();
  }, []);

  const checkingEmpty = () => {
    if (!email || !pnumber || !jobLocation || !wnumber) {
      return false;
    } else {
      return true;
    }
  };

  const formReset = () => {
    setPnumber(1234567890);
    //  setAnumber(1234567890);
    setJobLocation("Bengaluru");
    setWnumber(1234567890);
    setEmail("kodnest@gmail.com");
  };

  const onSubmit = async () => {
    // if (isSubmit) {
    console.log("Form Submitted");
    var communicationDetailsObj = {
      email: "kodnest@gmail.com",
      pnumber: 1234567890,
      // anumber: 1234567890,
      jobLocation: "Bengaluru",
      wnumber: 1234567890,
    };
    setCommunicationDetails(communicationDetailsObj);
    // const res = await updateCommunicationDetails(communicationDetailsObj);
    // console.log(res);
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
      {/* <CardHeader title="Basic" /> */}
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <TextField
                      disabled={true}
                      type="email"
                      value={!isCancel ? email : communicationDetails.email}
                      label="Email Id (gmail by default)"
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
                {!email && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-communication-email"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="primarycontactnumber"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      disabled={true}
                      type="tel"
                      value={!isCancel ? pnumber : communicationDetails.pnumber}
                      label="Primary Contact Number"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPnumber(e?.target?.value);
                      }}
                      error={Boolean(!pnumber && isChecking)}
                      placeholder=""
                      aria-describedby="validation-communication-primarycontactnumber"
                    />
                  )}
                />
                {!pnumber && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-communication-primarycontactnumber"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="alternatecontactnumber"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      disabled={!isEdit ? true : false}
                      type="tel"
                      value={!isCancel ? anumber : communicationDetails.anumber}
                      label="Alternate Contact Number"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setAnumber(e?.target?.value);
                      }}
                      error={Boolean(!anumber && isChecking)}
                      placeholder=""
                      aria-describedby="validation-communication-alternatecontactnumber"
                    />
                  )}
                />
                {!anumber && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-communication-alternatecontactnumber"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="whatsappcontactnumber"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      disabled={!isEdit ? true : false}
                      type="tel"
                      value={!isCancel ? wnumber : communicationDetails.wnumber}
                      label="WhatsApp Contact Number"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setWnumber(e?.target?.value);
                      }}
                      error={Boolean(!wnumber && isChecking)}
                      placeholder=""
                      aria-describedby="validation-communication-whatsappcontactnumber"
                    />
                  )}
                />
                {!wnumber && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-communication-whatsappcontactnumber"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth disabled={!isEdit ? true : false}>
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
                      value={
                        !isCancel
                          ? jobLocation
                          : communicationDetails.jobLocation
                      }
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
    </Card>
  );
};

export default CommunincationDetailsView;
