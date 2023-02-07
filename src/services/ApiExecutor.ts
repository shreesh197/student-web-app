import { Api, PostMethod, PutMethod } from "app-repo-common-pkg";
import NgrokApi from "./NgrokApoConfig";

const userId = "0b2efe86-8ced-11ed-9090-3af9d3c3fec6";

export const postLoginData = (data: any) => {
  console.log(data);
  const response = PostMethod("/staging/api/v1/login", data, false);
  return response;
};

export const postBasicDetails = (data: any) => {
  const response = PostMethod(
    `/profile-service/api/v1/users/${userId}/communication_details`,
    data,
    false
  );
  return response;
};

export const postContactDetails = (data: any) => {
  const response = PutMethod(
    `/profile-service/api/v1/users/${userId}/communication_details`,
    data,
    false
  );
  return response;
};

export const postAdressDetails = (data: any) => {
  const response = PutMethod(
    `/profile-service/api/v1/users/${userId}/address_details`,
    data,
    false
  );
  return response;
};

export const postAcademicDetails = (data: any) => {
  return Api()
    .put(
      "/profile-service/api/v1/users/3f7d87e0-8242-11ed-acfb-4e8efacd60ba/academic_details",
      data
    )
    .then((result: any) => {
      return result.data;
    });
};

export const postExperienceDetails = (data: any) => {
  return Api()
    .put(
      "/profile-service/api/v1/users/3f7d87e0-8242-11ed-acfb-4e8efacd60ba/experience_details",
      data
    )
    .then((result: any) => {
      return result.data;
    });
};

export const postSocialContactDetails = (data: any) => {
  return Api()
    .put(
      "/profile-service/api/v1/users/3f7d87e0-8242-11ed-acfb-4e8efacd60ba/social_contact_details",
      data
    )
    .then((result: any) => {
      return result.data;
    });
};

export const postConsentDetails = (data: any) => {
  return Api()
    .put(
      "/profile-service/api/v1/users/3f7d87e0-8242-11ed-acfb-4e8efacd60ba/consent_details",
      data
    )
    .then((result: any) => {
      return result.data;
    });
};

export const getBasicDetails = () => {
  return NgrokApi()
    .get(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/basic_details`,
    )
    .then((result: any) => {
      return result.data;
    });
};

export const updateBasicDetails = async (data:any) => {
  const result_1 = await NgrokApi()
    .patch(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/basic_details`, data
    );
  return result_1.data;
};

// export const postExperienceDetails = (data: any) => {
//   return Api()
//     .put(
//       "/profile-service/api/v1/users/3f7d87e0-8242-11ed-acfb-4e8efacd60ba/experience_details",
//       data
//     )
//     .then((result: any) => {
//       return result.data;
//     });
// };