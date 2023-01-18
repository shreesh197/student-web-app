import React from "react";
import withAuth from "../../../components/auth/AuthGuard";
import AppFooter from "../../../components/common/layout/footer";
import RootLayout from "../../../components/common/layout/root-layout";
import Profile from "../../../components/profile";

const ProfilePage = () => {
  return (
    <RootLayout>
      <div className=" height-100-percent width-100-percent">
        <div className="container-fluid main m-0 p-0">
          {/* <AppDesign> */}
          <Profile />
          {/* </AppDesign> */}
        </div>
      </div>
    </RootLayout>
  );
};

export default withAuth(ProfilePage);
