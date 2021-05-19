import { Button, Form, Input, DatePicker, Row, Col } from "antd";

const Receipt = () => {
  return (
    <div id="kwitansi">
      <Form layout="vertical" scrollToFirstError>
        <Row>
          <Col>
            <PayerName />
          </Col>
          <Col>
            <ReceiptNumber />
          </Col>
        </Row>
        <Row>
          <Col>
            <ReceiptDate />
          </Col>
          <Col>
            <GiroNumber />
          </Col>
        </Row>
        <Row>
          <Col>
            <Amount />
          </Col>
        </Row>
        <Row>
          <Matter />
        </Row>
        <Row>
          <Col>
            <SubmitButton />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const PayerName = () => {
  return (
    <Form.Item
      name="payer"
      label="Nama Pembayar"
      rules={[
        {
          required: true,
          message: "Nama pembayar tidak boleh kosong",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

const ReceiptNumber = () => {
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
    >
      <Input />
    </Form.Item>
  );
};

const ReceiptDate = () => {
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
    >
      <DatePicker />
    </Form.Item>
  );
};

const GiroNumber = () => {
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
    >
      <Input />
    </Form.Item>
  );
};

const Amount = () => {
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
    >
      <Input />
    </Form.Item>
  );
};

const Matter = () => {
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
    >
      <Input />
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
