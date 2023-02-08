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

const GapInAcademic = Array.from("0123456789");

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
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [academicDetails, setAcademicDetails] = useState(null);

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
  const [postgraduationPercentage, setPostGraduationPercentage] =
    useState(null);
  const [postgraduationCgpa, setPostGraduationCgpa] = useState(null);
  const [postactiveBacksLogs, setPostActiveBacksLogs] = useState(null);
  const [gapInAcademics, setGapInAcademics] = useState(null);

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  useEffect(() => {
    const fetchData = async () => {
      // const res = await getAcademicDetails();
      var academicDetailsObj = {
        usn: "234rtghnj",
        tenthYop: "2012",
        twelthYop: "2014",
        tenthPercentage: 90,
        twelthPercentage: 90,
        graduationCourse: "B.E",
        graduationBrnach: "Mechanical",
        graduationCollege: "MSRIT",
        graduationYop: "2018",
        graduationPercentage: 90,
        graduationCgpa: 9,
        activeBacksLogs: 0,
        postGraduationCourse: "N/A",
        postgraduationBrnach: "N/A",
        postgraduationCollege: "N/A",
        postgraduationYop: "N/A",
        postgraduationPercentage: 0,
        postgraduationCgpa: 0,
        postactiveBacksLogs: 0,
        gapInAcademics: 0,
      };
      setUsn(academicDetailsObj.usn)
      setTenthYop(academicDetailsObj.tenthYop)
      setTwelthYop(academicDetailsObj.twelthYop)
      setTenthPercentage(academicDetailsObj.tenthPercentage)
      setTwelthPercentage(academicDetailsObj.twelthPercentage)
      setGraduationCourse(academicDetailsObj.graduationCourse)
      setGraduationBrnach(academicDetailsObj.graduationBrnach)
      setGraduationCollege(academicDetailsObj.graduationCollege)
      setAcademicDetails(academicDetailsObj)
    };
    fetchData();
  }, []);

  const checkingEmpty = () => {
    if (!usn) {
      return false;
    } else {
      return true;
    }
  };

  const formReset = () => {};

  const onSubmit = async () => {
    // if (isSubmit) {
    console.log("Form Submitted");
    var academicDetailsObj = {
      usn: "",
      tenthYop: "",
      twelthYop: "",
      tenthPercentage: null,
      twelthPercentage: null,
      graduationCourse: "",
      graduationBrnach: "",
      graduationCollege: "",
      graduationYop: "",
      graduationPercentage: null,
      graduationCgpa: null,
      activeBacksLogs: null,
      postGraduationCourse: "",
      postgraduationBrnach: "",
      postgraduationCollege: "",
      postgraduationYop: "",
      postgraduationPercentage: null,
      postgraduationCgpa: null,
      postactiveBacksLogs: null,
      gapInAcademics: null,
    };

    setAcademicDetails(academicDetailsObj);
    // const res = await updateAcademicdetails(communicationDetailsObj);
    // console.log(res);
    // }
  };

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
                  render={({ field: { onChange } }) => (
                    <TextField
                      disabled={!isEdit ? true : false}
                      value={usn}
                      label="USN ID (College Roll No.)"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setUsn(e?.target?.value);
                      }}
                      placeholder="12f3gh"
                      error={Boolean(!usn && isChecking)}
                      aria-describedby="validation-academic-usn"
                    />
                  )}
                />
                {!usn && isChecking && (
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
              <FormControl fullWidth disabled={true}>
                <InputLabel
                  id="validation-academic-tenthyop"
                  error={Boolean(tenthYop && isChecking)}
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
                      value={tenthYop}
                      label="10th Year of Passout"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTenthYop(e?.target?.value);
                      }}
                      error={Boolean(!tenthYop && isChecking)}
                      labelId="validation-academic-tenthyop"
                      aria-describedby="validation-academic-tenthyop"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!tenthYop && isChecking && (
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
                      disabled={true}
                      type="number"
                      value={tenthPercentage}
                      label="10th %"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTenthPercentage(e?.target?.value);
                      }}
                      placeholder=""
                      error={Boolean(!tenthPercentage && isChecking)}
                      aria-describedby="validation-academic-tenthpercentage"
                    />
                  )}
                />
                {!tenthPercentage && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-tenthpercentage"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth disabled={true}>
                <InputLabel
                  id="validation-academic-twelthyop"
                  error={Boolean(!twelthYop && isChecking)}
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
                      value={twelthYop}
                      label="12th / PUC / Intermediate/Diploma passout"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTwelthYop(e?.target?.value);
                      }}
                      error={Boolean(!twelthYop && isChecking)}
                      labelId="validation-academic-twelthyop"
                      aria-describedby="validation-academic-twelthyop"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!twelthYop && isChecking && (
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
                      disabled={true}
                      type="number"
                      value={twelthPercentage}
                      label="12th / PUC / Intermediate/Diploma %"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTwelthPercentage(e?.target?.value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!twelthPercentage && isChecking)}
                      aria-describedby="validation-academic-twelthpercentage"
                    />
                  )}
                />
                {!twelthPercentage && isChecking && (
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
              <FormControl fullWidth disabled={true}>
                <InputLabel
                  id="validation-academic-graduationcourse"
                  error={Boolean(!graduationCourse && isChecking)}
                  htmlFor="validation-academic-graduationcourse"
                >
                  Graduation Course
                </InputLabel>
                <Controller
                  name="graduationcourse"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <Select
                      value={graduationCourse}
                      label="Graduation Course"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setGraduationCourse(e?.target?.value);
                      }}
                      error={Boolean(!graduationCourse && isChecking)}
                      labelId="validation-academic-graduationcourse"
                      aria-describedby="validation-academic-graduationcourse"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationCourse && isChecking && (
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
              <FormControl fullWidth disabled={true}>
                <InputLabel
                  id="validation-academic-graduationbranch"
                  error={Boolean(!graduationCourse && isChecking)}
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
                      value={graduationBrnach}
                      label="Graduation - Branch / Stream"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setGraduationBrnach(e?.target?.value);
                      }}
                      error={Boolean(!graduationCourse && isChecking)}
                      labelId="validation-academic-graduationbranch"
                      aria-describedby="validation-academic-graduationbranch"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationCourse && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-graduationyop"
                  error={Boolean(!graduationYop && isChecking)}
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
                      value={
                        !isCancel
                          ? graduationYop
                          : academicDetails.graduationYop
                      }
                      label="Graduation Year of Passout"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setGraduationYop(e?.target?.value);
                      }}
                      error={Boolean(!graduationYop && isChecking)}
                      labelId="validation-academic-graduationyop"
                      aria-describedby="validation-academic-graduationyop"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationYop && isChecking && (
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
                      disabled={!isEdit ? true : false}
                      type="number"
                      value={
                        !isCancel
                          ? graduationPercentage
                          : academicDetails.graduationPercentage
                      }
                      label="Graduation Percentage (% equal to CGPA)"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setGraduationPercentage(e?.target?.value);
                      }}
                      placeholder={graduationPercentage}
                      error={Boolean(!graduationPercentage && isChecking)}
                      aria-describedby="validation-academic-graduationpercentage"
                    />
                  )}
                />
                {!graduationPercentage && isChecking && (
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
                      disabled={!isEdit ? true : false}
                      type="number"
                      value={
                        !isCancel
                          ? graduationCgpa
                          : academicDetails.graduationCgpa
                      }
                      label="Graduation (CGPA only)"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setGraduationCgpa(e?.target?.value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!graduationCgpa && isChecking)}
                      aria-describedby="validation-academic-graduationpercgpa"
                    />
                  )}
                />
                {!graduationCgpa && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-activebacklogs"
                  error={Boolean(!activeBacksLogs && isChecking)}
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
                      value={
                        !isCancel
                          ? activeBacksLogs
                          : academicDetails.activeBacksLogs
                      }
                      label="Any Active Backlog in Graduation"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setActiveBacksLogs(e?.target?.value);
                      }}
                      error={Boolean(!activeBacksLogs && isChecking)}
                      labelId="validation-academic-activebacklogs"
                      aria-describedby="validation-academic-activebacklogs"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!activeBacksLogs && isChecking && (
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
              <FormControl fullWidth disabled={true}>
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
                      value={graduationCollege}
                      label="Graduation College Name"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setGraduationCollege(e?.target?.value);
                      }}
                      error={Boolean(!graduationCollege && isChecking)}
                      labelId="validation-academic-graduationcollegename"
                      aria-describedby="validation-academic-graduationcollegename"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!graduationCollege && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-postgraduationcourse"
                  error={Boolean(!postgraduationPercentage && isChecking)}
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
                      value={
                        !isCancel
                          ? postgraduationPercentage
                          : academicDetails.postgraduationPercentage
                      }
                      label="Post-Graduation Course"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPostGraduationCourse(e?.target?.value);
                      }}
                      error={Boolean(!postgraduationPercentage && isChecking)}
                      labelId="validation-academic-postgraduationcourse"
                      aria-describedby="validation-academic-postgraduationcourse"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationPercentage && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-postgraduationbranch"
                  error={Boolean(!postgraduationBrnach && isChecking)}
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
                      value={
                        !isCancel
                          ? postgraduationBrnach
                          : academicDetails.postgraduationBrnach
                      }
                      label="Post-Graduation - Branch / Stream"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPostGraduationBrnach(e?.target?.value);
                      }}
                      error={Boolean(!postgraduationBrnach && isChecking)}
                      labelId="validation-academic-postgraduationbranch"
                      aria-describedby="validation-academic-postgraduationbranch"
                    >
                      {GraduationCourse.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationBrnach && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-postgraduationyop"
                  error={Boolean(!postgraduationYop && isChecking)}
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
                      value={
                        !isCancel
                          ? postgraduationYop
                          : academicDetails.postgraduationYop
                      }
                      label="Post-Graduation Year of Passout"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPostGraduationYop(e?.target?.value);
                      }}
                      error={Boolean(!postgraduationYop && isChecking)}
                      labelId="validation-academic-postgraduationyop"
                      aria-describedby="validation-academic-postgraduationyop"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationYop && isChecking && (
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
                      disabled={!isEdit ? true : false}
                      type="number"
                      value={
                        !isCancel
                          ? postgraduationPercentage
                          : academicDetails.postgraduationPercentage
                      }
                      label="Post-Graduation  (% equal to CGPA)"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPostGraduationPercentage(e?.target?.value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!postgraduationPercentage && isChecking)}
                      aria-describedby="validation-academic-postgraduationpercentage"
                    />
                  )}
                />
                {!postgraduationPercentage && isChecking && (
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
                      disabled={!isEdit ? true : false}
                      type="number"
                      value={
                        !isCancel
                          ? postgraduationCgpa
                          : academicDetails.postgraduationCgpa
                      }
                      label="Post-Graduation (CGPA only)"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPostGraduationCgpa(e?.target?.value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!postgraduationCgpa && isChecking)}
                      aria-describedby="validation-academic-postgraduationpercgpa"
                    />
                  )}
                />
                {!postgraduationCgpa && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-postgraduationactivebacklogs"
                  error={Boolean(!postactiveBacksLogs && isChecking)}
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
                      value={
                        !isCancel
                          ? postactiveBacksLogs
                          : academicDetails.postactiveBacksLogs
                      }
                      label="Any Active Backlog in Post-Graduation"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPostActiveBacksLogs(e?.target?.value);
                      }}
                      error={Boolean(!postactiveBacksLogs && isChecking)}
                      labelId="validation-academic-postgraduationactivebacklogs"
                      aria-describedby="validation-academic-postgraduationactivebacklogs"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postactiveBacksLogs && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-postgraduationcollegename"
                  error={Boolean(!postgraduationCollege && isChecking)}
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
                      value={
                        !isCancel
                          ? postgraduationCollege
                          : academicDetails.postgraduationCollege
                      }
                      label="Post-Graduation College Name"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setPostGraduationCollege(e?.target?.value);
                      }}
                      error={Boolean(!postgraduationCollege && isChecking)}
                      labelId="validation-academic-postgraduationcollegename"
                      aria-describedby="validation-academic-postgraduationcollegename"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!postgraduationCollege && isChecking && (
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
              <FormControl fullWidth disabled={!isEdit ? true : false}>
                <InputLabel
                  id="validation-academic-gapinacademics"
                  error={Boolean(!gapInAcademics && isChecking)}
                  htmlFor="validation-academic-gapinacademics"
                >
                  Gap in Academics, if any, (Nos of years)
                </InputLabel>
                <Controller
                  name="gapinacademics"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <Select
                      value={
                        !isCancel
                          ? gapInAcademics
                          : academicDetails.gapInAcademics
                      }
                      label="Gap in Academics, if any, (Nos of years)"
                      onChange={(value: any) => {
                        onChange(value);
                        setGapInAcademics(value);
                      }}
                      error={Boolean(!gapInAcademics && isChecking)}
                      labelId="validation-academic-gapinacademics"
                      aria-describedby="validation-academic-gapinacademics"
                    >
                      {TenthYearOfPassOut.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!gapInAcademics && isChecking && (
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

export default AcademicDetailsView;
