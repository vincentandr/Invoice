const express = require("express");
const routes = require("./routes/routes.js");
const port = 5000;

const app = express();

app.use(express.json());

app.get("/", routes);

app.get("/getInvoices/:id", routes);

app.post("/invoiceInsert", routes);

app.get("/getDO/:id", routes);

app.post("/DOInsert", routes);

app.post("/receiptInsert", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
