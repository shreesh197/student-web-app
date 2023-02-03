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
  
  usn: string;
  tenthyop: string;
  twelthyop: string;
  tenthpercentage: number;
  twelthpercentage: number;
  graduationcourse: string;
  graduationbranch: string;
  graduationyop: string;
  graduationcollegename: string;
  graduationpercentage: number;
  graduationpercgpa: number;
  activebacklogs: number;
  postgraduationcourse: string;
  postgraduationbranch: string;
  postgraduationyop: string;
  postgraduationcollegename: string;
  postgraduationpercentage: number;
  postgraduationpercgpa: number;
  postgraduationactivebacklogs: number;
  gapinacademics: number;
}

const defaultValues = {
  usn: "",
  tenthyop: "",
  twelthyop: "",
  graduationcourse: "",
  graduationbranch: "",
  graduationyop: "",
  graduationcollegename: "",
  tenthpercentage: null,
  twelthpercentage: null,
  graduationpercentage: null,
  graduationpercgpa: null,
  activebacklogs: null,
  postgraduationcourse: "",
  postgraduationbranch: "",
  postgraduationyop: "",
  postgraduationcollegename: "",
  postgraduationpercentage: null,
  postgraduationpercgpa: null,
  postgraduationactivebacklogs: null,
  gapinacademics: null,
};

const TenthYearOfPassOut = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "others",
  
];

const GapInAcademic = Array.from("0123456789")

const GraduationCourse = [
  "Bachelor of Engineering/Technology (B.E/B.Tech)",
  "Bachelor of Computer Application (BCA)",
  "Bachelor of Science (B.Sc)",
  "Bachelor of Business Administration (BBA/BBM)/",
  "Others",
];

// const YearsFunction = (item: string) => {
//   return <MenuItem value={item}>{item}</MenuItem>;
// };

const AcademicDetailsView = () => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [usn, setUsn] = useState("");
    const [tenthYop, setTenthYop] = useState("");
    const [twelthYop, setTwelthYop] = useState("");
    const [tenthPercentage, setTenthPercentage] = useState(null);
    const [twelthPercentage, setTwelthPercentage] = useState(null);
    const [graduationCourse, setGraduationCourse] = useState("");
    const [graduationBrnach, setGraduationBrnach] = useState("");
    const [graduationYop, setGraduationYop] = useState("");
    const [graduationCollege, setGraduationCollege] = useState("");
    const [graduationPercentage, setGraduationPercentage] = useState(null);
    const [graduationCgpa, setGraduationCgpa] = useState(null);
    const [activeBacksLogs, setActiveBacksLogs] = useState(null);
    const [postGraduationCourse, setPostGraduationCourse] = useState("");
    const [postgraduationBrnach, setPostGraduationBrnach] = useState("");
    const [postgraduationYop, setPostGraduationYop] = useState("");
    const [postgraduationCollege, setPostGraduationCollege] = useState("");
    const [postgraduationPercentage, setPostGraduationPercentage] = useState(null);
    const [postgraduationCgpa, setPostGraduationCgpa] = useState(null);
    const [postactiveBacksLogs, setPostActiveBacksLogs] = useState(null);
    const [gapInAcademics, setGapInAcademics] = useState(null);


  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  const onSubmit = () => toast.success("Form Submitted");

  return (
    <Card
      className="md:w-[88%] md:mt-[30px] md:mb-[30px] md:p-[20px] md:shadow-lg md:rounded-[16px]"
      style={{
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      {/* <CardHeader title="Basic" /> */}
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="usn"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label="USN ID (College Roll No.)"
                      onChange={(value: any) => {
                        onChange(value);
                        setUsn(value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!usn && isSubmit)}
                      aria-describedby="validation-academic-usn"
                    />
                  )}
                />
                {!usn && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-usn"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-tenthyop"
                  error={Boolean(errors.tenthyop)}
                  htmlFor="validation-academic-tenthyop"
                >
                  10th Year of Passout
                </InputLabel>
                <Controller
                  name="tenthyop"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="10th Year of Passout"
                      onChange={(value: any) => {
                        onChange(value);
                        setTenthYop(value);
                      }}
                      error={Boolean(!tenthYop && isSubmit)}
                      labelId="validation-academic-tenthyop"
                      aria-describedby="validation-academic-tenthyop"
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
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!tenthYop && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-tenthyop"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="tenthpercentage"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type="number"
                      value={value}
                      label="10th %"
                      onChange={onChange}
                      placeholder=""
                      error={Boolean(errors.tenthpercentage)}
                      aria-describedby="validation-academic-tenthpercentage"
                    />
                  )}
                />
                {errors.tenthpercentage && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-tenthpercentage"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="twelthpercentage"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type="number"
                      value={value}
                      label="12th / PUC / Intermediate/Diploma %"
                      onChange={onChange}
                      placeholder="Leonard"
                      error={Boolean(errors.twelthpercentage)}
                      aria-describedby="validation-academic-twelthpercentage"
                    />
                  )}
                />
                {errors.twelthpercentage && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-twelthpercentage"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid> */}

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-twelthyop"
                  error={Boolean(errors.twelthyop)}
                  htmlFor="validation-academic-tenthyop"
                >
                  12th / PUC / Intermediate/Diploma passout
                </InputLabel>
                <Controller
                  name="twelthyop"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="12th / PUC / Intermediate/Diploma passout"
                      onChange={(value: any) => {
                        onChange(value);
                        setTwelthYop(value);
                      }}
                      error={Boolean(!twelthYop && isSubmit)}
                      labelId="validation-academic-twelthyop"
                      aria-describedby="validation-academic-twelthyop"
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
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!twelthYop && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-twelthyop"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="twelthpercentage"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type="number"
                      value={value}
                      label="12th / PUC / Intermediate/Diploma %"
                      onChange={(value: any) => {
                        onChange(value);
                        setTwelthPercentage(value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!twelthPercentage && isSubmit)}
                      aria-describedby="validation-academic-twelthpercentage"
                    />
                  )}
                />
                {!twelthPercentage && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-twelthpercentage"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-graduationcourse"
                  error={Boolean(errors.graduationcourse)}
                  htmlFor="validation-academic-graduationcourse"
                >
                  Graduation Course
                </InputLabel>
                <Controller
                  name="graduationcourse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Graduation Course"
                      onChange={(value: any) => {
                        onChange(value);
                        setGraduationCourse(value);
                      }}
                      error={Boolean(!graduationCourse && isSubmit)}
                      labelId="validation-academic-graduationcourse"
                      aria-describedby="validation-academic-graduationcourse"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationCourse && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-graduationcourse"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-graduationbranch"
                  error={Boolean(errors.graduationbranch)}
                  htmlFor="validation-academic-graduationbranch"
                >
                  Graduation - Branch / Stream
                </InputLabel>
                <Controller
                  name="graduationbranch"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Graduation - Branch / Stream"
                      onChange={(value: any) => {
                        onChange(value);
                        setGraduationBrnach(value);
                      }}
                      error={Boolean(!graduationCourse && isSubmit)}
                      labelId="validation-academic-graduationbranch"
                      aria-describedby="validation-academic-graduationbranch"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationCourse && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-graduationbranch"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-graduationyop"
                  error={Boolean(errors.graduationyop)}
                  htmlFor="validation-academic-graduationyop"
                >
                  Graduation Year of Passout
                </InputLabel>
                <Controller
                  name="graduationyop"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Graduation Year of Passout"
                      onChange={(value: any) => {
                        onChange(value);
                        setGraduationYop(value);
                      }}
                      error={Boolean(!graduationYop && isSubmit)}
                      labelId="validation-academic-graduationyop"
                      aria-describedby="validation-academic-graduationyop"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationYop && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-graduationyop"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="graduationpercentage"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type="number"
                      value={value}
                      label="Graduation Percentage (% equal to CGPA)"
                      onChange={(value: any) => {
                        onChange(value);
                        setGraduationPercentage(value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!graduationPercentage && isSubmit)}
                      aria-describedby="validation-academic-graduationpercentage"
                    />
                  )}
                />
                {!graduationPercentage && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-graduationpercentage"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="graduationpercgpa"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type="number"
                      value={value}
                      label="Graduation (CGPA only)"
                      onChange={(value: any) => {
                        onChange(value);
                        setGraduationCgpa(value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!graduationCgpa && isSubmit)}
                      aria-describedby="validation-academic-graduationpercgpa"
                    />
                  )}
                />
                {!graduationCgpa && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-graduationpercgpa"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-activebacklogs"
                  error={Boolean(!activeBacksLogs && isSubmit)}
                  htmlFor="validation-academic-activebacklogs"
                >
                  Any Active Backlog in Graduation
                </InputLabel>
                <Controller
                  name="activebacklogs"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Any Active Backlog in Graduation"
                      onChange={(value: any) => {
                        onChange(value);
                        setActiveBacksLogs(value);
                      }}
                      error={Boolean(!activeBacksLogs && isSubmit)}
                      labelId="validation-academic-activebacklogs"
                      aria-describedby="validation-academic-activebacklogs"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!activeBacksLogs && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-activebacklogs"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-graduationcollegename"
                  error={Boolean(!graduationCollege && isSubmit)}
                  htmlFor="validation-academic-graduationcollegename"
                >
                  Graduation College Name
                </InputLabel>
                <Controller
                  name="graduationcollegename"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Graduation College Name"
                      onChange={(value: any) => {
                        onChange(value);
                        setGraduationCollege(value);
                      }}
                      error={Boolean(!graduationCollege && isSubmit)}
                      labelId="validation-academic-graduationcollegename"
                      aria-describedby="validation-academic-graduationcollegename"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationCollege && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-graduationcollegename"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-postgraduationcourse"
                  error={Boolean(!postgraduationPercentage && isSubmit)}
                  htmlFor="validation-academic-postgraduationcourse"
                >
                  Post-Graduation Course
                </InputLabel>
                <Controller
                  name="postgraduationcourse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Post-Graduation Course"
                      onChange={(value: any) => {
                        onChange(value);
                        setPostGraduationCourse(value);
                      }}
                      error={Boolean(!postgraduationPercentage && isSubmit)}
                      labelId="validation-academic-postgraduationcourse"
                      aria-describedby="validation-academic-postgraduationcourse"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationPercentage && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-postgraduationcourse"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-postgraduationbranch"
                  error={Boolean(errors.postgraduationbranch)}
                  htmlFor="validation-academic-postgraduationbranch"
                >
                  Post-Graduation - Branch / Stream
                </InputLabel>
                <Controller
                  name="postgraduationbranch"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Post-Graduation - Branch / Stream"
                      onChange={(value: any) => {
                        onChange(value);
                        setPostGraduationBrnach(value);
                      }}
                      error={Boolean(!postgraduationBrnach && isSubmit)}
                      labelId="validation-academic-postgraduationbranch"
                      aria-describedby="validation-academic-postgraduationbranch"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationBrnach && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-postgraduationbranch"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-postgraduationyop"
                  error={Boolean(errors.postgraduationyop)}
                  htmlFor="validation-academic-postgraduationyop"
                >
                  Post-Graduation Year of Passout
                </InputLabel>
                <Controller
                  name="postgraduationyop"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Post-Graduation Year of Passout"
                      onChange={(value: any) => {
                        onChange(value);
                        setPostGraduationYop(value);
                      }}
                      error={Boolean(!postgraduationYop && isSubmit)}
                      labelId="validation-academic-postgraduationyop"
                      aria-describedby="validation-academic-postgraduationyop"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationYop && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-postgraduationyop"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="postgraduationpercentage"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type="number"
                      value={value}
                      label="Post-Graduation  (% equal to CGPA)"
                      onChange={(value: any) => {
                        onChange(value);
                        setPostGraduationPercentage(value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!postgraduationPercentage && isSubmit)}
                      aria-describedby="validation-academic-postgraduationpercentage"
                    />
                  )}
                />
                {!postgraduationPercentage && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-postgraduationpercentage"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name="postgraduationpercgpa"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type="number"
                      value={value}
                      label="Post-Graduation (CGPA only)"
                      onChange={(value: any) => {
                        onChange(value);
                        setPostGraduationCgpa(value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(errors.postgraduationpercgpa)}
                      aria-describedby="validation-academic-postgraduationpercgpa"
                    />
                  )}
                />
                {errors.postgraduationpercgpa && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-postgraduationpercgpa"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-postgraduationactivebacklogs"
                  error={Boolean(errors.postgraduationactivebacklogs)}
                  htmlFor="validation-academic-postgraduationactivebacklogs"
                >
                  Any Active Backlog in Post-Graduation
                </InputLabel>
                <Controller
                  name="postgraduationactivebacklogs"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Any Active Backlog in Post-Graduation"
                      onChange={(value: any) => {
                        onChange(value);
                        setPostActiveBacksLogs(value);
                      }}
                      error={Boolean(!postactiveBacksLogs && isSubmit)}
                      labelId="validation-academic-postgraduationactivebacklogs"
                      aria-describedby="validation-academic-postgraduationactivebacklogs"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postactiveBacksLogs && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-postgraduationactivebacklogs"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-postgraduationcollegename"
                  error={Boolean(errors.postgraduationcollegename)}
                  htmlFor="validation-academic-postgraduationcollegename"
                >
                  Post-Graduation College Name
                </InputLabel>
                <Controller
                  name="postgraduationcollegename"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Post-Graduation College Name"
                      onChange={(value: any) => {
                        onChange(value);
                        setPostGraduationCollege(value);
                      }}
                      error={Boolean(!postgraduationCollege && isSubmit)}
                      labelId="validation-academic-postgraduationcollegename"
                      aria-describedby="validation-academic-postgraduationcollegename"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationCollege && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-postgraduationcollegename"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-academic-gapinacademics"
                  error={Boolean(errors.gapinacademics)}
                  htmlFor="validation-academic-gapinacademics"
                >
                  Gap in Academics, if any, (Nos of years)
                </InputLabel>
                <Controller
                  name="gapinacademics"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label="Gap in Academics, if any, (Nos of years)"
                      onChange={(value: any) => {
                        onChange(value);
                        setGapInAcademics(value);
                      }}
                      error={Boolean(!gapInAcademics && isSubmit)}
                      labelId="validation-academic-gapinacademics"
                      aria-describedby="validation-academic-gapinacademics"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!gapInAcademics && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-academic-gapinacademics"
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

export default AcademicDetailsView;
