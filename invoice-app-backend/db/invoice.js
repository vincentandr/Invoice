const moment = require("moment");
const pool = require("../configs/db.js");

let invoice = {};

invoice.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM invoice", (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

invoice.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM invoice WHERE id = ?", [id], (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

invoice.insert = (data) => {
  const tableData = data.tableData;
  const formInfo = data.formInfo;

  var datetime = new Date(formInfo.date);
  datetime = moment(datetime).format("YYYY-MM-DD");

  var duetime = new Date(formInfo.due);
  duetime = moment(duetime).format("YYYY-MM-DD");

  let formValues = {
    number: formInfo.number,
    name: formInfo.name,
    address: formInfo.address,
    date: datetime,
    due: duetime,
    city: formInfo.city,
    note: formInfo.note,
  };

  let itemValues = [];

  for (var i = 0; i < tableData.length; i++) {
    itemValues.push([
      formInfo.number,
      tableData[i].code,
      tableData[i].name,
      tableData[i].discount,
      tableData[i].qty,
      tableData[i].unit,
      tableData[i].price,
    ]);
  }

  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);
      connection.beginTransaction((err) => {
        if (err) {
          connection.rollback(() => {
            connection.release();
          });
          throw err;
        }
        connection.query(
          "INSERT INTO invoice SET ?",
          formValues,
          (err, results) => {
            if (err) {
              connection.rollback(() => {
                connection.release();
              });
              throw err;
            }
            connection.query(
              "INSERT INTO invoice_item (invoice_number, code, name, discount, qty, unit, price) VALUES ?",
              [itemValues],
              (err, results) => {
                if (err) {
                  connection.rollback(() => {
                    connection.release();
                  });
                  throw err;
                }

                connection.commit(function (err) {
                  if (err) {
                    connection.rollback(() => {
                      connection.release();
                    });
                    throw err;
                  }

                  connection.release();
                  return resolve("ok");
                });
              }
            );
          }
        );
      });
    });
  });
};

module.exports = invoice;
