import "./App.css";
import { Row, Col, Card, Radio } from "antd";
import { useReactToPrint } from "react-to-print";
import React, { useState, useRef, useReducer } from "react";
import moment from "moment";
import InvoiceForm from "./invoiceForm.js";
import { InvoiceToPrint, invoiceStyle } from "./invoice.js";
import { ReceiptToPrint, receiptStyle} from "./receipt.js";
import { invoiceReducer, receiptReducer } from "./reducer.js";
import { Receipt } from "./receiptForm.js";

const ReceiptContext = React.createContext();

const App = () => {
  const defaultInvoiceState = {
    data: [
      {
        id: 1,
        count: 1,
        code: "",
        name: "",
        qty: 1,
        price: 0,
      },
    ],
    buyerInfo: {
      name: "",
      number: "",
      address: "",
      date: moment(new Date()).format("DD-MM-YYYY"),
      due: moment(new Date()).add(30, "days").format("DD-MM-YYYY"),
      city: "",
      note: "",
      discount: 0,
      subtotal: 0,
    },
    columns: ["No.", "Kode Barang", "Nama Barang", "Qty", "Harga", "Total"],
    pagination: {
      current: 1,
      pageSize: 5,
    },
  };

  const defaultReceiptState = {
    data: {
      name: "",
      receiptNumber: "",
      date: moment(new Date()).format("DD-MM-YYYY"),
      giroNumber: "",
      amount: "",
      amountWritten: "",
      matter: "",
    },
  };

  const [formState, setFormState] = useState("faktur");
  const [invoiceState, invoiceDispatch] = useReducer(
    invoiceReducer,
    defaultInvoiceState
  );
  const [receiptState, receiptDispatch] = useReducer(
    receiptReducer,
    defaultReceiptState
  );

  const invoiceToPrint = useRef();
  const receiptToPrint = useRef();

  const changeForm = (e) => {
    const newOption = e.target.value;

    setFormState(newOption);

    invoiceDispatch({ type: "CHANGE_FORM", payload: newOption });
  };

  const handleFinish = useReactToPrint(
    formState !== "kwitansi"
      ? {
          content: () => invoiceToPrint.current,
          pageStyle: invoiceStyle,
        }
      :
      {
          content: () => receiptToPrint.current,
          pageStyle: receiptStyle,
        }
  );

  return (
    <>
      <div style={{ overflow: "hidden", height: 0 }}>
        {formState !== "kwitansi" 
        ? (
          <InvoiceToPrint
            ref={invoiceToPrint}
            state={invoiceState}
            formState={formState}
          />
        ) 
        : <ReceiptToPrint ref={receiptToPrint} state={receiptState}/>}
      </div>
      <Row style={{ marginTop: "1vw" }}>
        <Col offset="4">
          <Radio.Group
            defaultValue="faktur"
            buttonStyle="solid"
            onChange={changeForm}
          >
            <Radio.Button value="faktur">Faktur Penjualan</Radio.Button>
            <Radio.Button value="surat">Surat Jalan</Radio.Button>
            <Radio.Button value="kwitansi">Kwitansi</Radio.Button>
          </Radio.Group>
        </Col>
        <Col offset="2">
          <h2>
            {formState === "faktur" && "Info Faktur"}
            {formState === "surat" && "Info Surat Jalan"}
            {formState === "kwitansi" && "Info Kwitansi"}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col offset="4" span="16">
          <Card>
            {formState !== "kwitansi" ? (
              <InvoiceForm
                submitHandler={handleFinish}
                state={invoiceState}
                dispatch={invoiceDispatch}
                formState={formState}
              />
            ) : (
              <ReceiptContext.Provider value={{ 
                receiptState, 
                receiptDispatch, 
                handleFinish }}
              >
                <Receipt />
              </ReceiptContext.Provider>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export {App, ReceiptContext};
