const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let newItem = action.payload;
      return {
        ...state,
        data: [...state.data, newItem],
        count: state.count + 1,
      };
    }
    case "REMOVE_ITEM": {
      let key = action.payload;

      let dataCopy = [...state.data];

      let newItems = dataCopy.filter((item) => item.key !== key);
      return {
        ...state,
        data: newItems,
      };
    }
    case "UPDATE_INPUT_VALUE": {
      let index = action.payload.index;
      let newVal = action.payload.val;
      let column = action.payload.column;

      let dataCopy = [...state.data];

      let item = { ...dataCopy[index] };

      item[column] = newVal;

      if  (column === "qty" || column === "price")
        item.total = item.qty * item.price;

      dataCopy[index] = item;

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
