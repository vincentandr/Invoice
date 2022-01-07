const moment = require("moment");
const pool = require("../configs/db.js");

let delivery_order = {};

delivery_order.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM delivery_order", (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

delivery_order.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM delivery_order WHERE id = ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

delivery_order.insert = (data) => {
  const tableData = data.tableData;
  const formInfo = data.formInfo;

  let datetime = new Date(formInfo.date);
  datetime = moment(datetime).format("YYYY-MM-DD");

  let duetime = new Date(formInfo.due);
  duetime = moment(duetime).format("YYYY-MM-DD");

  const formValues = {
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
      tableData[i].qty,
      tableData[i].unit,
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
          "INSERT INTO delivery_order SET ?",
          formValues,
          (err, results) => {
            if (err) {
              connection.rollback(() => {
                connection.release();
              });
              throw err;
            }
            connection.query(
              "INSERT INTO delivery_order_item (delivery_order_number, code, name, qty, unit) VALUES ?",
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

module.exports = delivery_order;
