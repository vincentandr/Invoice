import "../css/App.css";
import { invoiceStyle } from "../css/invoicePrint.js";
import { receiptStyle } from "../css/receiptPrint.js";
import { Row, Col, Card, Radio } from "antd";
import { useReactToPrint } from "react-to-print";
import React, { useState, useRef, useReducer } from "react";
import {
  defaultInvoiceState,
  defaultReceiptState,
  defaultColumns,
} from "../constants/constant";
import InvoiceForm from "./invoiceForm.js";
import { InvoiceToPrint } from "./invoicePrint.js";
import { ReceiptToPrint } from "./receiptPrint.js";
import { invoiceReducer } from "../reducers/invoice.js";
import { receiptReducer } from "../reducers/receipt.js";
import { Receipt } from "./receiptForm.js";

const ReceiptContext = React.createContext();

const App = () => {
  const [formState, setFormState] = useState("invoice");
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
  };

  const handleFinish = useReactToPrint(
    formState !== "receipt"
      ? {
          content: () => invoiceToPrint.current,
          pageStyle: invoiceStyle,
        }
      : {
          content: () => receiptToPrint.current,
          pageStyle: receiptStyle,
        }
  );

  return (
    <>
      <div style={{ overflow: "hidden", height: 0 }}>
        {formState !== "receipt" ? (
          <InvoiceToPrint
            ref={invoiceToPrint}
            state={invoiceState}
            formState={formState}
            columns={
              formState === "invoice"
                ? defaultColumns.invoiceColumns
                : defaultColumns.deliveryOrderColumns
            }
          />
        ) : (
          <ReceiptToPrint ref={receiptToPrint} state={receiptState} />
        )}
      </div>
      <Row style={{ marginTop: "1vw" }}>
        <Col offset="2">
          <Radio.Group
            defaultValue="invoice"
            buttonStyle="solid"
            onChange={changeForm}
          >
            <Radio.Button value="invoice">Faktur Penjualan</Radio.Button>
            <Radio.Button value="deliveryOrder">Surat Jalan</Radio.Button>
            <Radio.Button value="receipt">Kwitansi</Radio.Button>
          </Radio.Group>
        </Col>
        <Col offset="3">
          <h2>
            {formState === "invoice" && "Info Faktur"}
            {formState === "deliveryOrder" && "Info Surat Jalan"}
            {formState === "receipt" && "Info Kwitansi"}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col offset="2" span="20">
          <Card>
            {formState !== "receipt" ? (
              <InvoiceForm
                submitHandler={handleFinish}
                state={invoiceState}
                dispatch={invoiceDispatch}
                formState={formState}
                columns={
                  formState === "invoice"
                    ? defaultColumns.invoiceColumns
                    : defaultColumns.deliveryOrderColumns
                }
              />
            ) : (
              <ReceiptContext.Provider
                value={{
                  receiptState,
                  receiptDispatch,
                  handleFinish,
                  formState,
                }}
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

export { App, ReceiptContext };
