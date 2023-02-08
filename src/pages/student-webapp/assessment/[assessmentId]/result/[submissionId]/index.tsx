import { AppDesign } from "app-repo-common-pkg";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import AssessmentResult from "../../../../../../components/assessment/result";
import RootLayout from "../../../../../../components/common/layout/root-layout";
import { serviceMapping } from "../../../../../../constants";
import { getResponseHandler } from "../../../../../../helper";
import { getMcqAssessmentResult } from "../../../../../../services/assessment";

const AssessmentResultPage = () => {
  const router = useRouter();
  // console.log(`query is ======> ${JSON.stringify(router.query)}`);
  const assessmentId = router.query?.assessmentId as string;
  const submissionId = router.query?.submissionId as string;
  const userId = "1";
  const [resultData, setResultData] = useState(null);

  const fetchMcqResult = useCallback(async () => {
    if (userId && assessmentId && submissionId) {
      const responseData = await getResponseHandler(
        serviceMapping.assessment,
        () => getMcqAssessmentResult(userId, assessmentId, submissionId)
      );
      // console.log(`response is ====> ${JSON.stringify(responseData)}`);
      if (responseData) {
        setResultData(responseData[0]);
      }
    }
  }, [assessmentId, submissionId]);

  useEffect(() => {
    fetchMcqResult();
  }, [fetchMcqResult]);

  if (!resultData) return <>Loading ..</>;

  return (
    <RootLayout>
      <AppDesign>
        <AssessmentResult resultData={resultData} />
      </AppDesign>
    </RootLayout>
  );
};

export default AssessmentResultPage;
