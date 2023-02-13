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
import { configConsumerProps } from "antd/es/config-provider";
import { AddressDetailsInterface } from "../../constants/profile";

interface State {
  password: string;
  showPassword: boolean;
}

const defaultValues = {
  state: "",
  city: "",
};

const AddressDetailsView = ({
  handleBack,
  handleNext,
  activeStep,
  steps,
  addressDetails,
  setAddressDetails,
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const [indianSates, setIndianSates] = useState([]);
  const [cities, setCities] = useState([]);
  const [statesData, setStatesData] = useState(null);
  const [selectedState, setSelectedState] = useState(
    addressDetails.state || ""
  );
  const [selectedCity, setSelectedCity] = useState(addressDetails.city || "");

  const dependencies = [selectedState, selectedCity];

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
      // console.log("States data is", statesData);
      setStatesData(statesData);

      const IndiaStates = data?.states?.map((item: { state: any }) => ({
        state: item.state,
      }));
      setIndianSates(IndiaStates);
    };

    GetStates();
  }, []);

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressDetailsInterface>({ defaultValues });

  useEffect(() => {
    var addressDetailsObj: AddressDetailsInterface = {
      state: selectedState,
      city: selectedCity,
    };
    setAddressDetails(addressDetailsObj);
  }, [dependencies]);

  useEffect(() => {
    onSelectState();
  }, [selectedState]);

  const onSelectState = () =>
    // e: any
    {
      // console.log("Selected state is", e.target.value);
      const cities = statesData?.filter(
        (item: { name: any }) => selectedState === item?.name
      )[0]["districts"];

      setCities(cities);
    };

  const checkingEmpty = () => {
    if (!selectedState || !selectedCity) {
      return false;
    } else {
      return true;
    }
  };

  //   const formReset = () => {
  //     setSelectedState("karnataka");
  //     setSelectedCity("bengaluru");
  //   };

  // const onSelectCity = (e) => {
  //   setSelectedCity(e.target.value);
  //   // console.log(e.target.value);
  // };

  const onSubmit = async () => {
    // if (isSubmit) {
    console.log("Form Submitted");
    var addressDetailsObj: AddressDetailsInterface = {
      state: selectedState,
      city: selectedCity,
    };
    setAddressDetails(addressDetailsObj);
    // const res = await updateAddressDetails(addressDetailsObj);
    // console.log(res);
    // }
  };

  //   console.log("Selected state is outside", selectedState);

  return (
    <div>
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
                  render={({ field: { onChange } }) => {
                    return (
                      <Select
                        value={selectedState}
                        label="Are you Working professional?"
                        onChange={(e: any) => {
                          console.log(
                            "Selected state is inside",
                            selectedState
                          );

                          onChange(e?.target?.value);
                          // setSelectedState(e?.target?.value);
                          // onSelectState(e?.target?.value);
                        }}
                        error={Boolean(!selectedState && isChecking)}
                        labelId="validation-address-state"
                        aria-describedby="validation-address-state"
                      >
                        {/* <MenuItem value="yes">Yes</MenuItem>
        <MenuItem value="no">No</MenuItem> */}
                        {indianSates?.map((item, index) => (
                          <MenuItem
                            value={item.state}
                            key={index}
                            onClick={() => {
                              console.log(`menu ====> ${item.state}`);
                              setSelectedState(item.state);
                            }}
                          >
                            {item.state}
                          </MenuItem>
                        ))}
                      </Select>
                    );
                  }}
                />
                {!selectedState && isChecking && (
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
              <FormControl fullWidth >
                <InputLabel
                  id="validation-address-city"
                  error={Boolean(!selectedCity && isSubmit)}
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
                      value={selectedCity}
                      label="Current Location - City"
                      onChange={(e: any) => {
                        onChange(e?.target?.value);
                        setSelectedCity(e?.target?.value);
                      }}
                      error={Boolean(!selectedCity && isChecking)}
                      labelId="validation-address-city"
                      aria-describedby="validation-address-city"
                    >
                      {cities?.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item && item}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!selectedCity && isChecking && (
                  <FormHelperText
                    sx={{ color: "error.main" }}
                    id="validation-address-city"
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
                    formReset();
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
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </Grid>
        </form>
      </CardContent>
    </div>
  );
};

export default AddressDetailsView;
