// import { Api, PostMethod, PutMethod, GetMethod } from "app-repo-common-pkg";

import Api from "../ApiConfig";
import NgRokApi from "../NgrokApoConfig";

const BASE_URl = `https://342c-103-179-108-118.in.ngrok.io`;

// export const getLanguages = () => {
//   const response = GetMethod(`https://judge0-ce.p.rapidapi.com/languages`);
//   return response;
// };

// export const getSingleLanguage = (id: string) => {
//   const response = GetMethod(
//     `https://judge0-ce.p.rapidapi.com/languages/${id}`
//   );
//   return response;
// };

export const getLanguages = () => {
  return Api()
    .get(`https://judge0-ce.p.rapidapi.com/languages`)
    .then((result: any) => {
      return result.data;
    });
};

export const getSingleLanguage = (id: string) => {
  return Api()
    .get(`https://judge0-ce.p.rapidapi.com/languages/${id}`)
    .then((result: any) => {
      return result.data;
    });
};

// ======== mcq ========

export const getMcqAssessment = (id: string) => {
  return NgRokApi()
    .get(`${BASE_URl}/assessment-service/api/v1/mcq/inventory/${id}`)
    .then((result: any) => {
      return result.data;
    });
};

export const submitMcqAssessment = (data: any) => {
  return NgRokApi()
    .post(`${BASE_URl}/assessment-service/api/v1/mcq/submit`, data)
    .then((result: any) => {
      return result.data;
    });
};

export const getMcqAssessmentResult = (
  user_id: string,
  assessmentId: string,
  submissionId: string
) => {
  return NgRokApi()
    .get(
      `${BASE_URl}/assessment-service/api/v1/mcq/submission?user_id=${user_id}&assessment_id=${assessmentId}&submission_id=${submissionId}`
    )
    .then((result: any) => {
      return result.data;
    });
};
