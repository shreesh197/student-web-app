export const saveQuestions = (questions: any) => {
  return {
    type: "SAVE_MCQ",
    payload: questions,
  };
};

export const getQuestions = () => {
  return {
    type: "GET_MCQ",
  };
};
