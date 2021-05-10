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

export { numberWithCommas, getFieldsOnTable, qtyFormat, priceFormat };
