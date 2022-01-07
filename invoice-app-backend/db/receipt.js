const moment = require("moment");
const pool = require("../configs/db.js");

let receipt = {};

receipt.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM receipt", (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

receipt.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM receipt WHERE id = ?", [id], (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

receipt.insert = (data) => {
  const formInfo = data.formInfo;

  let formValues = {
    number: formInfo.receiptNumber,
    name: formInfo.name,
    giro_number: formInfo.giroNumber,
    date: formInfo.date,
    amount: formInfo.amount,
    written_amount: formInfo.amountWritten,
    matter: formInfo.matter,
  };

  return new Promise((resolve, reject) => {
    pool.query("INSERT INTO receipt SET ?", formValues, (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve("ok");
    });
  });
};

module.exports = receipt;
