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
  tponame: string;
  tpoemailid: string;
  tpocontactnumber: number;
}

const defaultValues = {
  tponame: "",
  tpoemailid: "",
  tpocontactnumber: null,
};

const YearsFunction = (item: string) => {
  return <MenuItem value={item}>{item}</MenuItem>;
};

const TpoDetailsView = () => {
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
                <Controller
                  name="tponame"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label="Your College Training and Placement Officer name"
                      onChange={onChange}
                      placeholder="Leonard"
                      error={Boolean(errors.tponame)}
                      aria-describedby="validation-tpo-tponame"
                    />
                  )}
                />
                {errors.tponame && (
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
                      value={value}
                      label="Your College Training and Placement Officer Email ID"
                      onChange={onChange}
                      placeholder="Leonard"
                      error={Boolean(errors.tpoemailid)}
                      aria-describedby="validation-tpo-tpoemailid"
                    />
                  )}
                />
                {errors.tpoemailid && (
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
                        value={value}
                        label="Your College Training and Placement Officer Contact Number"
                        onChange={onChange}
                        placeholder="Leonard"
                        error={Boolean(errors.tpocontactnumber)}
                        aria-describedby="validation-tpo-tpocontactnumber"
                      />
                    );
                  }}
                />
                {errors.tpocontactnumber && (
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

export default TpoDetailsView;
