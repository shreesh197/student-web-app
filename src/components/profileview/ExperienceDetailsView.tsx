// ** React Imports
import {
  forwardRef,
  MouseEvent,
  useState,
  ChangeEvent,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
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
    const [working, setWorking] = useState("");
    const [YOE, setYOE] = useState("");

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  const onSubmit = () => toast.success("Form Submitted");

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
                <InputLabel
                  id="validation-experience-working"
                  error={Boolean(!working && isSubmit)}
                  htmlFor="validation-experience-working"
                >
                  Are you Working professional?
                </InputLabel>
                <Controller
                  name="working"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Are you Working professional?"
                      onChange={(value: any) => {
                        onChange(value);
                        setWorking(value);
                      }}
                      error={Boolean(!working && isSubmit)}
                      labelId="validation-experience-working"
                      aria-describedby="validation-experience-working"
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  )}
                />
                {!working && isSubmit && (
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
              <FormControl fullWidth>
                <InputLabel
                  id="validation-experience-totalyearsofexperience"
                  error={Boolean(!YOE && isSubmit)}
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
                      value={value}
                      label="Total work experience"
                      onChange={(value: any) => {
                        onChange(value);
                        setYOE(value);
                      }}
                      error={Boolean(!YOE && isSubmit)}
                      labelId="validation-experience-totalyearsofexperience"
                      aria-describedby="validation-experience-totalyearsofexperience"
                    >
                      {/* <MenuItem value="0 months 0 years">
                        0 Months 0 Years
                      </MenuItem>
                      <MenuItem value="6 months">6 Months</MenuItem>
                      <MenuItem value="1 year">1 year</MenuItem>
                      <MenuItem value="2 year">2 years</MenuItem>
                      <MenuItem value="3 year">3 years</MenuItem>
                      <MenuItem value="4 year">4 years</MenuItem>
                      <MenuItem value="5 year">5 years</MenuItem> */}
                      {ExperienceYears.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!YOE && isSubmit && (
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
                onClick={() => setIsSubmit(true)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExperienceDetailsView;
