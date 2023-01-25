// import { Api, PostMethod, PutMethod, GetMethod } from "app-repo-common-pkg";

import Api from "../ApiConfig";

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
