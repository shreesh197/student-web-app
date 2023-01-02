import { useContext, useEffect, useState } from "react";
import { ConsentDetailsInterface, formBtnColors } from "../../helper/Profile";
import { stepNumber } from "../../helper/Stepper";
import FormButton from "../common/button";
import RadioButton from "../common/inputs/radio-button/RadioButton";
import { DeviceContext } from "app-repo-common-pkg";
import { useForm } from "react-hook-form";
import { postConsentDetails } from "../../services/ApiExecutor";

const ConsentDetails = ({
  setCurrentStep,
  consentDetails,
  setConsentDetails,
}: {
  setCurrentStep: any;
  consentDetails: ConsentDetailsInterface;
  setConsentDetails: any;
}) => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  const isSmallScreen = isMobile && !isTab;
  const consentList = ["Yes", "No"];
  const [consent, setConsent] = useState(consentDetails.consent || "");

  const dependencies = [consent];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    var consentDetailsObj: ConsentDetailsInterface = {
      consent,
    };
    setConsentDetails(consentDetailsObj);
  }, dependencies);

  const saveConsentDetails = async () => {
    let body = {
      is_laptop_available: consent === "yes" ? true : false,
      data_consent: true,
    };
    const result = await postConsentDetails(body);
    const { message, status_code } = result;
    if (message !== "Success") {
      return alert(message);
    }
    setCurrentStep(stepNumber);
  };

  return (
    <div className="row basicdetails-area1 m-0 p-0">
      <p className="form-heading text-start">Consent</p>
      <form onSubmit={handleSubmit(saveConsentDetails)}>
        <div className="row col-12 form-fields text-start">
          <p style={{ fontSize: "30px", fontWeight: 500 }}>
            Do you have a laptop?
          </p>
        </div>
        <div className="row form-fields text-start">
          <div className="col-6 radio-fields ">
            {consentList.map((e) => (
              <RadioButton
                key={e.toLocaleLowerCase()}
                checked={e.toLowerCase() === consent}
                {...register("consent", {
                  required: consent.length > 0 ? false : true,
                })}
                onChange={() => setConsent(e.toLowerCase())}
                value={e.toLowerCase()}
                customClass={`mb-3 ${
                  errors.consent?.type !== "required"
                    ? `${
                        consent.length > 0 &&
                        e.toLocaleLowerCase() === consent &&
                        "no-validation-error"
                      }`
                    : `${consent.length > 0 ? "" : "validation-error"}`
                }`}
              />
            ))}
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
              onClick={() => setCurrentStep(stepNumber.socialContact)}
              bgColor={formBtnColors.secondary}
            />
            <FormButton
              hintText="Submit"
              onClick={null}
              bgColor={formBtnColors.primary}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConsentDetails;
