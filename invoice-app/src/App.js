import "./App.css";
import { Row, Col, Card, Radio } from "antd";
import { useReactToPrint } from "react-to-print";
import { useState, useRef, useReducer } from "react";
import moment from "moment";
import InvoiceForm from "./form.js";
import { InvoiceToPrint, invoiceStyle } from "./invoice.js";
import reducer from "./reducer.js";
import { Receipt } from "./receipt.js";

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

  const [formState, setFormState] = useState("faktur");
  const [invoiceState, invoiceDispatch] = useReducer(
    reducer,
    defaultInvoiceState
  );

  const invoiceToPrint = useRef();

  const changeForm = (e) => {
    const newOption = e.target.value;

    setFormState(newOption);

    invoiceDispatch({ type: "CHANGE_FORM", payload: newOption });
  };

  const handleFinish = useReactToPrint({
    content: () => invoiceToPrint.current,
    pageStyle: invoiceStyle,
  });

  const isButtonHidden = () => {
    return (
      Math.ceil(invoiceState.data.length / invoiceState.pagination.pageSize) !==
        invoiceState.pagination.current && formState === "faktur"
    );
  };

  return (
    <>
      <div style={{ overflow: "hidden", height: 0 }}>
        <InvoiceToPrint
          ref={invoiceToPrint}
          state={invoiceState}
          formState={formState}
        />
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
                isButtonHidden={isButtonHidden}
              />
            ) : (
              <Receipt />
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default App;
