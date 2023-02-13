import { Api, PostMethod, PutMethod } from "app-repo-common-pkg";
import NgrokApi from "./NgrokApoConfig";

const userId = "cbac8d7e-a942-11ed-98ec-acde48001122";

export const postLoginData = (data: any) => {
  console.log(data);
  const response = PostMethod("/staging/api/v1/login", data, false);
  return response;
};

// export const postBasicDetails = (data: any) => {
//   const response = PostMethod(
//     `/profile-service/api/v1/users/${userId}/communication_details`,
//     data,
//     false
//   );
//   return response;
// };

export const postBasicDetails = async (data:any) => {
  const result = await NgrokApi()
    .patch(
      `https://fdfa-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/basic_details`, data
    );
  return result.data;
};

export const postOtherDetails = async (data:any) => {
  const result = await NgrokApi()
    .patch(
      `https://fdfa-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/other_details`, data
    );
  return result.data;
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


//For profile viewing 


export const getBasicDetails = () => {
  return NgrokApi()
    .get(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/basic_details`,
    )
    .then((result: any) => {
      return result.data;
    });
};

export const getCommunicationDetails = () => {
  return NgrokApi()
    .get(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/communication_details`,
    )
    .then((result: any) => {
      return result.data;
    });
};

export const getAddressDetails = () => {
  return NgrokApi()
    .get(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/address_details`,
    )
    .then((result: any) => {
      return result.data;
    });
};

export const getAcademicDetails = () => {
  return NgrokApi()
    .get(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/academic_details`,
    )
    .then((result: any) => {
      return result.data;
    });
};

export const getExperienceDetails = () => {
  return NgrokApi()
    .get(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/experience_details`,
    )
    .then((result: any) => {
      return result.data;
    });
};

export const getTPODetails = () => {
  return NgrokApi()
    .get(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/tpo_details`,
    )
    .then((result: any) => {
      return result.data;
    });
};

//For profile updating 


export const updateBasicDetails = async (data:any) => {
  const result_1 = await NgrokApi()
    .patch(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/basic_details`, data
    );
  return result_1.data;
};

export const updateCommunicationDetails = async (data:any) => {
  const result_1 = await NgrokApi()
    .patch(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/communication_details`, data
    );
  return result_1.data;
};

export const updateAddressDetails = async (data:any) => {
  const result_1 = await NgrokApi()
    .patch(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/address_details`, data
    );
  return result_1.data;
};

export const updateAcademicDetails = async (data:any) => {
  const result_1 = await NgrokApi()
    .patch(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/academic_details`, data
    );
  return result_1.data;
};

export const updateExperienceDetails = async (data:any) => {
  const result_1 = await NgrokApi()
    .patch(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/experience_details`, data
    );
  return result_1.data;
};

export const updateTPODetails = async (data:any) => {
  const result_1 = await NgrokApi()
    .patch(
      `https://87a9-103-179-108-118.in.ngrok.io/profile-service/api/v1/users/${userId}/tpo_details`, data
    );
  return result_1.data;
};



