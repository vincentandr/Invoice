const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const qtyFormat = (input) => {
  const { value } = input;
  if (value > 0) return input;
};

const priceFormat = (input) => {
  const { value } = input;
  if (value >= 0) return input;
};

const getFieldsOnTable = (fields) => {
  let keys = Object.keys(fields);
  let regex = new RegExp("^code|^qty|^name|^price");
  return keys.filter((key) => regex.test(key));
};

const calculateGrandTotal = (data) => {
  return data.reduce((sum, item2) => sum + item2.qty * item2.price, 0);
};

export {
  numberWithCommas,
  getFieldsOnTable,
  qtyFormat,
  priceFormat,
  calculateGrandTotal,
};
