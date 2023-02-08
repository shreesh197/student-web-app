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
  tponame: string;
  tpoemailid: string;
  tpocontactnumber: number;
}

const defaultValues = {
  tponame: "",
  tpoemailid: "",
  tpocontactnumber: null,
};

// const YearsFunction = (item: string) => {
//   return <MenuItem value={item}>{item}</MenuItem>;
// };

const TpoDetailsView = () => {

    const [isSubmit, setIsSubmit] = useState(false);
const [isEdit, setIsEdit] = useState(false);
const [isCancel, setIsCancel] = useState(false);
const [isChecking, setIsChecking] = useState(false);
const [tpoDetails, setTpoDetails] = useState(null);

    const [tpoName, setTpoName] = useState("");
    const [tpoEmail, setTpoEmail] = useState("");
    const [tpoNumber, setTpoNumber] = useState(null);

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  useEffect(() => {
    const fetchData = async () => {
      // const res = await getTPODetails();
      var tpoDetailsObj = {
        tpoName: "fghuj",
        tpoEmail: "kodnest@gmail.com",
        tpoNumber: 1234567890,
      };
      setTpoName(tpoDetailsObj.tpoName);
      setTpoEmail(tpoDetailsObj.tpoEmail);
      setTpoNumber(tpoDetailsObj.tpoNumber);
      setTpoDetails(tpoDetailsObj);
    };
    fetchData();
  }, []);

   const checkingEmpty = () => {
     if (!tpoName || !tpoEmail || !tpoNumber) {
       return false;
     } else {
       return true;
     }
   };

     const formReset = () => {
       setTpoName("fghuj");
       setTpoEmail("kodnest@gmail.com");
       setTpoNumber("1234567890");
     };


const onSubmit = async () => {
  // if (isSubmit) {
  console.log("Form Submitted");
  var tpoDetailsObj = {
    tpoName: "fghuj",
    tpoEmail: "kodnest@gmail.com",
    tpoNumber: 1234567890,
  };
  setTpoDetails(tpoDetailsObj);
  // const res = await updateTPODetails(communicationDetailsObj);
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
                  name="tponame"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { onChange } }) => (
                    <TextField
                      disabled={!isEdit ? true : false}
                      value={!isCancel ? tpoName : tpoDetails.tpoName}
                      label="Your College Training and Placement Officer name"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTpoName(e?.target?.value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!tpoName && isChecking)}
                      aria-describedby="validation-tpo-tponame"
                    />
                  )}
                />
                {!tpoName && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-tponame"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="tpoemailid"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      disabled={!isEdit ? true : false}
                      value={!isCancel ? tpoEmail : tpoDetails.tpoEmail}
                      label="Your College Training and Placement Officer Email ID"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setTpoEmail(e?.target?.value);
                      }}
                      placeholder="Leonard"
                      error={Boolean(!tpoEmail && isChecking)}
                      aria-describedby="validation-tpo-tpoemailid"
                    />
                  )}
                />
                {!tpoEmail && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-tpoemailid"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name="tpocontactnumber"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => {
                    console.log(`value inside render ======> ${value}`);
                    return (
                      <TextField
                        disabled={!isEdit ? true : false}
                        value={!isCancel ? tpoNumber : tpoDetails.tpoNumber}
                        label="Your College Training and Placement Officer Contact Number"
                        onChange={(e: any) => {
                          onChange(e?.target?.value);
                          setTpoNumber(e?.target?.value);
                        }}
                        placeholder="Leonard"
                        error={Boolean(!tpoNumber && isChecking)}
                        aria-describedby="validation-tpo-tpocontactnumber"
                      />
                    );
                  }}
                />
                {!tpoNumber && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-tpo-tpocontactnumber"
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

export default TpoDetailsView;
