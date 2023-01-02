import {
  formBtnColors,
  SocialContactDetailsInterface,
} from "../../helper/Profile";
import { stepNumber } from "../../helper/Stepper";
import FormButton from "../common/button";
import TextField from "../common/inputs/text-field/TextField";
import { DeviceContext } from "app-repo-common-pkg";
import { useContext, useEffect, useState } from "react";
import { getCorrectClassName, getValidationErrMsg } from "../../helper";
import { useForm } from "react-hook-form";
import {
  postContactDetails,
  postSocialContactDetails,
} from "../../services/ApiExecutor";

const SocialContactDetails = ({
  setCurrentStep,
  socialContactDetails,
  setSocialContactDetails,
}: {
  setCurrentStep: any;
  socialContactDetails: SocialContactDetailsInterface;
  setSocialContactDetails: any;
}) => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  const isSmallScreen = isMobile && !isTab;
  const [skypeID, setSkypeID] = useState(socialContactDetails.skypeID || "");
  const [instagramId, setInstagramId] = useState(
    socialContactDetails.instagramId || ""
  );
  const [zoomId, setZoomId] = useState(socialContactDetails.skypeID || "");
  const [linkedinId, setLinkedinId] = useState(
    socialContactDetails.linkedinId || ""
  );
  const [faceBookId, setFaceBookId] = useState(
    socialContactDetails.faceBookId || ""
  );
  const [behanceId, setBehanceId] = useState(
    socialContactDetails.behanceId || ""
  );

  const dependencies = [
    skypeID,
    instagramId,
    zoomId,
    linkedinId,
    faceBookId,
    behanceId,
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    var socialContactDetailsObj: SocialContactDetailsInterface = {
      skypeID,
      instagramId,
      zoomId,
      linkedinId,
      faceBookId,
      behanceId,
    };
    setSocialContactDetails(socialContactDetailsObj);
  }, dependencies);

  const saveSocialContactDetails = async () => {
    let body = {};
    const result = await postSocialContactDetails(body);
    const { message, status_code } = result;
    console.log(result);
    if (message !== "Success") {
      return alert(message);
    }
    setCurrentStep(stepNumber.consent);
  };

  return (
    <div className="row basicdetails-area1 m-0 p-0">
      <p className="form-heading text-start">Social contact</p>
      <form onSubmit={handleSubmit(saveSocialContactDetails)}>
        <div className="row form-fields text-start">
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12" : "col-lg-6"
            }`}
          >
            <TextField
              value={skypeID}
              labelText="Skype id"
              {...register("skypeID", {
                required: skypeID.length > 0 ? false : true,
              })}
              placeholder={
                errors.skypeID?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Skype ID")
              }
              additionalClassName={
                errors.skypeID?.type !== "required"
                  ? ``
                  : getCorrectClassName(skypeID)
              }
              onChange={(e: any) => setSkypeID(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={instagramId}
              labelText="Instagram id"
              {...register("instagramId", {
                required: instagramId.length > 0 ? false : true,
              })}
              placeholder={
                errors.instagramId?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Instagram Id")
              }
              additionalClassName={
                errors.instagramId?.type !== "required"
                  ? ``
                  : getCorrectClassName(instagramId)
              }
              onChange={(e: any) => setInstagramId(e.target.value)}
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
              value={zoomId}
              labelText="Zoom id"
              {...register("zoomId", {
                required: zoomId.length > 0 ? false : true,
              })}
              placeholder={
                errors.zoomId?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Zoom Id")
              }
              additionalClassName={
                errors.zoomId?.type !== "required"
                  ? ``
                  : getCorrectClassName(zoomId)
              }
              onChange={(e: any) => setZoomId(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={linkedinId}
              labelText="Linkdin id"
              {...register("linkedinId", {
                required: linkedinId.length > 0 ? false : true,
              })}
              placeholder={
                errors.linkedinId?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Linkedin Id")
              }
              additionalClassName={
                errors.linkedinId?.type !== "required"
                  ? ``
                  : getCorrectClassName(linkedinId)
              }
              onChange={(e: any) => setLinkedinId(e.target.value)}
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
              value={faceBookId}
              labelText="Facebook id"
              {...register("faceBookId", {
                required: faceBookId.length > 0 ? false : true,
              })}
              placeholder={
                errors.faceBookId?.type !== "required"
                  ? ""
                  : getValidationErrMsg("FaceBook Id")
              }
              additionalClassName={
                errors.faceBookId?.type !== "required"
                  ? ``
                  : getCorrectClassName(faceBookId)
              }
              onChange={(e: any) => setFaceBookId(e.target.value)}
            />
          </div>
          <div
            className={`${
              isSmallScreen || screenWidth <= 1200 ? "col-12 mt-4" : "col-lg-6"
            }`}
          >
            <TextField
              value={behanceId}
              labelText="Behance id"
              {...register("behanceId", {
                required: behanceId.length > 0 ? false : true,
              })}
              placeholder={
                errors.behanceId?.type !== "required"
                  ? ""
                  : getValidationErrMsg("Behance Id")
              }
              additionalClassName={
                errors.behanceId?.type !== "required"
                  ? ``
                  : getCorrectClassName(behanceId)
              }
              onChange={(e: any) => setBehanceId(e.target.value)}
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
              onClick={() => setCurrentStep(stepNumber.experience)}
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

export default SocialContactDetails;
