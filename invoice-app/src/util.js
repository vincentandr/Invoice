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
  return parseInt(data.reduce((sum, item) => sum + item.qty * item.price, 0));
};

// const calculateDiscount = (data, discount) => {
//   let discountedItems = data.filter((item) => item.discount === true);

//   if (discountedItems.length > 0) {
//     return parseInt(
//       discountedItems.reduce(
//         (sum, item) => sum + (item.qty * item.price * discount) / 100,
//         0
//       )
//     );
//   }

//   return 0;
// };

const calculateDiscount = (data) => {
  let discountedItems = data.filter((item) => item.discount > 0);

  if (discountedItems.length > 0) {
    return parseInt(
      discountedItems.reduce(
        (sum, item) => sum + (item.qty * item.price * item.discount) / 100,
        0
      )
    );
  }

  return 0;
};

export {
  numberWithCommas,
  getFieldsOnTable,
  calculateSubtotal,
  calculateDiscount,
};
