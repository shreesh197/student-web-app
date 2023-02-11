import { DateType } from "../..//common/ui-library/app-repository-admin-panel/src/types/forms/reactDatepickerTypes";

export const formBtnColors = {
  primary: "rgba(255, 186, 1, 1)",
  secondary: "rgba(158, 158, 158, 0.5)",
};

//initDataObj
export const initBasicDetails = {
  dob: null,
  lastName: "",
  firstName: "",
  kodnestId: "",
  emergencyContact: null,
  disability: false,
  primaryContact: null,
  whatsappContact: null,
  email: "",
};

export const initAcademictDetails = {
  usn: "",
  tenthYop: "",
  twelthYop: "",
  tenthPercentage: null,
  twelthPercentage: null,
  graduationCourse: "",
  graduationBranch: "",
  graduationCollege: "",
  graduationYop: "",
  graduationPercentage: null,
  graduationCgpa: null,
  activeBacksLogs: null,
  postGraduationCourse: "",
  postgraduationBranch: "",
  postgraduationCollege: "",
  postgraduationYop: "",
  postgraduationPercentage: null,
  postgraduationCgpa: null,
  postactiveBacksLogs: null,
  gapInAcademics: null,
  working: "",
  totalYearsOfExperience: "",
};

export const initOtherDetails = {
  city: "",
  state: "",
  preferredjoblocation: "",
  tponame: "",
  tpoemailid: "",
  tpocontactnumber: null,
};

export const initContactDetails = {
  preferredjoblocation: "",
};

export const initAddresstDetails = {
  city: "",
  state: "",
};

export const initExperienceDetails = {
  companyName: "",
  designation: "",
  startDate: "",
  endDate: "",
};

export const initSocialContactDetails = {
  skypeID: "",
  instagramId: "",
  zoomId: "",
  linkedinId: "",
  faceBookId: "",
  behanceId: "",
};

export const initConsentDetails = {
  consent: "",
};

//interfaces
export interface BasicDetailsInterface {
  dob: DateType;
  lastName: string;
  firstName: string;
  kodnestId: string;
  emergencyContact: number;
  disability: boolean;
  primaryContact: number;
  whatsappContact: number;
  email: string;
}

export interface AcademicDetailsINterface {
  usn: string;
  tenthYop: string;
  twelthYop: string;
  tenthPercentage: number;
  twelthPercentage: number;
  graduationCourse: string;
  graduationBranch: string;
  graduationCollege: string;
  graduationYop: string;
  graduationPercentage: number;
  graduationCgpa: number;
  activeBacksLogs: number;
  postGraduationCourse: string;
  postgraduationBranch: string;
  postgraduationCollege: string;
  postgraduationYop: string;
  postgraduationPercentage: number;
  postgraduationCgpa: number;
  postactiveBacksLogs: number;
  gapInAcademics: number;
  working: string;
  totalYearsOfExperience: string;
}

export interface OtherDetailsInterface  {
  city: string;
  state: string;
  preferredjoblocation: string,
  tponame: string;
  tpoemailid: string;
  tpocontactnumber: number;
};

export interface ContactDetailsInterface {
  email: string;
  preferredJoblocation: string;
}

export interface AddressDetailsInterface {
  city: string;
  state: string;
}

export interface ExperienceDetailsInterface {
  companyName: string;
  designation: string;
  startDate: string;
  endDate: string;
}

export interface SocialContactDetailsInterface {
  skypeID: string;
  instagramId: string;
  zoomId: string;
  linkedinId: string;
  faceBookId: string;
  behanceId: string;
}

export interface ConsentDetailsInterface {
  consent: string;
}
