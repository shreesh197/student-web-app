export const saveQuestions = (questions: any) => {
  return {
    type: "SAVE_MCQ",
    payload: questions,
  };
};
