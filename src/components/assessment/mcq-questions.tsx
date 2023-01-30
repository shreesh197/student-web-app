import { DeviceContext } from "app-repo-common-pkg";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { mcqCollection, questionLegends } from "../../constants";
import { getQuestions, saveQuestions } from "../../redux/actions";
import Countdown from "react-countdown";
import { Drawer } from "antd";
import { BsQuestionSquareFill } from "react-icons/bs";

const MCQ = () => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [mcqTest, setMcqTest] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { screenWidth, isMobile }: any = useContext(DeviceContext);
  // const footerButtons = [
  //   {
  //     id: 1,
  //     name: "Mark for Review & Next",
  //   },
  //   {
  //     id: 2,
  //     name: "Clear Response",
  //   },
  // ];

  useEffect(() => {
    fetchMcqQuestions();
  }, []);

  const findCorrespondingQuestion = useCallback(() => {
    let correctQuestion = mcqTest.find(
      (ques, i) => currentQuestionNumber === i + 1
    );
    // console.log(`correctQuestion =====> ${JSON.stringify(correctQuestion)}`);
    setCurrentQuestion(correctQuestion);
    findCorrectOptionSelected(correctQuestion);
    setOpen(false);
  }, [currentQuestionNumber, mcqTest]);

  const findCorrectOptionSelected = (question: any) => {
    question?.options.forEach((option: any) => {
      if (option.is_correct) {
        setSelectedOption(option);
      }
    });
  };

  useEffect(() => {
    findCorrespondingQuestion();
  }, [currentQuestionNumber, findCorrespondingQuestion]);

  const fetchMcqQuestions = () => {
    //modify
    let newData = mcqCollection.questions.map((question, i) => ({
      ...question,
      is_answered: false,
      is_marked: false,
      is_visited: false,
    }));
    setMcqTest(newData);
  };

  const answerHandler = (
    selectedOption: any,
    isMarked: boolean = false,
    isSave: boolean = true
  ) => {
    let isAnswered: boolean = false;
    // console.log(`selectedOption =====> ${JSON.stringify(selectedOption)}`);
    //reset values
    let temp: any = resetPastSelectedValue();

    //set correct option selected
    if (selectedOption !== null) {
      temp?.options?.forEach((option: any) => {
        if (option?.option === selectedOption?.option) {
          // console.log("here");
          option.is_correct = true;
          isAnswered = true;
        }
      });
    } else {
      isAnswered = false;
    }

    temp.is_marked = isMarked ? true : false;
    temp.is_answered = isAnswered ? true : false;
    const isVisited: boolean = questionViewHandler(isMarked, isAnswered);
    temp.is_visited = isVisited;
    setCurrentQuestion({ ...temp });
    // console.log(`current question ====> ${JSON.stringify(temp)}`);

    //save it to questions array
    if (isSave) saveSelectedOption(temp);
  };

  const questionViewHandler = (isMarked: boolean, isAnswered: boolean) => {
    let isVisited: boolean = false;
    if (isMarked) {
      isVisited = true;
    }
    if (isMarked && isAnswered) {
      isVisited = true;
    }
    if (!isMarked && isAnswered) {
      isVisited = true;
    }
    if (!isMarked && !isAnswered) {
      isVisited = true;
    }
    return isVisited;
  };

  const saveSelectedOption = (temp: any) => {
    let tempArr: any[] = [...mcqTest];
    tempArr.forEach((question: any) => {
      if (question.question === temp.question) {
        question.options = [...temp.options];
        question.is_answered = temp.is_answered;
        question.is_marked = temp.is_marked;
        question.is_visited = temp.is_visited;
      }
    });
    // console.log(`tempArr =====> ${JSON.stringify(tempArr)}`);
    setMcqTest([...tempArr]);
    dispatch(saveQuestions(tempArr));
  };

  const resetPastSelectedValue = () => {
    let temp = { ...currentQuestion };
    let newData = temp?.options?.map((option: any) => ({
      ...option,
      is_correct: false,
    }));
    temp.options = [...newData];
    // console.log(`temp =====> ${JSON.stringify(temp)}`);
    return temp;
  };

  const checkIfQuestionIsAnswered = (selectedOption: any) => {
    let isAnswered: boolean = false;
    currentQuestion?.options?.forEach((option: any) => {
      if (option?.is_correct && option?.option === selectedOption?.option) {
        // console.log(
        //   `option thats selected  ====> ${JSON.stringify(option)}`
        // );
        isAnswered = true;
      }
    });
    // mcqTest.forEach((question: any) => {
    //   if (question?.question === currentQuestion?.question) {
    //     question?.options?.forEach((option: any) => {
    //       if (option?.is_correct && option?.option === selectedOption?.option) {
    //         // console.log(
    //         //   `option thats selected  ====> ${JSON.stringify(option)}`
    //         // );
    //         isAnswered = true;
    //       }
    //     });
    //   }
    // });
    return isAnswered;
  };

  const getCorrectQuestionNumberClassName = (currentQuestion: any) => {
    let className: string = "";
    mcqTest.forEach((question: any, index: number) => {
      // if (index + 1 === currentQuestionNumber) {
      if (
        question?.is_answered &&
        question.question === currentQuestion.question
      ) {
        className = "answered";
      }
      if (
        !question?.is_answered &&
        question?.is_visited &&
        question.question === currentQuestion.question
      ) {
        className = "not-answered";
      }
      if (
        question?.is_marked &&
        question.question === currentQuestion.question
      ) {
        className = "is-marked";
      }
      // question?.options?.forEach((option: any) => {
      //   if (option?.is_correct && selectedOption?.option === option?.option) {
      //     // className = "answered";
      //     console.log(
      //       `option thats selected  ====> ${JSON.stringify(option)}`
      //     );
      //   }
      // });
      // }
    });
    return className;
  };

  const goToNextQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const handleClearResponse = () => {
    answerHandler(null, false, false);
    setSelectedOption(null);
  };

  const handleMarkedForReview = () => {
    answerHandler(selectedOption, true);
  };

  const renderQuestionListContainer = () => {
    return (
      <>
        <div
          className="row pt-4 pb-2 m-0 w-100 legends-container"
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          {questionLegends.map((legend) => (
            <div className={`col-${!isMobile ? "3" : "6"} p-0`} key={legend.id}>
              <span className="me-2">
                <button
                  className={`question-no-container legends ${legend.className}`}
                  onClick={() => {}}
                >
                  <span className="legend-name">{legend.number}</span>
                </button>
              </span>
              <span
                className="legend-name"
                style={{ fontSize: legend.name.length > 10 ? 10 : 14 }}
              >
                {legend.name}
              </span>
            </div>
          ))}
        </div>
        <div
          className="row pt-4 pb-4 question-no-list-container m-0 w-100"
          style={{
            paddingLeft: isMobile ? 10 : 50,
            paddingRight: isMobile ? 20 : 70,
            height: isMobile && "100%",
          }}
        >
          {mcqTest.map((ques, i) => (
            <div
              className={`col-${
                !isMobile ? "2" : `4`
              } text-center justify-content-center`}
              key={i}
              // style={{ height: isMobile && "50px" }}
            >
              <button
                className={`question-no-container ${
                  currentQuestionNumber === i + 1
                    ? "current-selected-question"
                    : ""
                } ${getCorrectQuestionNumberClassName(ques)}`}
                onClick={() => {
                  //only allowed if visited
                  if (ques?.is_visited) {
                    setCurrentQuestionNumber(i + 1);
                  }
                  // setIsQuestionAnswered(false);
                }}
                style={{
                  padding:
                    (i + 1).toString().length > 1 ? "8px 12px" : "8px 15.5px",
                }}
              >
                <span>{i + 1}</span>
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="row position-relative" style={{ paddingTop: "65px" }}>
        <nav
          className="mcq-header position-absolute"
          style={{ padding: !isMobile ? "10px 75px" : "10px 35px" }}
        >
          Time Left: <Countdown date={Date.now() + 5400000} />
        </nav>
        <div
          className={`col-${
            !isMobile ? "7" : "12 position-relative"
          } question-list-main-area apply-border position-relative pe-0`}
          style={{ paddingTop: 70 }}
        >
          <div
            className="row"
            style={{
              paddingLeft: isMobile ? 30 : 70,
              paddingRight: isMobile ? 20 : 50,
              paddingBottom: 120,
            }}
          >
            <p className="mb-5">
              <span>Q {currentQuestionNumber}:</span>{" "}
              <span className="font-weight-bold">
                {currentQuestion?.question}
              </span>
            </p>
            <div className="row ps-4 pe-4">
              {currentQuestion?.options.map((option, i) => (
                <div
                  className={`col-${screenWidth < 700 ? "12" : "6"}`}
                  key={i}
                >
                  <div
                    className={`option-container ${
                      (selectedOption !== null &&
                        selectedOption.option === option?.option) ||
                      checkIfQuestionIsAnswered(option)
                        ? "active"
                        : ""
                    }`}
                    onClick={() => {
                      answerHandler(null, false, false);
                      setSelectedOption(option);
                    }}
                  >
                    <span>
                      {String.fromCharCode(i + 1 + 64)}
                      <span className="pe-4">{") "}</span>
                    </span>{" "}
                    {option?.option}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isMobile && (
            <>
              <button
                className="transparent-button"
                onClick={() => setOpen(true)}
              >
                <BsQuestionSquareFill
                  className="show-question-list"
                  fontSize={36}
                  style={{ position: "absolute", top: "40%", right: 15 }}
                />
              </button>
              <Drawer
                className="inside-render-drawer"
                // title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={() => setOpen(false)}
                open={open}
                getContainer={false}
              >
                {renderQuestionListContainer()}
              </Drawer>
            </>
          )}
          <footer
            className="mcq-question-main-area-footer position-absolute"
            style={{ padding: !isMobile ? "10px 70px" : "10px 60px 0px 30px" }}
          >
            <div className="row justify-content-between">
              <div
                className={`col-${
                  isMobile ? "12 d-flex justify-content-between" : "6"
                }`}
              >
                {/* <div className="row">
                  {footerButtons.map((btn) => (
                    <div className="col-4" key={btn.id}>
                      <button className="mcq-question-buttons other-buttons me-2">
                        {btn.name}
                      </button>
                    </div>
                  ))}
                </div> */}
                <button
                  className={`mcq-question-buttons other-buttons me-2 ${
                    screenWidth < 1366 ? "mb-2" : ""
                  }`}
                  onClick={() => {
                    handleMarkedForReview();
                    goToNextQuestion();
                  }}
                >
                  Mark for Review & Next
                </button>
                <button
                  className={`mcq-question-buttons other-buttons me-2 ${
                    screenWidth < 1366 ? "mb-2" : ""
                  }`}
                  onClick={handleClearResponse}
                >
                  Clear Response
                </button>
              </div>

              <div
                className={`col-${
                  isMobile
                    ? "12 mb-2 d-flex justify-content-between"
                    : "6 text-right my-auto"
                }`}
              >
                {currentQuestionNumber > 1 && (
                  <button
                    className={`mcq-question-buttons other-buttons me-2 ${
                      screenWidth < 1366 ? "mb-2" : ""
                    }`}
                    onClick={() => {
                      setCurrentQuestionNumber(currentQuestionNumber - 1);
                    }}
                  >
                    Go Back
                  </button>
                )}
                {isMobile && (
                  <button
                    className={`mcq-question-buttons me-2 ${
                      screenWidth < 1366 ? "mb-2" : ""
                    }`}
                    onClick={() => {}}
                  >
                    Submit Test
                  </button>
                )}
                <button
                  className={`mcq-question-buttons me-2 ${
                    screenWidth < 1366 ? "mb-2" : ""
                  }`}
                  onClick={() => {
                    answerHandler(selectedOption);
                    goToNextQuestion();
                  }}
                >
                  Save & Next
                </button>
              </div>
            </div>
          </footer>
        </div>
        {!isMobile && (
          <div
            className="col-5 question-list-main-area position-relative ps-0"
            style={{ paddingTop: 40 }}
          >
            {renderQuestionListContainer()}
            <footer className="mcq-question-list-footer position-absolute">
              <div className="row">
                <div className="col-12">
                  <button
                    className="mcq-question-buttons submit-button"
                    onClick={() => {}}
                  >
                    Submit Test
                  </button>
                </div>
              </div>
            </footer>
          </div>
        )}
      </div>
    </>
  );
};

export default MCQ;
