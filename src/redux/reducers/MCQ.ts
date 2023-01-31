const mcqReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "SAVE_MCQ":
      return (state = action.payload);
    case "GET_MCQ":
      return state;
    default:
      return state;
  }
};

export default mcqReducer;
