import { useContext, useEffect, useState } from "react";
import { ContactDetailsInterface, formBtnColors } from "../../helper/Profile";
import { stepNumber } from "../../helper/Stepper";
import FormButton from "../common/button";
import TextField from "../common/inputs/text-field/TextField";
import { DeviceContext } from "app-repo-common-pkg";
import { useForm } from "react-hook-form";
import { getCorrectClassName, getValidationErrMsg } from "../../helper";
import { postContactDetails } from "../../services/ApiExecutor";

const ContactDetails = ({
  setCurrentStep,
  contactDetails,
  setContactDetails,
}: {
  setCurrentStep: any;
  contactDetails: ContactDetailsInterface;
  setContactDetails: any;
}) => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  const isSmallScreen = isMobile && !isTab;
  const [email, setEmail] = useState(contactDetails.email || "");
  const [whatsAppNo, setWhatsAppNo] = useState(contactDetails.whatsAppNo || "");
  const [number, setNumber] = useState(contactDetails.number || "");
  const [number2, setNumber2] = useState(contactDetails.number2 || "");
  const [altName, setAltName] = useState(contactDetails.altName || "");
  const [altnumber, setAltNumber] = useState(contactDetails.altnumber || "");
  const [altemail, setAltEmail] = useState(contactDetails.altemail || "");
  const [relation, setRelation] = useState(contactDetails.relation || "");

  const dependencies = [
    email,
    whatsAppNo,
    number,
    number2,
    altName,
    altnumber,
    altemail,
    relation,
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    var contactDetailsObj: ContactDetailsInterface = {
      email,
      whatsAppNo,
      number,
      number2,
      altName,
      altnumber,
      altemail,
      relation,
    };
    setContactDetails(contactDetailsObj);
  }, dependencies);

  const saveContactDetails = async () => {
    let body = {
      email: email,
      phone_number: number,
      whatsapp_number: whatsAppNo,
      alternate_contacts: {
        phone_number: altnumber,
        email: altemail,
        emergency_phone_number: "7026844002",
        emergency_contact_person_name: "hemanth",
        relation: "relation",
      },
      social_contact_information: {
        skype_id: "skype_id",
        zoom_id: "zoom_id",
        facebook_id: "facebook_id",
        instagram_id: "instagram_id",
        linkedin_id: "linkedin_id",
      },
    };
    const result = await postContactDetails(body);
    const { message, status_code } = result;
    console.log(result);
    if (message !== "Success") {
      return alert(message);
    }
    setCurrentStep(stepNumber.address);
  };

  return (
    <div className="row basicdetails-area1 m-0 p-0">
      <p className="form-heading text-start">Contact details</p>
      <form onSubmit={handleSubmit(saveContactDetails)}>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12" : "col-lg-6"
            }`}
          >
            <TextField
              type="email"
              value={email}
              labelText="Email Address"
              {...register("email", {
                required: email.length > 0 ? false : true,
              })}
              placeholder={
                errors.email?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Email Address")
              }
              additionalClassName={
                errors.email?.type !== "required"
                  ? ``
                  : getCorrectClassName(email)
              }
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              type="tel"
              value={whatsAppNo}
              labelText="Whatsapp number"
              {...register("whatsAppNo", {
                required: whatsAppNo.length > 0 ? false : true,
              })}
              placeholder={
                errors.whatsAppNo?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Whatsapp number")
              }
              additionalClassName={
                errors.whatsAppNo?.type !== "required"
                  ? ``
                  : getCorrectClassName(whatsAppNo)
              }
              onChange={(e: any) => setWhatsAppNo(e.target.value)}
              maxLength={10}
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
              type={"tel"}
              value={number}
              labelText="+91"
              {...register("number", {
                required: number.length > 0 ? false : true,
              })}
              placeholder={
                errors.number?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Mobile Number")
              }
              additionalClassName={
                errors.number?.type !== "required"
                  ? ``
                  : getCorrectClassName(number)
              }
              onChange={(e: any) => setNumber(e.target.value)}
              maxLength={10}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              type={"tel"}
              value={number2}
              labelText="Alternate number"
              {...register("number2", {
                required: number2.length > 0 ? false : true,
              })}
              placeholder={
                errors.number2?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Alternate number")
              }
              additionalClassName={
                errors.number2?.type !== "required"
                  ? ``
                  : getCorrectClassName(number2)
              }
              onChange={(e: any) => setNumber2(e.target.value)}
              maxLength={10}
            />
          </div>
        </div>
        {/* <div className="row form-fields text-start"> */}
        <p className="form-heading text-start mt-5">Alternate contact</p>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-2" : "col-lg-6"
            }`}
          >
            <TextField
              type="text"
              value={altName}
              labelText="Alternate contact name"
              {...register("altName", {
                required: altName.length > 0 ? false : true,
              })}
              placeholder={
                errors.altName?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Alternate contact name")
              }
              additionalClassName={
                errors.altName?.type !== "required"
                  ? ``
                  : getCorrectClassName(altName)
              }
              onChange={(e: any) => setAltName(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              type={"tel"}
              value={altnumber}
              labelText="+91"
              {...register("altnumber", {
                required: altnumber.length > 0 ? false : true,
              })}
              placeholder={
                errors.altnumber?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Mobile Number")
              }
              additionalClassName={
                errors.altnumber?.type !== "required"
                  ? ``
                  : getCorrectClassName(altnumber)
              }
              onChange={(e: any) => setAltNumber(e.target.value)}
              maxLength={10}
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
              type={"email"}
              value={altemail}
              labelText="Email Address"
              {...register("altemail", {
                required: altemail.length > 0 ? false : true,
              })}
              placeholder={
                errors.altemail?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Email Address")
              }
              additionalClassName={
                errors.altemail?.type !== "required"
                  ? ``
                  : getCorrectClassName(altemail)
              }
              onChange={(e: any) => setAltEmail(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              type={"text"}
              value={relation}
              labelText="Relation with person"
              {...register("relation", {
                required: relation.length > 0 ? false : true,
              })}
              placeholder={
                errors.relation?.type !== "required"
                  ? ""
                  : getValidationErrMsg("This field")
              }
              additionalClassName={
                errors.relation?.type !== "required"
                  ? ``
                  : getCorrectClassName(relation)
              }
              onChange={(e: any) => setRelation(e.target.value)}
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
              onClick={() => setCurrentStep(stepNumber.basicDeteails)}
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

export default ContactDetails;
