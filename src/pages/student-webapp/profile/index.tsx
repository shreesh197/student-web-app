import { AppDesign } from "app-repo-common-pkg";
import React from "react";
import withAuth from "../../../components/auth/AuthGuard";
import RootLayout from "../../../components/common/layout/root-layout";
import Profile from "../../../components/profile";

const ProfilePage = () => {
  return (
    <RootLayout>
      <AppDesign>
        <Profile />
      </AppDesign>
    </RootLayout>
  );
};

export default withAuth(ProfilePage);
