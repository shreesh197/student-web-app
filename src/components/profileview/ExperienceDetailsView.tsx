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

interface State {
  password: string;
  showPassword: boolean;
}

interface FormInputs {
  working: string;
  totalyearsofexperience: string;
}

const defaultValues = {
  working: "",
  totalyearsofexperience: "",
};

const ExperienceYears = [
  "0 Years",
  "6 Months",
  "1 Year",
  "2 Years",
  "3 Year",
  "4 Years",
  "5 Years",
];

// const YearsFunction = (item: string) => {
//   return <MenuItem value={item}>{item}</MenuItem>;
// };

const ExperienceDetailsView = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [experienceDetails, setexperienceDetails] = useState(null);

  const [working, setWorking] = useState("");
  const [YOE, setYOE] = useState("");

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  useEffect(() => {
    const fetchData = async () => {
      // const res = await getExperienceDetails();
      var experienceDetailsObj = {
        working: "yes",
        YOE: "2 years",
      };
      setWorking(experienceDetailsObj.working);
      setYOE(experienceDetailsObj.YOE);

      setexperienceDetails(experienceDetailsObj);
    };
    fetchData();
  }, []);

  const checkingEmpty = () => {
    if (!working || !YOE) {
      return false;
    } else {
      return true;
    }
  };

  const formReset = () => {
    setWorking("yes");
    setYOE("2 years");
  };

  const onSubmit = async () => {
    // if (isSubmit) {
    console.log("Form Submitted");
    var experienceDetailsObj = {
      working: "Yes",
      YOE: "2 years",
    };
    setexperienceDetails(experienceDetailsObj);
    // const res = await updateExeperienceDetails(experienceDetailsObj);
    // console.log(res);
    // }
  };

  console.log(`outside =====> ${working}`);

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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-experience-working"
                  error={Boolean(!working && isChecking)}
                  htmlFor="validation-experience-working"
                >
                  Are you Working professional?
                </InputLabel>
                <Controller
                  name="working"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <Select
                      value={!isCancel ? working : experienceDetails?.working}
                      label="Are you Working professional?"
                      onChange={(e: any) => {
                        console.log(`are you working =====> ${working}`);
                        onChange(e?.target?.value);
                        setWorking(e?.target?.value);
                      }}
                      error={Boolean(!working && isChecking)}
                      labelId="validation-experience-working"
                      aria-describedby="validation-experience-working"
                    >
                      {["Yes", "No"].map((value: string, idx: number) => (
                        <MenuItem key={idx} value={value.toLowerCase()}>
                          {value}
                        </MenuItem>
                      ))}
                      {/* <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem> */}
                    </Select>
                  )}
                />
                {!working && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-experience-working"
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
                  error={Boolean(!YOE && isChecking)}
                  htmlFor="validation-experience-totalyearsofexperience"
                >
                  Total work experience
                </InputLabel>
                <Controller
                  name="totalyearsofexperience"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={!isCancel ? YOE : experienceDetails.YOE}
                      label="Total work experience"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setYOE(e?.target?.value);
                      }}
                      error={Boolean(!YOE && isChecking)}
                      labelId="validation-experience-totalyearsofexperience"
                      aria-describedby="validation-experience-totalyearsofexperience"
                    >
                      {ExperienceYears.map((item: string, idx: number) => (
                        <MenuItem key={idx} value={item.toLowerCase()}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!YOE && isChecking && (
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

export default ExperienceDetailsView;
