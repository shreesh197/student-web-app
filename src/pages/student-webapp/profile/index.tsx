import React from "react";
import withAuth from "../../../components/auth/AuthGuard";
import Profile from "../../../components/profile";

const ProfilePage = () => {
  return (
    <div className="position-relative height-100-percent width-100-percent">
      <div className="container-fluid main m-0 p-0">
        {/* <AppDesign> */}
        <Profile />
        {/* </AppDesign> */}
      </div>
    </div>
  );
};

export default withAuth(ProfilePage);
