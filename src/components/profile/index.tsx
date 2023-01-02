import { AppDesign, DeviceContext } from "app-repo-common-pkg";
import { useContext, useEffect, useState } from "react";
import { getCorrectStepperLabel } from "../../helper";
import { stepNumber } from "../../helper/Stepper";
import BasicDetails from "./Step1";
import ContactDetails from "./Step2";
import AddressDetails from "./Step3";
import ExperienceDetails from "./Step5";
import AcademicDetails from "./Step4";
import Stepper from "./Stepper";
import SocialContactDetails from "./Step6";
import ConsentDetails from "./LastStep";
import {
  AcademicDetailsINterface,
  AddressDetailsInterface,
  BasicDetailsInterface,
  ConsentDetailsInterface,
  ContactDetailsInterface,
  ExperienceDetailsInterface,
  formBtnColors,
  initAcademictDetails,
  initAddresstDetails,
  initBasicDetails,
  initConsentDetails,
  initContactDetails,
  initExperienceDetails,
  initSocialContactDetails,
  SocialContactDetailsInterface,
} from "../../helper/Profile";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { isMobile, isTab, screenHeight, screenWidth }: any =
    useContext(DeviceContext);
  const isBigScreen = !isMobile || isTab;
  const [currentStep, setCurrentStep] = useState(stepNumber.basicDeteails);

  const [basicDetails, setBasicDetails] =
    useState<BasicDetailsInterface>(initBasicDetails);

  const [contactDetails, setContactDetails] =
    useState<ContactDetailsInterface>(initContactDetails);

  const [addressDetails, setAddressDetails] =
    useState<AddressDetailsInterface>(initAddresstDetails);

  const [academicDetails, setAcademicDetails] =
    useState<AcademicDetailsINterface>(initAcademictDetails);

  const [experienceDetails, setExperienceDetails] =
    useState<ExperienceDetailsInterface>(initExperienceDetails);

  const [socialContactDetails, setSocialContactDetails] =
    useState<SocialContactDetailsInterface>(initSocialContactDetails);

  const [consentDetails, setConsentDetails] =
    useState<ConsentDetailsInterface>(initConsentDetails);

  const {
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const formComponent = () => {
    switch (currentStep) {
      case stepNumber.basicDeteails:
        return (
          <BasicDetails
            setCurrentStep={setCurrentStep}
            basicDetails={basicDetails}
            setBasicDetails={setBasicDetails}
          />
        );
      case stepNumber.contactDetails:
        return (
          <ContactDetails
            setCurrentStep={setCurrentStep}
            contactDetails={contactDetails}
            setContactDetails={setContactDetails}
          />
        );
      case stepNumber.address:
        return (
          <AddressDetails
            setCurrentStep={setCurrentStep}
            addressDetails={addressDetails}
            setAddressDetails={setAddressDetails}
          />
        );
      case stepNumber.academicDetails:
        return (
          <AcademicDetails
            setCurrentStep={setCurrentStep}
            academicDetails={academicDetails}
            setAcademicDetails={setAcademicDetails}
          />
        );
      case stepNumber.experience:
        return (
          <ExperienceDetails
            setCurrentStep={setCurrentStep}
            experienceDetails={experienceDetails}
            setExperienceDetails={setExperienceDetails}
          />
        );
      case stepNumber.socialContact:
        return (
          <SocialContactDetails
            setCurrentStep={setCurrentStep}
            socialContactDetails={socialContactDetails}
            setSocialContactDetails={setSocialContactDetails}
          />
        );
      default:
        return (
          <ConsentDetails
            setCurrentStep={setCurrentStep}
            consentDetails={consentDetails}
            setConsentDetails={setConsentDetails}
          />
        );
    }
  };

  console.log(`height is ====> ${screenHeight}`);

  return (
    <div
      className={`row m-0 p-0 ${
        !isBigScreen && screenWidth < 500
          ? "overflow-hidden"
          : `${screenHeight < 550 ? "" : "vh-100"}`
      }`}
    >
      <div
        className={`${
          !isBigScreen ? "col-12" : `col-4 ${screenHeight < 750 ? "" : "h-100"}`
        } profile-main-area1 m-0`}
      >
        <div className={`row stepperRow customRow h-100`}>
          {!isBigScreen && (
            <div className="col-2 my-auto ps-0">
              <button
                className="transparent-button"
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={currentStep === stepNumber.basicDeteails}
              >
                <IoIosArrowDropleftCircle
                  fontSize={40}
                  fill={formBtnColors.primary}
                  opacity={currentStep === stepNumber.basicDeteails ? 0.55 : 1}
                />
              </button>
            </div>
          )}
          <div
            className={`col-${!isBigScreen ? "8 my-auto" : "12"} ${
              screenHeight > 650 ? "my-auto" : ""
            }`}
          >
            <p className="step-label text-start">Step {currentStep}</p>
            <p
              className={`step-sub-label text-start ${
                !isBigScreen ? "" : "mb-5"
              }`}
            >
              Enter your {getCorrectStepperLabel(currentStep)}
            </p>
            {isBigScreen && (
              <Stepper
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            )}
          </div>
          {!isBigScreen && (
            <div className="col-2 my-auto">
              <button
                className="transparent-button"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={currentStep === stepNumber.consent}
              >
                <IoIosArrowDroprightCircle
                  fontSize={40}
                  fill={formBtnColors.primary}
                  opacity={currentStep === stepNumber.consent ? 0.55 : 1}
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${
          !isBigScreen ? "col-12 pt-5" : "col-8"
        } profile-main-area2 m-0 ${screenHeight < 550 ? "" : "h-100"}`}
      >
        <div className={`row customRow h-100`}>
          <div
            className={`col-12 ${isBigScreen && "my-auto"}`}
            style={{
              paddingBottom:
                screenWidth < 500 && screenWidth < 850 ? "50px" : 0,
            }}
          >
            {formComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
