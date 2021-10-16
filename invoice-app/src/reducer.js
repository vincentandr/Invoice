import { calculateSubtotal, calculateDiscount } from "./util.js";

const invoiceReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let newItem = action.payload;

      let dataLength = [...state.data].length;

      let pageSize = state.pagination.pageSize;

      let current = Math.ceil((dataLength + 1) / pageSize);

      return {
        ...state,
        data: [...state.data, newItem],
        pagination: { ...state.pagination, current: current },
      };
    }
    case "REMOVE_ITEM": {
      let id = action.payload;

      let dataCopy = [...state.data];

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
        buyerInfo: {...state.buyerInfo, subtotal: subtotal, totalDiscount: totalDiscount},
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
            count: 1,
            code: "",
            name: "",
            //discount: false,
            discount: 0,
            qty: 1,
            price: 0,
          },
        ],
        buyerInfo: { ...state.buyerInfo, subtotal: 0, totalDiscount: 0 },
        pagination: {
          ...state.pagination,
          current: 1,
        },
      };
    }
    case "UPDATE_FORM_INPUT_VALUE": {
      let newVal = action.payload.value;
      let name = action.payload.name;

      let dataCopy = { ...state.buyerInfo };

      dataCopy[name] = newVal;

      // if(name === "discount"){
      //   dataCopy["totalDiscount"] = calculateDiscount(state.data, newVal)

      //   console.log(dataCopy["totalDiscount"]);
      // }

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

      let subtotal = calculateSubtotal(dataCopy);

      let totalDiscount = calculateDiscount(dataCopy);

      return {
        ...state,
        data: [...dataCopy],
        buyerInfo: { 
          ...state.buyerInfo,
          subtotal: subtotal,
          totalDiscount: totalDiscount },
      };
    }
    case "CHANGE_PAGE":
      const newCurrentPage = action.payload;
      return {
        ...state,
        pagination: { ...state.pagination, current: newCurrentPage },
      };
    case "CHANGE_FORM":
      const newOption = action.payload;

      // If changing form to faktur then printed table columns are adjusted
      var columns =
        newOption === "faktur"
          ? [
              "No.",
              "Kode Barang",
              "Nama Barang",
              "Disc.",
              "Qty",
              "Unit",
              "Harga",
              "Total",
            ]
          : ["No.", "Kode Barang", "Nama Barang", "Qty", "Unit"];

      return {
        ...state,
        columns: columns,
      };
    default:
      throw new Error("No matching case found");
  }
};

const receiptReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_INPUT_VALUE":
      const newVal = action.payload.value;
      const name = action.payload.name;

      let dataCopy = { ...state.data };

      dataCopy[name] = newVal;

      return { ...state, data: dataCopy };
    default:
      throw new Error("No matching case found");
  }
};

export { invoiceReducer, receiptReducer };

                                
                                
                                