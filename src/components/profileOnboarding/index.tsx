// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import StepContent from "@mui/material/StepContent";

// ** Third Party Imports
import clsx from "clsx";
import toast from "react-hot-toast";

// ** Custom Components Imports
import StepperCustomDot from "../../common/ui-library/app-repository-admin-panel/src/views/forms/form-wizard/StepperCustomDot";

// ** Styled Component
import StepperWrapper from "../../common/ui-library/app-repository-admin-panel/src/@core/styles/mui/stepper";
import BasicDetailsView from "../profileview/BasicDetailsView";
import Basic from "./Basic";

const steps = [
  {
    title: "Account Details",
    subtitle: "Enter your Account Details",
    description: <Basic />,
    submitter: () => {
      return console.log("Basic detail clicked");
    },
    name: "Basic",
  },
  {
    title: "Personal Info",
    subtitle: "Setup Information",
    description: <Basic />,
    submitter: () => {
      return console.log("personal detail clicked");
    },
    name: "Personal",
  },
  {
    title: "Social Links",
    subtitle: "Add Social Links",
    description: <Basic />,
    submitter: () => {
      return console.log("Social detail clicked");
    },
    name: "Social",
  },
];
const ProfileOnboarding = () => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0);

  // Handle Stepper
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      toast.success("Completed All Steps!!");
    }
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="md:w-[85%] md:mt-[75px] md:mb-[30px] md:p-[20px] md:rounded-[16px] ">
      <CardHeader title="Welcome to Your KodNest Profile! Let's Get Started." />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => {
              return (
                <Step
                  key={index}
                  className={clsx({ active: activeStep === index })}
                >
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className="step-label">
                      <Typography className="step-number">{`0${
                        index + 1
                      }`}</Typography>
                      <div>
                        <Typography className="step-title">
                          {step.title}
                        </Typography>
                        <Typography className="step-subtitle">
                          {step.subtitle}
                        </Typography>
                      </div>
                    </div>
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <div className="button-wrapper">
                      <Button
                        size="small"
                        color="secondary"
                        variant="outlined"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        Back
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => {
                          step.submitter();
                          handleNext();
                        }}
                        sx={{ ml: 4 }}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
          <Box sx={{ mt: 2 }}>
            <Typography>All steps are completed!</Typography>
            <Button
              size="small"
              sx={{ mt: 2 }}
              variant="contained"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        )}
      </CardContent>
    </div>
  );
};

export default ProfileOnboarding;
