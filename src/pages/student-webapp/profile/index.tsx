import { AppDesign } from "app-repo-common-pkg";
import React from "react";
import StepperVerticalWithNumbers from "../../../common/ui-library/app-repository-admin-panel/src/views/forms/form-wizard/StepperVerticalWithNumbers";
import withAuth from "../../../components/auth/AuthGuard";
import RootLayout from "../../../components/common/layout/root-layout";
// import Profile from "../../../components/profile";
import Profile from "../profileOnboarding";

const ProfilePage = () => {
  return (
    <RootLayout>
      <AppDesign>
        {/* <Profile /> */}
        <Profile />
        {/* <StepperVerticalWithNumbers /> */}
      </AppDesign>
    </RootLayout>
  );
};

export default withAuth(ProfilePage);
