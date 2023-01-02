import { useContext, useEffect, useState } from "react";
import {
  ExperienceDetailsInterface,
  formBtnColors,
} from "../../helper/Profile";
import { stepNumber } from "../../helper/Stepper";
import FormButton from "../common/button";
import TextField from "../common/inputs/text-field/TextField";
import { DeviceContext } from "app-repo-common-pkg";
import { useForm } from "react-hook-form";
import { getCorrectClassName, getValidationErrMsg } from "../../helper";
import { postExperienceDetails } from "../../services/ApiExecutor";
import DatePickerComp from "../common/inputs/date-picker";

const ExperienceDetails = ({
  setCurrentStep,
  experienceDetails,
  setExperienceDetails,
}: {
  setCurrentStep: any;
  experienceDetails: ExperienceDetailsInterface;
  setExperienceDetails: any;
}) => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  const isSmallScreen = isMobile && !isTab;
  const [companyName, setCompanyName] = useState(
    experienceDetails.companyName || ""
  );
  const [designation, setDesignation] = useState(
    experienceDetails.designation || ""
  );
  const [startDate, setStartDate] = useState(experienceDetails.startDate || "");
  const [endDate, setEndDate] = useState(experienceDetails.endDate || "");

  const dependencies = [companyName, designation, startDate, endDate];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    var experienceDetailsObj: ExperienceDetailsInterface = {
      companyName,
      designation,
      startDate,
      endDate,
    };
    setExperienceDetails(experienceDetailsObj);
  }, dependencies);

  const saveContactDetails = async () => {
    let body = {
      experience_list_details: [
        {
          company_name: companyName,
          start_date: startDate,
          end_date: endDate,
          designation: designation,
        },
      ],
    };
    const result = await postExperienceDetails(body);
    const { message, status_code } = result;
    console.log(result);
    if (message !== "Success") {
      return alert(message);
    }
    setCurrentStep(stepNumber.socialContact);
  };

  return (
    <div className="row basicdetails-area1 m-0 p-0">
      <p className="form-heading text-start">Experience</p>
      <form onSubmit={handleSubmit(saveContactDetails)}>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12" : "col-lg-6"
            }`}
          >
            <TextField
              value={companyName}
              labelText="Company name"
              {...register("companyName", {
                required: companyName.length > 0 ? false : true,
              })}
              placeholder={
                errors.companyName?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Company Name")
              }
              additionalClassName={
                errors.companyName?.type !== "required"
                  ? ``
                  : getCorrectClassName(companyName)
              }
              onChange={(e: any) => setCompanyName(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={designation}
              labelText="Designation"
              {...register("designation", {
                required: designation.length > 0 ? false : true,
              })}
              placeholder={
                errors.designation?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Designation")
              }
              additionalClassName={
                errors.designation?.type !== "required"
                  ? ``
                  : getCorrectClassName(designation)
              }
              onChange={(e: any) => setDesignation(e.target.value)}
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
              value={startDate}
              labelText="Start Date"
              {...register("startDate", {
                required: startDate.length > 0 ? false : true,
              })}
              additionalClassName={
                errors.startDate?.type !== "required"
                  ? ``
                  : getCorrectClassName(startDate)
              }
              placeholder={
                errors.startDate?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Start Date")
              }
              onChange={(date, dateString) => {
                console.log(date, dateString);
                setStartDate(dateString);
              }}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <DatePickerComp
              value={endDate}
              labelText="End Date"
              {...register("endDate", {
                required: endDate.length > 0 ? false : true,
              })}
              additionalClassName={
                errors.endDate?.type !== "required"
                  ? ``
                  : getCorrectClassName(endDate)
              }
              placeholder={
                errors.endDate?.type !== "required"
                  ? ""
                  : getValidationErrMsg("End Date")
              }
              onChange={(date, dateString) => {
                console.log(date, dateString);
                setEndDate(dateString);
              }}
            />
          </div>
        </div>

        <div
          className={`row form-fields text-start ${
            (isSmallScreen || screenWidth <= 1200) && "mt-4"
          }`}
        >
          <div className="form-button">
            <FormButton
              hintText="Back"
              onClick={() => setCurrentStep(stepNumber.academicDetails)}
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

export default ExperienceDetails;
