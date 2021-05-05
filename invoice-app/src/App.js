import "./App.css";
import { useState } from "react";
import { Button, Form, Input, DatePicker, Row } from "antd";
import ModalBarang from "./modal.js";

const App = () => {
  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 6,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 11,
    },
  };

  const [isShowModal, setShowModal] = useState(false);

  const handleOk = () => {
    // save
    setShowModal(false);
  };

  const handleCancel = () => {
    // cancel
    setShowModal(false);
  };

  return (
    <>
      <Row justify="center">
        <h2>Info Faktur</h2>
      </Row>
      <Form {...layout}>
        <Form.Item label="Nama Perusahaan:">
          <Input />
        </Form.Item>
        <Form.Item label="Alamat Perusahaan:">
          <Input />
        </Form.Item>
        <Form.Item label="Nomor Faktur Jual:">
          <Input />
        </Form.Item>
        <Form.Item label="Tanggal:">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Jatuh Tempo:">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Keterangan:">
          <Input />
        </Form.Item>
        <Form.Item label="Barang:">
          <Button
            type="primary"
            htmlType="button"
            onClick={() => {
              console.log(isShowModal);
              return setShowModal((prevState) => !prevState);
            }}
          >
            Edit Barang
          </Button>
        </Form.Item>
        <Form.Item>
          {isShowModal && (
            <ModalBarang
              visible={isShowModal}
              onOk={handleOk}
              onCancel={handleCancel}
            />
          )}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Generate
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
