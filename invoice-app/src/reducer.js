const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = action.payload;
      return {
        ...state,
        data: [...state.data, newItem],
        count: state.count + 1,
      };
    }
    case "REMOVE_ITEM": {
      const key = action.payload;

      const dataCopy = [...state.data];

      const newItems = dataCopy.filter((item) => item.key !== key);
      return {
        ...state,
        data: newItems,
      };
    }
    case "CALCULATE_TOTAL": {
      const record = action.payload;

      const dataCopy = [...state.data];

      const item = { ...dataCopy[record.key - 1] };

      item.total = item.qty * item.price;

      dataCopy[record.key - 1] = item;

      return {
        ...state,
        data: [...dataCopy],
      };
    }
    case "TOGGLE_MODAL":
      return {
        ...state,
        isShowModal: !state.isShowModal,
      };
    default:
      throw new Error("No matching case found");
  }
};

export default reducer;
