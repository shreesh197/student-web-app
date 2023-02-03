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
import { useForm, Controller } from "react-hook-form";

// ** Icon Imports
import Icon from "../../common/ui-library/app-repository-admin-panel/src/@core/components/icon";

// ** Types

interface FormInputs {

  email: string;
  primarycontactnumber: number;
  alternatecontactnumber: number;
  whatsappcontactnumber: number;
}

interface CustomInputProps {
  label: string;
  error: boolean;
  onChange: (event: ChangeEvent) => void;
}

const defaultValues = {
  email: "",
  primarycontactnumber: null,
  alternatecontactnumber: null,
  whatsappcontactnumber: null,
};

const CustomInput = forwardRef(({ ...props }: CustomInputProps, ref) => {
  return <TextField inputRef={ref} {...props} sx={{ width: "100%" }} />;
});

const CommunincationDetailsView = () => {
 
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
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        type="email"
                        value={value}
                        label="Email Id (gmail by default)"
                        onChange={onChange}
                        error={Boolean(errors.email)}
                        placeholder="carterleonard@gmail.com"
                        aria-describedby="validation-communication-email"
                      />
                    )}
                  />
                  {errors.email && (
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
                        type="tel"
                        value={value}
                        label="Primary Contact Number"
                        onChange={onChange}
                        error={Boolean(errors.primarycontactnumber)}
                        placeholder=""
                        aria-describedby="validation-communication-primarycontactnumber"
                      />
                    )}
                  />
                  {errors.primarycontactnumber && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-communication-primarycontactnumber"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="alternatecontactnumber"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        type="tel"
                        value={value}
                        label="Alternate Contact Number"
                        onChange={onChange}
                        error={Boolean(errors.primarycontactnumber)}
                        placeholder=""
                        aria-describedby="validation-communication-alternatecontactnumber"
                      />
                    )}
                  />
                  {errors.alternatecontactnumber && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-communication-alternatecontactnumber"
                    >
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="whatsappcontactnumber"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        type="tel"
                        value={value}
                        label="WhatsApp Contact Number  ( Father/mother/sister/brother)"
                        onChange={onChange}
                        error={Boolean(errors.whatsappcontactnumber)}
                        placeholder=""
                        aria-describedby="validation-communication-whatsappcontactnumber"
                      />
                    )}
                  />
                  {errors.whatsappcontactnumber && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id="validation-communication-whatsappcontactnumber"
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

export default CommunincationDetailsView;
