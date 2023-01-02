import { DeviceContext } from "app-repo-common-pkg";
import { useContext, useEffect, useState } from "react";
import { BasicDetailsInterface, formBtnColors } from "../../helper/Profile";
import { stepNumber } from "../../helper/Stepper";
import FormButton from "../common/button";
import RadioButton from "../common/inputs/radio-button/RadioButton";
import TextField from "../common/inputs/text-field/TextField";
import { useForm } from "react-hook-form";
import { getCorrectClassName, getValidationErrMsg } from "../../helper";
import { postBasicDetails } from "../../services/ApiExecutor";
import DatePickerComp from "../common/inputs/date-picker";

const BasicDetails = ({
  setCurrentStep,
  basicDetails,
  setBasicDetails,
}: {
  setCurrentStep: any;
  basicDetails: BasicDetailsInterface;
  setBasicDetails: any;
}) => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  const isSmallScreen = isMobile && !isTab;
  const disabilityList = ["Yes", "No"];
  const genderList = ["Male", "Female", "Others"];
  const [firstName, setFirstName] = useState(basicDetails.firstName || "");
  const [lastName, setLastName] = useState(basicDetails.lastName || "");
  const [dob, setDob] = useState(basicDetails.dob || "");
  const [disability, setDisability] = useState(
    basicDetails.disability || false
  );
  const [gender, setGender] = useState(basicDetails.gender || "");
  const dependencies = [firstName, lastName, dob, disability, gender];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    var basicDetailsObj: BasicDetailsInterface = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      disability: disability,
      gender: gender,
    };
    setBasicDetails(basicDetailsObj);
  }, dependencies);

  const renderGenders = (
    <>
      {genderList.map((e) => (
        <RadioButton
          key={e.toLocaleLowerCase()}
          checked={e.toLowerCase() === gender}
          {...register("gender", {
            required: gender.length > 0 ? false : true,
          })}
          onChange={() => setGender(e.toLowerCase())}
          value={e.toLowerCase()}
          customClass={`mb-3 ${
            errors.gender?.type !== "required"
              ? `${
                  gender.length > 0 &&
                  e.toLocaleLowerCase() === gender &&
                  "no-validation-error"
                }`
              : `${gender.length > 0 ? "" : "validation-error"}`
          }`}
        />
      ))}
    </>
  );

  const saveBasicDetails = async () => {
    let body = {
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      disability: disability,
      gender: gender,
      profile_picture: "",
    };
    const result = await postBasicDetails(body);
    const { message, status_code } = result;
    if (message !== "Success") {
      return alert(message);
    }
    setCurrentStep(stepNumber.contactDetails);
  };

  // console.log(`dob is ======> ${dob}`);

  return (
    <div className="row basicdetails-area1 m-0 p-0">
      <p className="form-heading text-start">Your Personal informations</p>
      <form onSubmit={handleSubmit(saveBasicDetails)}>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12" : "col-lg-6"
            }`}
          >
            <TextField
              type="text"
              value={firstName}
              labelText="First Name"
              {...register("firstname", {
                required: firstName.length > 0 ? false : true,
              })}
              placeholder={
                errors.firstname?.type !== "required"
                  ? ""
                  : getValidationErrMsg("First Name")
              }
              additionalClassName={
                errors.firstname?.type !== "required"
                  ? ``
                  : getCorrectClassName(firstName)
              }
              onChange={(e: any) => setFirstName(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              type="text"
              value={lastName}
              labelText="Last Name"
              {...register("lastName", {
                required: lastName.length > 0 ? false : true,
              })}
              placeholder={
                errors.lastName?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Last Name")
              }
              additionalClassName={
                errors.lastName?.type !== "required"
                  ? ``
                  : getCorrectClassName(lastName)
              }
              onChange={(e: any) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <DatePickerComp
              value={dob}
              labelText="Date of Birth"
              {...register("dob", {
                required: dob.length > 0 ? false : true,
              })}
              additionalClassName={
                errors.dob?.type !== "required" ? `` : getCorrectClassName(dob)
              }
              placeholder={
                errors.dob?.type !== "required"
                  ? ""
                  : getValidationErrMsg("DOB")
              }
              onChange={(date, dateString) => {
                console.log(date, dateString);
                setDob(dateString);
              }}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            } radio-fields`}
          >
            <p className={``}>Disability</p>
            {disabilityList.map((e) => (
              <RadioButton
                key={e.toLocaleLowerCase()}
                checked={e.toLowerCase() === "yes" ? disability : !disability}
                onChange={() =>
                  setDisability(e.toLowerCase() === "yes" ? true : false)
                }
                value={e.toLowerCase()}
                customClass={""}
              />
            ))}
          </div>
        </div>
        <div className="row form-fields text-start">
          <div
            className={`col-12 radio-fields ${
              isSmallScreen && !(screenWidth < 400) && "mt-4"
            }`}
          >
            <p className={`${!(screenWidth < 400) && "pb-3"}`}>Gender</p>
            {isSmallScreen && (
              <div
                className={`${
                  screenWidth < 400 && "d-flex flex-column ps-2"
                } row col-xs-12`}
              >
                {renderGenders}
              </div>
            )}
            {!isSmallScreen && renderGenders}
          </div>
        </div>
        <div
          className={`row form-fields text-start ${isSmallScreen && "mt-4"}`}
        >
          <div className="form-button">
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

export default BasicDetails;
