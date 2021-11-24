import moment from "moment";
const defaultColumns = {
  invoiceColumns: [
    "No.",
    "Kode Barang",
    "Nama Barang",
    "Disc.",
    "Qty",
    "Unit",
    "Harga",
    "Total",
  ],
  deliveryOrderColumns: ["No.", "Kode Barang", "Nama Barang", "Qty", "Unit"],
};

const defaultTableData = {
  id: 1,
  count: 1,
  code: "",
  name: "",
  //discount: false,
  discount: 0,
  qty: 1,
  unit: "buah",
  price: 0,
};

const defaultInvoiceFormInfo = {
  name: "",
  number: localStorage.getItem("invoice")
    ? localStorage.getItem("invoice")
    : "",
  address: "",
  date: moment(new Date()).format("DD-MM-YYYY"),
  due: moment(new Date()).add(30, "days").format("DD-MM-YYYY"),
  city: "",
  note: "",
  discount: 0,
  totalDiscount: 0,
  subtotal: 0,
};

const defaultReceiptFormInfo = {
  name: "",
  receiptNumber: localStorage.getItem("receipt")
    ? localStorage.getItem("receipt")
    : "",
  date: moment(new Date()).format("DD-MM-YYYY"),
  giroNumber: "",
  amount: "",
  amountWritten: "",
  matter: "",
};

const defaultInvoiceState = {
  tableData: [defaultTableData],
  formInfo: defaultInvoiceFormInfo,
  pagination: {
    current: 1,
    pageSize: 5,
  },
};

const defaultReceiptState = {
  formInfo: defaultReceiptFormInfo,
};

export {
  defaultInvoiceState,
  defaultReceiptState,
  defaultColumns,
  defaultTableData,
};
