const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const numberWithCommasReverse = (x) => {
  return x.toString().replace(/./g, "");
};

const getFieldsOnTable = (fields) => {
  let keys = Object.keys(fields);
  let regex = new RegExp("^kode|^qty|^nama|^harga");
  return keys.filter((key) => regex.test(key));
};

export { numberWithCommas, numberWithCommasReverse, getFieldsOnTable };
