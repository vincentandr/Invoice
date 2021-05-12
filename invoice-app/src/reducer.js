import {calculateGrandTotal} from "./util.js"

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

      let grandTotal = calculateGrandTotal(newItems, state.buyerInfo.discount);

      let current = state.pagination.current;

      // redirect to previous page if the deleted item is the first and only item of current page
      if (newItems.length % state.pagination.pageSize === 0)
        current = current - 1;
      return {
        ...state,
        data: newItems,
        pagination: { ...state.pagination, current: current },
        buyerInfo: { ...state.buyerInfo, grandTotal: grandTotal },
      };
    }
    case "REMOVE_ALL": {
      return {
        ...state,
        data: [
          {
            id: 1,
            code: "",
            name: "",
            qty: 1,
            price: 0,
          },
        ],
        buyerInfo: { ...state.buyerInfo, grandTotal: 0, discount: 0 },
        count: 1,
        pagination: {
          ...state.pagination,
          current: 1,
        },
      };
    }
    case "UPDATE_FORM_INPUT_VALUE": {
      let val = action.payload.value;
      let name = action.payload.name;

      let dataCopy = { ...state.buyerInfo };

      dataCopy[name] = val;

      if (name === "discount") {
        var grandTotal = calculateGrandTotal(state.data, dataCopy.discount);
        dataCopy.grandTotal = grandTotal;
      }

      console.log(dataCopy.discount);

      return {
        ...state,
        buyerInfo: { ...dataCopy },
      };
    }
    case "UPDATE_TABLE_INPUT_VALUE": {
      let index = action.payload.index;
      let newVal = action.payload.val;
      let column = action.payload.column;

      let dataCopy = [...state.data];

      let item = { ...dataCopy[index] };

      item[column] = newVal;

      dataCopy[index] = item;

      let grandTotal = calculateGrandTotal(dataCopy, state.buyerInfo.discount);

      return {
        ...state,
        data: [...dataCopy],
        buyerInfo: { ...state.buyerInfo, grandTotal: grandTotal },
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
