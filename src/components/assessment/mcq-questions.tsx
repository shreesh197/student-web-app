import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { mcqCollection } from "../../constants";
import { getQuestions, saveQuestions } from "../../redux/actions";

const MCQ = () => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [mcqTest, setMcqTest] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMcqQuestions();
  }, []);

  const findCorrespondingQuestion = useCallback(() => {
    let correctQuestion = mcqTest.find(
      (ques, i) => currentQuestionNumber === i + 1
    );
    setCurrentQuestion(correctQuestion);
  }, [currentQuestionNumber, mcqTest]);

  useEffect(() => {
    findCorrespondingQuestion();
  }, [currentQuestionNumber, findCorrespondingQuestion]);

  const fetchMcqQuestions = () => {
    //modify
    let newData = mcqCollection.questions.map((question, i) => ({
      ...question,
      is_answered: false,
    }));
    setMcqTest(newData);
  };

  const answerHandler = (selectedOption: any) => {
    // console.log(selectedOption);
    //reset values
    let temp: any = resetPastSelectedValue();

    //set correct option selected
    temp?.options?.forEach((option: any) => {
      if (option?.option === selectedOption?.option) {
        // console.log("here");
        option.is_correct = true;
      }
    });
    temp.is_answered = true;
    setCurrentQuestion({ ...temp });
    // console.log(`current question ====> ${JSON.stringify(temp)}`);

    //save it to questions array
    saveSelectedOption(temp);
  };

  const saveSelectedOption = (temp: any) => {
    let tempArr: any[] = [...mcqTest];
    tempArr.forEach((question: any) => {
      if (question.question === temp.question) {
        question.options = [...temp.options];
        question.is_answered = temp.is_answered;
      }
    });
    console.log(`tempArr =====> ${JSON.stringify(tempArr)}`);
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
    mcqTest.forEach((question: any) => {
      if (question?.question === currentQuestion?.question) {
        question?.options?.forEach((option: any) => {
          if (option?.is_correct && option?.option === selectedOption?.option) {
            // console.log(
            //   `option thats selected  ====> ${JSON.stringify(option)}`
            // );
            isAnswered = true;
          }
        });
      }
    });
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

  return (
    <>
      <div className="row" style={{ paddingTop: "65px" }}>
        <div
          className="col-7 mcq-question-main-area pt-4 pb-4"
          style={{ paddingLeft: 70, paddingRight: 50 }}
        >
          <p className="mb-5">
            <span>Q {currentQuestionNumber}:</span>{" "}
            <span className="font-weight-bold">
              {currentQuestion?.question}
            </span>
          </p>
          <div className="row ps-4 pe-4">
            {currentQuestion?.options.map((option, i) => (
              <div className="col-6" key={i}>
                <div
                  className={`option-container ${
                    // selectedOption !== null &&
                    //   selectedOption.option === option?.option) ||
                    checkIfQuestionIsAnswered(option) ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedOption(option);
                    answerHandler(option);
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
        <div className="col-5 question-list-main-area">
          <div
            className="row pt-4 pb-4"
            style={{ paddingLeft: 50, paddingRight: 70 }}
          >
            {mcqTest.map((ques, i) => (
              <div className="col-2 text-center justify-content-center" key={i}>
                <button
                  className={`question-no-container ${getCorrectQuestionNumberClassName(
                    ques
                  )}`}
                  onClick={() => {
                    setCurrentQuestionNumber(i + 1);
                    // setIsQuestionAnswered(false);
                  }}
                >
                  <span
                    className={
                      currentQuestionNumber === i + 1 ? "font-weight-bold" : ""
                    }
                  >
                    {i + 1}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MCQ;
