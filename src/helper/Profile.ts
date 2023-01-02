export const formBtnColors = {
  primary: "rgba(255, 186, 1, 1)",
  secondary: "rgba(158, 158, 158, 0.5)",
};

//initDataObj
export const initBasicDetails = {
  firstName: "",
  lastName: "",
  dob: "",
  disability: false,
  gender: "",
};

export const initContactDetails = {
  email: "",
  whatsAppNo: "",
  number: "",
  number2: "",
  altName: "",
  altnumber:"",
  altemail: "",
  relation:"",

};

export const initAddresstDetails = {
  city: "",
  state: "",
  country: "",
  pinCode: "",
permanentAddress:"",
};

export const initAcademictDetails = {
  academicLevel: "",
  percentage: "",
  collegeName: "",
  CGPA: "",
  rollNo: "",
  passOutYear:"",
  course: "",
  collegeLocation:"",
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
  firstName: string;
  lastName: string;
  dob: string;
  disability: boolean;
  gender: string;
}

export interface ContactDetailsInterface {
  email: string,
  whatsAppNo: string,
  number: string,
  number2: string,
  altName: string,
  altnumber:string,
  altemail: string,
  relation:string,
}

export interface AddressDetailsInterface {
  city: string,
  state: string,
  country: string,
  pinCode: string,
  permanentAddress:string,
}

export interface AcademicDetailsINterface {
academicLevel: string,
  percentage: string,
  collegeName: string,
  CGPA: string,
  rollNo: string,
  passOutYear:string,
  course: string,
  collegeLocation:string,
}

export interface ExperienceDetailsInterface {
  companyName: string,
  designation: string,
  startDate: string,
  endDate: string,
 
}

export interface SocialContactDetailsInterface {
 skypeID: string,
  instagramId: string,
  zoomId: string,
  linkedinId: string,
faceBookId: string,
  behanceId: string,
 
}

export interface ConsentDetailsInterface {
  consent: string;
};