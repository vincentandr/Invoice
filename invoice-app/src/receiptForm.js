import { Button, Form, Input, DatePicker, Row, Col } from "antd";
import { useContext } from "react";
import { numberWithCommas } from "./util.js";
import NumberFormat from "react-number-format";
import { ReceiptContext } from "./App.js";
import moment from "moment";

const Receipt = () => {
  const context = useContext(ReceiptContext);

  const handleFinish = () => {
    localStorage.setItem(
      context.formState,
      context.receiptState.data.receiptNumber
    );

    context.handleFinish();
  };

  return (
    <div id="kwitansi">
      <Form layout="vertical" scrollToFirstError onFinish={handleFinish}>
        <Row>
          <Col offset="1" span="13">
            <PayerName />
          </Col>
          <Col offset="1" span="8">
            <ReceiptNumber />
          </Col>
        </Row>
        <Row>
          <Col offset="1" span="7">
            <ReceiptDate />
          </Col>
          <Col flex="auto" pull="1">
            <GiroNumber />
          </Col>
        </Row>
        <Row>
          <Col offset="1" span="5">
            <Amount />
          </Col>
          <Col offset="1" span="16">
            <AmountWritten />
          </Col>
        </Row>
        <Row>
          <Col offset="1" span="22">
            <Matter />
          </Col>
        </Row>
        <Row justify="end">
          <Col pull="1">
            <SubmitButton />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const PayerName = () => {
  const context = useContext(ReceiptContext);

  return (
    <Form.Item
      name="name"
      label="Nama Pembayar"
      rules={[
        {
          required: true,
          message: "Nama pembayar tidak boleh kosong",
        },
      ]}
      initialValue={context.receiptState.data.name}
    >
      <Input
        onBlur={(e) =>
          context.receiptDispatch({
            type: "UPDATE_FORM_INPUT_VALUE",
            payload: {
              name: "name",
              value: e.target.value,
            },
          })
        }
      />
    </Form.Item>
  );
};

const ReceiptNumber = () => {
  const context = useContext(ReceiptContext);

  return (
    <Form.Item
      name="receiptNumber"
      label="Nomor Kwitansi"
      rules={[
        {
          required: true,
          message: "Nomor kwitansi tidak boleh kosong",
        },
      ]}
      initialValue={context.receiptState.data.receiptNumber}
    >
      <Input
        onBlur={(e) =>
          context.receiptDispatch({
            type: "UPDATE_FORM_INPUT_VALUE",
            payload: {
              name: "receiptNumber",
              value: e.target.value,
            },
          })
        }
      />
    </Form.Item>
  );
};

const ReceiptDate = () => {
  const context = useContext(ReceiptContext);

  return (
    <Form.Item
      name="date"
      label="Tanggal"
      rules={[
        {
          required: true,
          message: "Tanggal tidak boleh kosong",
        },
      ]}
      initialValue={moment(context.receiptState.data.date, "DD-MM-YYYY")}
    >
      <DatePicker
        format="DD-MM-YYYY"
        onBlur={(e) =>
          context.receiptDispatch({
            type: "UPDATE_FORM_INPUT_VALUE",
            payload: {
              name: "date",
              value: e.target.value,
            },
          })
        }
      />
    </Form.Item>
  );
};

const GiroNumber = () => {
  const context = useContext(ReceiptContext);

  return (
    <Form.Item
      name="giroNumber"
      label="Nomor cek / giro"
      rules={[
        {
          required: true,
          message: "Nomor cek / giro tidak boleh kosong",
        },
      ]}
      initialValue={context.receiptState.data.giroNumber}
    >
      <Input
        onBlur={(e) =>
          context.receiptDispatch({
            type: "UPDATE_FORM_INPUT_VALUE",
            payload: {
              name: "giroNumber",
              value: e.target.value,
            },
          })
        }
      />
    </Form.Item>
  );
};

const Amount = () => {
  const context = useContext(ReceiptContext);

  return (
    <Form.Item
      name="amount"
      label="Jumlah Uang"
      rules={[
        {
          required: true,
          message: "Jumlah uang tidak boleh kosong",
        },
      ]}
      initialValue={context.receiptState.data.amount}
    >
      <NumberFormat
        format={numberWithCommas}
        displayType="input"
        customInput={Input}
        style={{ width: "100%"  }}
        onValueChange={(values) => {
          const { value } = values;
          context.receiptDispatch({
            type: "UPDATE_FORM_INPUT_VALUE",
            payload: {
              value: parseInt(value),
              name: "amount",
            },
          });
        }}
      />
    </Form.Item>
  );
};

const AmountWritten = () => {
  const context = useContext(ReceiptContext);

  return (
    <Form.Item
      name="amountWritten"
      label="Jumlah Uang (Terbilang)"
      rules={[
        {
          required: true,
          message: "Jumlah uang (terbilang) tidak boleh kosong",
        },
      ]}
      initialValue={context.receiptState.data.amountWritten}
    >
      <Input
        onBlur={(e) =>
          context.receiptDispatch({
            type: "UPDATE_FORM_INPUT_VALUE",
            payload: {
              name: "amountWritten",
              value: e.target.value,
            },
          })
        }
      />
    </Form.Item>
  );
};

const Matter = () => {
  const context = useContext(ReceiptContext);

  return (
    <Form.Item
      name="matter"
      label="Untuk Kepentingan"
      rules={[
        {
          required: true,
          message: "Kepentingan tidak boleh kosong",
        },
      ]}
      initialValue={context.receiptState.data.matter}
    >
      <Input.TextArea
        maxLength={150}
        onBlur={(e) =>
          context.receiptDispatch({
            type: "UPDATE_FORM_INPUT_VALUE",
            payload: {
              name: "matter",
              value: e.target.value,
            },
          })
        }
      />
    </Form.Item>
  );
};

const SubmitButton = () => {
  return (
    <Form.Item style={{ marginBottom: 0 }}>
      <Button type="primary" size="large" htmlType="submit">
        Generate
      </Button>
    </Form.Item>
  );
};

export { Receipt };
