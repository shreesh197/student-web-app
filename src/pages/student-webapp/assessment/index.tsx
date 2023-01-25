import { AppDesign } from "app-repo-common-pkg";
import React, { useState } from "react";
import CodeEditor from "../../../components/assessment/code-editor";
import MCQ from "../../../components/assessment/mcq-questions";
import RootLayout from "../../../components/common/layout/root-layout";

const AssessmentPage = () => {
  const [assessmentType, setAssessmentType] = useState("code");
  return (
    <RootLayout>
      <AppDesign>
        {assessmentType === "code" ? <CodeEditor /> : <MCQ />}
      </AppDesign>
    </RootLayout>
  );
};

export default AssessmentPage;
