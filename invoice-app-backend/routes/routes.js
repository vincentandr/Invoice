const express = require("express");
const invoice = require("../db/invoice.js");
const delivery_order = require("../db/delivery_order.js");
const receipt = require("../db/receipt.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/getInvoices", async (req, res) => {
  try {
    let results = await invoice.all();
    res.json(results);
  } catch (e) {
    console.log(e);
  }
});

router.get("/getInvoice/:id", async (req, res) => {
  try {
    let results = await invoice.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
  }
});

router.post("/invoiceInsert", async (req, res) => {
  try {
    let data = req.body;

    await invoice.insert(data);
  } catch (e) {
    console.log(e);
  }
});

router.get("/getDO/:id", async (req, res) => {
  try {
    let results = await invoice.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
  }
});

router.post("/DOInsert", async (req, res) => {
  try {
    let data = req.body;

    await delivery_order.insert(data);
  } catch (e) {
    console.log(e);
  }
});

router.post("/receiptInsert", async (req, res) => {
  try {
    let data = req.body;

    await receipt.insert(data);
    res.json("insert successful");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
