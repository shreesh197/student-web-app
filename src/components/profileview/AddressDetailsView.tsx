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
import axios from "axios";

interface State {
  password: string;
  showPassword: boolean;
}

interface FormInputs {
  state: string;
  city: string;
}

const defaultValues = {
  state: "",
  city: "",
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

const AddressDetailsView = () => {
  const [indianSates, setIndianSates] = useState([]);
  const [cities, setCities] = useState([]);
  const [statesData, setStatesData] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const GetStates = async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json"
      );
      const { data } = res;
      const statesData = data?.states?.map((item: { state: any }) => {
        return {
          name: item.state,
          districts: item["districts"],
        };
      });
      console.log("States data is", statesData);
      setStatesData(statesData);

      const IndiaStates = data?.states?.map((item: { state: any }) => ({
        state: item.state,
      }));
      setIndianSates(IndiaStates);
    };

    GetStates();
  }, []);

  // useEffect(() => {

  // }, [selectedState]);

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues });

  const onSelectState = (e) => {
    // console.log(`e ====> ${JSON.stringify(e.target.value)}`);
    setSelectedState(e.target.value);
    // console.log(e.target.value);
    const cities = statesData?.filter(
      (item: { name: any }) => e.target.value === item.name
    )[0]["districts"];

    console.log(cities);

    setCities(cities);
  };

  const onSelectCity = (e) => {
    setSelectedCity(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = () => toast.success("Form Submitted");

  console.log(selectedState);

  return (
    <Card
      className="md:w-[60%] md:mt-[30px] md:mb-[30px] md:p-[20px] md:shadow-lg md:rounded-[16px]"
      style={{
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-address-state"
                  error={Boolean(!selectedState && isSubmit)}
                  htmlFor="validation-address-state"
                >
                  Current Location - State
                </InputLabel>
                <Controller
                  name="state"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => {
                    console.log(`value is =====> ${value}`);
                    return (
                      <Select
                        value={value}
                        label="Are you Working professional?"
                        onChange={(value: any) => {
                          onChange(value);
                          onSelectState(value);
                        }}
                        error={Boolean(!selectedState && isSubmit)}
                        labelId="validation-address-state"
                        aria-describedby="validation-address-state"
                      >
                        {/* <MenuItem value="yes">Yes</MenuItem>
        <MenuItem value="no">No</MenuItem> */}
                        {indianSates?.map((item, index) => (
                          <MenuItem value={item.state} key={index}>
                            {item.state}
                          </MenuItem>
                        ))}
                      </Select>
                    );
                  }}
                />
                {!selectedState && isSubmit && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-address-state"
                  >
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="validation-address-city"
                  error={Boolean(errors.city)}
                  htmlFor="validation-address-city"
                >
                  Current Location - City
                </InputLabel>
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={selectedCity && selectedCity}
                      label="Are you Working professional?"
                      onChange={onSelectCity}
                      error={Boolean(errors.city)}
                      labelId="validation-address-city"
                      aria-describedby="validation-address-city"
                    >
                      {/* <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem> */}
                      {cities?.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item && item}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {errors.city && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-address-city"
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

export default AddressDetailsView;
