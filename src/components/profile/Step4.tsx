import { AcademicDetailsINterface, formBtnColors } from "../../helper/Profile";
import { stepNumber } from "../../helper/Stepper";
import FormButton from "../common/button";
import TextField from "../common/inputs/text-field/TextField";
import { DeviceContext } from "app-repo-common-pkg";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCorrectClassName, getValidationErrMsg } from "../../helper";
import { postAcademicDetails } from "../../services/ApiExecutor";

const AcademicDetails = ({
  setCurrentStep,
  academicDetails,
  setAcademicDetails,
}: {
  setCurrentStep: any;
  academicDetails: AcademicDetailsINterface;
  setAcademicDetails: any;
}) => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  const isSmallScreen = isMobile && !isTab;
  const [academicLevel, setAcademicLevel] = useState(
    academicDetails.academicLevel || ""
  );
  const [percentage, setPercentage] = useState(
    academicDetails.percentage || ""
  );
  const [collegeName, setCollegeName] = useState(
    academicDetails.collegeName || ""
  );
  const [CGPA, setCGPA] = useState(academicDetails.CGPA || "");
  const [rollNo, setRollNo] = useState(academicDetails.rollNo || "");
  const [passOutYear, setPassOutYear] = useState(
    academicDetails.academicLevel || ""
  );
  const [course, setCourse] = useState(academicDetails.course || "");
  const [collegeLocation, setCollegeLocation] = useState(
    academicDetails.collegeLocation || ""
  );

  const dependencies = [
    academicLevel,
    percentage,
    collegeName,
    CGPA,
    rollNo,
    passOutYear,
    course,
    collegeLocation,
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    var addressDetailsObj: AcademicDetailsINterface = {
      academicLevel,
      percentage,
      collegeName,
      CGPA,
      rollNo,
      passOutYear,
      course,
      collegeLocation,
    };
    setAcademicDetails(addressDetailsObj);
  }, dependencies);

  const saveAcademicDetails = async () => {
    let body = {
      academic_gap: 1,
      academics_list_data: [
        {
          academic_level: academicLevel,
          college_name: collegeName,
          roll_number: rollNo,
          college_location: collegeLocation,
          percentage: parseFloat(percentage),
          cgpa: parseFloat(CGPA),
          passout_year: passOutYear,
          course: course,
          active_backlogs: 2,
          branch: "CS",
          university: "RGPV",
          location: "Bhopal",
          tpo_details: {
            poc_name: "Rakesh",
            email: "rakesh@email.com",
            phone_number: "7415945918",
          },
        },
      ],
    };
    const result = await postAcademicDetails(body);
    const { message, status_code } = result;
    console.log(result);
    if (message !== "Success") {
      return alert(message);
    }
    setCurrentStep(stepNumber.experience);
  };

  return (
    <div className="row basicdetails-area1 m-0 p-0">
      <p className="form-heading text-start">Academic details</p>
      <form onSubmit={handleSubmit(saveAcademicDetails)}>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12" : "col-lg-6"
            }`}
          >
            <TextField
              value={academicLevel}
              labelText="Academic level"
              {...register("academicLevel", {
                required: academicLevel.length > 0 ? false : true,
              })}
              placeholder={
                errors.academicLevel?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Academic Level")
              }
              additionalClassName={
                errors.academicLevel?.type !== "required"
                  ? ``
                  : getCorrectClassName(academicLevel)
              }
              onChange={(e: any) => setAcademicLevel(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={percentage}
              labelText="Percentage"
              {...register("percentage", {
                required: percentage.length > 0 ? false : true,
              })}
              placeholder={
                errors.percentage?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Percentage")
              }
              additionalClassName={
                errors.percentage?.type !== "required"
                  ? ``
                  : getCorrectClassName(percentage)
              }
              onChange={(e: any) => setPercentage(e.target.value)}
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
              value={collegeName}
              labelText="College name"
              {...register("collegeName", {
                required: collegeName.length > 0 ? false : true,
              })}
              placeholder={
                errors.collegeName?.type !== "required"
                  ? ""
                  : getValidationErrMsg("College Name")
              }
              additionalClassName={
                errors.collegeName?.type !== "required"
                  ? ``
                  : getCorrectClassName(collegeName)
              }
              onChange={(e: any) => setCollegeName(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={CGPA}
              labelText="CGPA"
              {...register("CGPA", {
                required: CGPA.length > 0 ? false : true,
              })}
              placeholder={
                errors.CGPA?.type !== "required"
                  ? ""
                  : getValidationErrMsg("CGPA")
              }
              additionalClassName={
                errors.CGPA?.type !== "required"
                  ? ``
                  : getCorrectClassName(CGPA)
              }
              onChange={(e: any) => setCGPA(e.target.value)}
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
              value={rollNo}
              labelText="Roll no:"
              {...register("rollNo", {
                required: rollNo.length > 0 ? false : true,
              })}
              placeholder={
                errors.rollNo?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Roll No")
              }
              additionalClassName={
                errors.rollNo?.type !== "required"
                  ? ``
                  : getCorrectClassName(rollNo)
              }
              onChange={(e: any) => setRollNo(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={passOutYear}
              labelText="Passout year"
              {...register("passOutYear", {
                required: passOutYear.length > 0 ? false : true,
              })}
              placeholder={
                errors.passOutYear?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Passout year")
              }
              additionalClassName={
                errors.passOutYear?.type !== "required"
                  ? ``
                  : getCorrectClassName(passOutYear)
              }
              onChange={(e: any) => setPassOutYear(e.target.value)}
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
              value={course}
              labelText="Course"
              {...register("course", {
                required: course.length > 0 ? false : true,
              })}
              placeholder={
                errors.course?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Course")
              }
              additionalClassName={
                errors.course?.type !== "required"
                  ? ``
                  : getCorrectClassName(course)
              }
              onChange={(e: any) => setCourse(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={collegeLocation}
              labelText="College location"
              {...register("collegeLocation", {
                required: collegeLocation.length > 0 ? false : true,
              })}
              placeholder={
                errors.collegeLocation?.type !== "required"
                  ? ""
                  : getValidationErrMsg("College location")
              }
              additionalClassName={
                errors.collegeLocation?.type !== "required"
                  ? ``
                  : getCorrectClassName(collegeLocation)
              }
              onChange={(e: any) => setCollegeLocation(e.target.value)}
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
              onClick={() => setCurrentStep(stepNumber.address)}
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

export default AcademicDetails;
