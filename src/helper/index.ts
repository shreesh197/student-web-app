//helper functions to be used throughout student-webapp

import {
  apiFetchErrMsg,
  apiResponseMapping,
  responseObj,
  serviceMapping,
} from "../constants";

export const getValidationErrMsg = (key: string): string => {
  return `${key} is required`;
};

export const validateEmail = (email: string): boolean => {
  let isValid: boolean = false;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    isValid = true;
  }
  return isValid;
};

export const correctedRouteHandler = (value: string): string => {
  const appName: string = "student-webapp";
  return value.replace("app_name", appName);
};

export const getCorrectStepperLabel = (currentStep: number): string => {
  let label: string = "";
  switch (currentStep) {
    case 1:
      label = "Basic Details";
      break;
    case 2:
      label = "Contact Details";
      break;
    case 3:
      label = "Address Details";
      break;
    case 4:
      label = "Academic Details";
      break;
    case 5:
      label = "Experience";
      break;
    case 6:
      label = "Social Contact";
      break;
    default:
      label = "Consent";
      break;
  }
  return label;
};

export const getCapitalizedString = (str: string): string => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const getCorrectClassName = (key: string): string => {
  return `${key.length > 0 ? "" : "validation-error"}`;
};

export const getBigScreen = (isMobile: any, isTab: any): boolean => {
  const isBigScreen: boolean = !isMobile || isTab;
  return isBigScreen;
};

export const millisecondsToMinutesAndSeconds = (milliseconds) => {
  var minutes = Math.floor(milliseconds / 60000);
  let seconds = (milliseconds % 60000) / 1000;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const getResponseHandler = async (
  type: string,
  // method: string,
  apiCallback: any
): Promise<any> => {
  try {
    const response = await apiCallback();
    // console.log(`response is ======> ${res}`);
    const { message, data, status_code } = response;
    if (
      message !== responseObj.message &&
      status_code !== `${type}${responseObj.ok}`
    ) {
      alert(message);
      return;
    }
    return data;
  } catch (e) {
    alert(apiFetchErrMsg);
  }
};

// const checkMethodForDestruct = (method: string, response: any) => {
//   switch(method) {
//     case "GET":
//       const { message, data, status_code } = response;
//       break;
//     case "POST":

//   }
// }
