import { Table } from "antd";
import { DeviceContext } from "app-repo-common-pkg";
import { useCallback, useContext, useEffect, useState } from "react";
import TableStickyHeader, {
  createData,
} from "../../common/ui-library/app-repository-admin-panel/src/views/table/mui/TableStickyHeader";
import { mcqResultColumns, mcqResultCollection } from "../../constants";
import {
  getCapitalizedString,
  millisecondsToMinutesAndSeconds,
} from "../../helper";

const AssessmentResult = () => {
  const { screenWidth, isMobile }: any = useContext(DeviceContext);
  const [mcqResult, setMcqResult] = useState(null);
  const [tableRows, setTableRows] = useState([]);

  const fetchMcqResult = useCallback(() => {
    const res = mcqResultCollection;
    setMcqResult(res);
    setCorrectValues(res);
  }, []);

  useEffect(() => {
    fetchMcqResult();
  }, [fetchMcqResult]);

  const setCorrectValues = (obj: any) => {
    const total_score = obj?.total_score;
    const maximum_marks = obj?.maximum_marks;
    const time_taken = millisecondsToMinutesAndSeconds(obj?.time_taken);
    const total_time = millisecondsToMinutesAndSeconds(obj?.total_time);
    const scoreToRender = `${total_score} / ${maximum_marks}`;
    const accuracyToRender = `${((total_score / maximum_marks) * 100).toFixed(
      2
    )} %`;
    const timeToRender = `${time_taken} / ${total_time}`;
    let rows = [
      createData(
        getCapitalizedString(obj?.assessment_name),
        scoreToRender,
        accuracyToRender,
        timeToRender
      ),
    ];
    // console.log(`rows ====> ${JSON.stringify(rows)}`);
    setTableRows(rows);
  };

  return (
    <div className="row position-relative" style={{ paddingTop: "65px" }}>
      <div
        className="col-12"
        style={{ padding: isMobile ? "20px 40px" : "40px 70px" }}
      >
        <TableStickyHeader
          columns={mcqResultColumns}
          rows={tableRows}
          isPaginationRequired={false}
        />
      </div>
      <div
        className="col-12"
        style={{ padding: isMobile ? "20px 40px" : "40px 70px", marginTop: 30 }}
      >
        Hello
      </div>
    </div>
  );
};

export default AssessmentResult;
