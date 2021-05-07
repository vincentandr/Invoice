const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let newItem = action.payload;

      let newCount = state.count + 1;

      let pageSize = state.pagination.pageSize;

      let current = Math.ceil(newCount / pageSize);

      return {
        ...state,
        data: [...state.data, newItem],
        count: newCount,
        pagination: { ...state.pagination, current: current },
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
    case "REMOVE_ALL": {
      return {
        ...state,
        data: [
          {
            key: 1,
            code: "",
            name: "",
            desc: "",
            qty: 0,
            price: 0,
            total: 0,
          },
        ],
        count: 1,
        pagination: {
          ...state.pagination,
          current: 1,
        },
      };
    }
    case "UPDATE_INPUT_VALUE": {
      let index = action.payload.index;
      let newVal = action.payload.val;
      let column = action.payload.column;

      let dataCopy = [...state.data];

      let item = { ...dataCopy[index] };

      item[column] = newVal;

      if (column === "qty" || column === "price")
        item.total = item.qty * item.price;

      dataCopy[index] = item;

      console.log(dataCopy);

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
    case "CHANGE_PAGE":
      const newCurrentPage = action.payload;
      return {
        ...state,
        pagination: { ...state.pagination, current: newCurrentPage },
      };
    default:
      throw new Error("No matching case found");
  }
};

export default reducer;
