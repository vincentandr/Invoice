const numberWithCommas = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts[0];
  //return parts.join(",");
};;

const getFieldsOnTable = (fields) => {
  let keys = Object.keys(fields);
  let regex = new RegExp("^code|^qty|^name|^price");
  return keys.filter((key) => regex.test(key));
};

const calculateSubtotal = (data) => {
  return data.reduce((sum, item) => sum + item.qty * item.price, 0);
};

export { numberWithCommas, getFieldsOnTable, calculateSubtotal };
