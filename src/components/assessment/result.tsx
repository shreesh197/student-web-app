import { Table } from "antd";
import { DeviceContext } from "app-repo-common-pkg";
import { useCallback, useContext, useEffect, useState } from "react";
import { createData } from "../../common/ui-library/app-repository-admin-panel/src/views/table/mui/TableStickyHeader";
import { mcqResultCollection } from "../../constants";
import {
  getCapitalizedString,
  millisecondsToMinutesAndSeconds,
} from "../../helper";
import { Bar, Pie, G2 } from "@ant-design/plots";
import { Card } from "@mui/material";

const AssessmentResult = ({ resultData }: { resultData: any }) => {
  const { screenWidth, isMobile }: any = useContext(DeviceContext);
  const [mcqResult, setMcqResult] = useState(null);
  const [tableRows, setTableRows] = useState([]);
  const G = G2.getEngine("canvas");

  // console.log(`resultData ======> ${JSON.stringify(resultData)}`);

  const data = [
    {
      year: "3",
      value: resultData.total_unattempted,
      type: "Total Unattempted",
      color: "rgb(170, 246, 170)",
    },
    {
      year: "2",
      value: resultData.total_incorrect,
      type: "Total Incorrect",
      color: "rgb(170, 246, 170)",
    },
    {
      year: "1",
      value: resultData.total_correct,
      type: "Total Correct",
      color: "rgb(170, 246, 170)",
    },
  ];

  const pieColorDecider = (type: string) => {
    let color: string = "";
    if (type.includes("Correct")) {
      color = "rgb(170, 246, 170)";
    }
    if (type.includes("Incorrect")) {
      color = "rgb(252, 132, 160)";
    }
    if (type.includes("Unattempted")) {
      color = "rgb(201, 213, 211)";
    }
    return color;
  };
  const pieColorDecider1 = (type: string) => {
    let color: string = "";
    if (type === "Total Correct") {
      color = "rgb(201, 213, 211)";
    }
    if (type === "Total Incorrect") {
      color = "rgb(252, 132, 160)";
    }
    if (type === "Total Unattempted") {
      color = "rgb(170, 246, 170) ";
    }
    return color;
  };

  const cfg = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: data.map((e) => pieColorDecider1(e.type)),
    radius: 0.55,
    // legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: pieColorDecider(data.type),
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: "rgba(0, 0, 0, 0.65)",
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value} (${(data.percent * 100).toFixed(1)}%)`,
            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  const pieConfig = cfg;

  const config = {
    data: data.reverse(),
    color: data.map((e) => pieColorDecider(e.type)),
    isStack: true,
    xField: "value",
    yField: "year",
    seriesField: "type",
  };

  const columns = [
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
      render: (title: string) => {
        return <span className="table-cell-element title">{title}</span>;
      },
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      width: "20%",
      render: (title: string) => {
        return <>{customTableCellRenderer(title)}</>;
      },
    },
    {
      title: "Accuracy",
      dataIndex: "accuracy",
      key: "accuracy",
      render: (title: string) => {
        return <span className="table-cell-element first">{title}</span>;
      },
    },
    {
      title: "Time Spent",
      dataIndex: "time",
      key: "time",
      render: (title: string) => {
        return <>{customTableCellRenderer(title)}</>;
      },
    },
  ];

  const fetchMcqResult = useCallback(() => {
    // const res = mcqResultCollection;
    setMcqResult(resultData);
    setCorrectValues(resultData);
  }, [resultData]);

  useEffect(() => {
    fetchMcqResult();
  }, [fetchMcqResult, resultData]);

  const customTableCellRenderer = (title: string) => {
    return (
      <>
        <span className="table-cell-element first">
          {title.split(" / ")[0]}
        </span>
        {" / "}
        <span className="table-cell-element second"></span>
        {title.split(" / ")[1]}
      </>
    );
  };

  const setCorrectValues = (obj: any) => {
    const total_score = obj?.score;
    const maximum_marks = obj?.maximum_score;
    const time_taken = millisecondsToMinutesAndSeconds(obj?.time_taken);
    const total_time = millisecondsToMinutesAndSeconds(obj?.total_time);
    const scoreToRender = `${total_score} / ${maximum_marks}`;
    const accuracyToRender = `${obj?.accuracy} %`;
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
        <Card style={{ padding: 40, boxShadow: "0 0 3.5px" }}>
          <Table
            className="mcq-result-table"
            columns={columns}
            dataSource={tableRows}
            bordered={true}
            pagination={false}
          />
        </Card>

        {/* <TableStickyHeader
          columns={mcqResultColumns}
          rows={tableRows}
          isPaginationRequired={false}
        /> */}
      </div>
      <div
        className="col-12"
        style={{
          padding: isMobile ? "20px 40px" : "0px 70px 40px 70px",
          marginTop: 0,
        }}
      >
        <div className="row">
          <div className={`col-${isMobile ? "12" : "6"}`}>
            {/* <div style={{ maxWidth: "650px" }}> */}
            <Card style={{ padding: 50, boxShadow: "0 0 3.5px" }}>
              <Bar {...config} maxBarWidth={30} height={300} />
            </Card>
            {/* </div> */}
          </div>
          <div className={`col-${isMobile ? "12 mt-5" : "6"}`}>
            {/* <div style={{ maxWidth: "650px" }}> */}
            <Card style={{ padding: "0px 0px", boxShadow: "0 0 3.5px" }}>
              <Pie {...pieConfig} height={400} />
            </Card>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;
