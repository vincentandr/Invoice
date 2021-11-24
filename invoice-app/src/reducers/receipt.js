export const receiptReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_INPUT_VALUE":
      const newVal = action.payload.value;
      const name = action.payload.name;

      let dataCopy = { ...state.formInfo };

      dataCopy[name] = newVal;

      return { ...state, formInfo: dataCopy };
    default:
      throw new Error("No matching case found");
  }
};
