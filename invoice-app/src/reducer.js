const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let newItem = action.payload;

      let newCount = state.count + 1;

      let dataLength = [...state.data].length + 1;

      let pageSize = state.pagination.pageSize;

      let current = Math.ceil(dataLength / pageSize);

      return {
        ...state,
        data: [...state.data, newItem],
        count: newCount,
        pagination: { ...state.pagination, current: current },
      };
    }
    case "REMOVE_ITEM": {
      let id = action.payload;

      let dataCopy = [...state.data];

      let newItems = dataCopy.filter((item) => item.id !== id);

      let current = state.pagination.current;

      // redirect to previous page if the deleted item is the first and only item of current page
      if (newItems.length % state.pagination.pageSize === 0)
        current = current - 1;      
      return {
        ...state,
        data: newItems,
        pagination: { ...state.pagination, current: current },
      };
    }
    case "REMOVE_ALL": {
      return {
        ...state,
        data: [
          {
            id: 1,
            kode: "",
            nama: "",
            qty: 1,
            harga: 0,
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

      //prevent qty 0
      if (column === "qty" && newVal === 0) {
        newVal = 1;
        console.log(newVal);;
      }

      item[column] = newVal;

      // calculate total automatically
      if (column === "qty" || column === "harga") {
        if (!isNaN(newVal) && newVal > 0) item.total = item.qty * item.harga;
      }

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
