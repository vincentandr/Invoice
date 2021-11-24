import { calculateSubtotal, calculateDiscount } from "../helpers/helper.js";
import { defaultInvoiceState } from "../constants/constant.js";

export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let newItem = action.payload;

      let dataLength = [...state.tableData].length;

      let pageSize = state.pagination.pageSize;

      let current = Math.ceil((dataLength + 1) / pageSize);

      return {
        ...state,
        tableData: [...state.tableData, newItem],
        pagination: { ...state.pagination, current: current },
      };
    }
    case "REMOVE_ITEM": {
      let id = action.payload;

      let dataCopy = [...state.tableData];

      let pageCount = Math.ceil(dataCopy.length / state.pagination.pageSize);

      let newItems = dataCopy.filter((item) => item.id !== id);

      let subtotal = calculateSubtotal(newItems);

      let totalDiscount = calculateDiscount(newItems);

      // reorder id after removing
      for (var i = id - 1; i < newItems.length; i++) {
        newItems[i].id = newItems[i].id - 1;
      }

      let current = state.pagination.current;

      // redirect to previous page if the deleted item is the first and only item of last page
      if (
        newItems.length % state.pagination.pageSize === 0 &&
        pageCount === current
      )
        current = current - 1;
      return {
        ...state,
        formInfo: {
          ...state.formInfo,
          subtotal: subtotal,
          totalDiscount: totalDiscount,
        },
        tableData: newItems,
        pagination: { ...state.pagination, current: current },
      };
    }
    case "REMOVE_ALL": {
      return {
        ...state,
        tableData: defaultInvoiceState.tableData,
        formInfo: { ...state.formInfo, subtotal: 0, totalDiscount: 0 },
        pagination: {
          ...state.pagination,
          current: 1,
        },
      };
    }
    case "UPDATE_FORM_INPUT_VALUE": {
      let newVal = action.payload.value;
      let name = action.payload.name;

      let dataCopy = { ...state.formInfo };

      dataCopy[name] = newVal;

      // if(name === "discount"){
      //   dataCopy["totalDiscount"] = calculateDiscount(state.tableData, newVal)

      //   console.log(dataCopy["totalDiscount"]);
      // }

      return {
        ...state,
        formInfo: { ...dataCopy },
      };
    }
    case "UPDATE_TABLE_INPUT_VALUE": {
      let index = action.payload.index;
      let newVal = action.payload.val;
      let column = action.payload.column;

      let dataCopy = [...state.tableData];

      let item = { ...dataCopy[index] };

      item[column] = newVal;

      dataCopy[index] = item;

      let subtotal = calculateSubtotal(dataCopy);

      let totalDiscount = calculateDiscount(dataCopy);

      return {
        ...state,
        tableData: [...dataCopy],
        formInfo: {
          ...state.formInfo,
          subtotal: subtotal,
          totalDiscount: totalDiscount,
        },
      };
    }
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
