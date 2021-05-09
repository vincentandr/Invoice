const numberWithCommas = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
};

const getFieldsOnTable = (fields) => {
  let keys = Object.keys(fields);
  let regex = new RegExp("^kode|^qty|^nama|^harga");
  return keys.filter((key) => regex.test(key));
};

export { numberWithCommas, getFieldsOnTable };
