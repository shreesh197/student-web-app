import { AppDesign } from "app-repo-common-pkg";
import React, { useState } from "react";
import FormValidation from "../../../../common/ui-library/app-repository-admin-panel/src/pages/forms/form-validation";
import UserProfileHeader from "../../../../common/ui-library/app-repository-admin-panel/src/views/pages/user-profile/UserProfileHeader";
import RootLayout from "../../../../components/common/layout/root-layout";
import AcademicDetailsView from "../../../../components/profileview/AcademicDetailsView";
import AddressDetailsView from "../../../../components/profileview/AddressDetailsView";
import BasicDetailsView from "../../../../components/profileview/BasicDetailsView";
import CommunincationDetailsView from "../../../../components/profileview/CommunincationDetailsView";
import Container from "../../../../components/profileview/Container";
import ExperienceDetailsView from "../../../../components/profileview/ExperienceDetailsView";
import ProfileTabs from "../../../../components/profileview/Tabs";
import TpoDetailsView from "../../../../components/profileview/TPODedtailsView";
import {
  AcademicDetailsINterface,
  AddressDetailsInterface,
  BasicDetailsInterface,
  ContactDetailsInterface,
  ExperienceDetailsInterface,
  initAcademictDetails,
  initAddresstDetails,
  initBasicDetails,
  initContactDetails,
  initExperienceDetails,
  initSocialContactDetails,
  SocialContactDetailsInterface,
} from "../../../../helper/Profile";
import { stepNumber } from "../../../../helper/Stepper";

const ProfileViewPage = () => {
  const [currentStep, setCurrentStep] = useState(stepNumber.basicDeteails);

  const [basicDetails, setBasicDetails] =
    useState<BasicDetailsInterface>(initBasicDetails);
  const [contactDetails, setContactDetails] =
    useState<ContactDetailsInterface>(initContactDetails);

  const [addressDetails, setAddressDetails] =
    useState<AddressDetailsInterface>(initAddresstDetails);

  const [academicDetails, setAcademicDetails] =
    useState<AcademicDetailsINterface>(initAcademictDetails);

  const [experienceDetails, setExperienceDetails] =
    useState<ExperienceDetailsInterface>(initExperienceDetails);

  const [socialContactDetails, setSocialContactDetails] =
    useState<SocialContactDetailsInterface>(initSocialContactDetails);

  // const [tpoDetails, setTpoDetails] = useState({});

  const formComponent = () => {
    switch (currentStep) {
      case stepNumber.basicDeteails:
        return <BasicDetailsView />;
      case stepNumber.contactDetails:
        return <CommunincationDetailsView />;
      case stepNumber.address:
        return <AddressDetailsView />;
      case stepNumber.academicDetails:
        return <AcademicDetailsView />;
      case stepNumber.experience:
        return <ExperienceDetailsView />;
      // case stepNumber.socialContact:
      //   return (
      //     <SocialContactDetailsView
      //       socialContactDetails={socialContactDetails}
      //       setSocialContactDetails={setSocialContactDetails}
      //     />
      //   );
      case stepNumber.tpodetails:
        return <TpoDetailsView />;
      // case stepNumber.kodnestdetails:
      //   return (
      //     <SocialContactDetailsView
      //       socialContactDetails={socialContactDetails}
      //       setSocialContactDetails={setSocialContactDetails}
      //     />
      //   );
    }
  };
  return (
    <RootLayout>
      <AppDesign>
        <Container>
          <UserProfileHeader />
          <ProfileTabs setCurrentStep={setCurrentStep} />
          {formComponent()}
          {/* <FormValidation/> */}
        </Container>
      </AppDesign>
    </RootLayout>
  );
};

export default ProfileViewPage;
