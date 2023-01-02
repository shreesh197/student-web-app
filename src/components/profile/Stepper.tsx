import React from "react";
import { Steps } from "antd";
import { stepperSteps } from "../../helper/Stepper";

const Stepper = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: any;
}) => {
  return (
    <Steps
      direction="vertical"
      current={currentStep - 1}
      items={stepperSteps}
      onChange={(value) => setCurrentStep(value + 1)}
    />
  );
};

export default Stepper;
