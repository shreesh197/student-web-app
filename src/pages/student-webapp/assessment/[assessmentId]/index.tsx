import { AppDesign } from "app-repo-common-pkg";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CodeEditor from "../../../../components/assessment/code-editor";
import MCQ from "../../../../components/assessment/mcq-questions";
import RootLayout from "../../../../components/common/layout/root-layout";
import { serviceMapping } from "../../../../constants";
import { getResponseHandler } from "../../../../helper";
import { getMcqAssessment } from "../../../../services/assessment";

const AssessmentPage = () => {
  const router = useRouter();
  //hard coded id
  const id = "1";
  // const id = router.query?.assessmentId as string;
  const [assessmentType, setAssessmentType] = useState("");
  const [questionsData, setQuestionsData] = useState(null);

  useEffect(() => {
    if (id) {
      fetchMcqAssessment();
    }
  }, [id]);

  const fetchMcqAssessment = async () => {
    const responseData = await getResponseHandler(
      serviceMapping.assessment,
      () => getMcqAssessment(id)
    );
    // console.log(`response is ====> ${JSON.stringify(responseData)}`);
    if (responseData) {
      setQuestionsData(responseData);
      setAssessmentType(responseData.assessment_type);
    }
  };

  if (!id) return <>Loading ....</>;

  return (
    <RootLayout>
      <AppDesign>
        {assessmentType === "MCQ" ? (
          <MCQ questionsData={questionsData} assessmentId={id} />
        ) : assessmentType === "Code" ? (
          <CodeEditor />
        ) : (
          <>Loading....</>
        )}
      </AppDesign>
    </RootLayout>
  );
};

export default AssessmentPage;
