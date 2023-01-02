import { useContext, useEffect, useState } from "react";
import { AddressDetailsInterface, formBtnColors } from "../../helper/Profile";
import { stepNumber } from "../../helper/Stepper";
import FormButton from "../common/button";
import TextAreaField from "../common/inputs/text-area/TextAreaField";
import TextField from "../common/inputs/text-field/TextField";
import { DeviceContext } from "app-repo-common-pkg";
import { useForm } from "react-hook-form";
import { getCorrectClassName, getValidationErrMsg } from "../../helper";
import { postAdressDetails } from "../../services/ApiExecutor";

const AddressDetails = ({
  setCurrentStep,
  addressDetails,
  setAddressDetails,
}: {
  setCurrentStep: any;
  addressDetails: AddressDetailsInterface;
  setAddressDetails: any;
}) => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  const isSmallScreen = isMobile && !isTab;
  const [city, setCity] = useState(addressDetails.city || "");
  const [state, setState] = useState(addressDetails.state || "");
  const [country, setCountry] = useState(addressDetails.country || "");
  const [pinCode, setPinCode] = useState(addressDetails.pinCode || "");
  const [permanentAddress, setPermanentAddress] = useState(
    addressDetails.permanentAddress || ""
  );

  const dependencies = [city, state, country, pinCode, permanentAddress];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    var addressDetailsObj: AddressDetailsInterface = {
      city,
      state,
      country,
      pinCode,
      permanentAddress,
    };
    setAddressDetails(addressDetailsObj);
  }, dependencies);

  const saveAddressDetails = async () => {
    let body = {
      city: city,
      state: state,
      country: country,
      address: permanentAddress,
      pincode: pinCode,
    };
    const result = await postAdressDetails(body);
    const { message, status_code } = result;
    console.log(result);
    if (message !== "Success") {
      return alert(message);
    }
    setCurrentStep(stepNumber.academicDetails);
  };

  return (
    <div className="row basicdetails-area1 m-0 p-0">
      <p className="form-heading text-start">Address details</p>
      <form onSubmit={handleSubmit(saveAddressDetails)}>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12" : "col-lg-6"
            }`}
          >
            <TextField
              value={city}
              labelText="City"
              {...register("city", {
                required: city.length > 0 ? false : true,
              })}
              placeholder={
                errors.city?.type !== "required"
                  ? ""
                  : getValidationErrMsg("City")
              }
              additionalClassName={
                errors.city?.type !== "required"
                  ? ``
                  : getCorrectClassName(city)
              }
              onChange={(e: any) => setCity(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={state}
              labelText="State"
              {...register("state", {
                required: state.length > 0 ? false : true,
              })}
              placeholder={
                errors.state?.type !== "required"
                  ? ""
                  : getValidationErrMsg("State")
              }
              additionalClassName={
                errors.state?.type !== "required"
                  ? ``
                  : getCorrectClassName(state)
              }
              onChange={(e: any) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={country}
              labelText="Country"
              {...register("country", {
                required: country.length > 0 ? false : true,
              })}
              placeholder={
                errors.country?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Country")
              }
              additionalClassName={
                errors.country?.type !== "required"
                  ? ``
                  : getCorrectClassName(country)
              }
              onChange={(e: any) => setCountry(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={pinCode}
              labelText="Pincode"
              {...register("pinCode", {
                required: pinCode.length > 0 ? false : true,
              })}
              placeholder={
                errors.pinCode?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Pincode")
              }
              additionalClassName={
                errors.pinCode?.type !== "required"
                  ? ``
                  : getCorrectClassName(pinCode)
              }
              onChange={(e: any) => setPinCode(e.target.value)}
            />
          </div>
        </div>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextAreaField
              value={permanentAddress}
              labelText="Permanent Address"
              {...register("permanentAddress", {
                required: permanentAddress.length > 0 ? false : true,
              })}
              placeholder={
                errors.permanentAddress?.type !== "required"
                  ? ""
                  : getValidationErrMsg("PermanentAddress")
              }
              additionalClassName={
                errors.permanentAddress?.type !== "required"
                  ? ``
                  : getCorrectClassName(permanentAddress)
              }
              onChange={(e: any) => setPermanentAddress(e.target.value)}
            />
          </div>
          <div className="col-6 "></div>
        </div>
        <div
          className={`row form-fields text-start ${
            (isSmallScreen || screenWidth <= 1200) && "mt-4"
          }`}
        >
          <div className="form-button">
            <FormButton
              hintText="Back"
              onClick={() => setCurrentStep(stepNumber.contactDetails)}
              bgColor={formBtnColors.secondary}
            />
            <FormButton
              hintText="Next"
              onClick={null}
              bgColor={formBtnColors.primary}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
