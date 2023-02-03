import { AppDesign } from "app-repo-common-pkg";
import AssessmentResult from "../../../../components/assessment/result";
import RootLayout from "../../../../components/common/layout/root-layout";

const AssessmentResultPage = () => {
  return (
    <RootLayout>
      <AppDesign>
        <AssessmentResult />
      </AppDesign>
    </RootLayout>
  );
};

export default AssessmentResultPage;
