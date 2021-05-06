import "./App.css";
import { useReducer } from "react";
import { Button, Form, Input, DatePicker, Row } from "antd";
import ModalBarang from "./modal.js";
import reducer from "./reducer.js";

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

  const defaultState = {
    data: [
      {
        key: 1,
        code: "",
        name: "",
        desc: "",
        qty: 0,
        price: 0,
        total: 0,
      },
    ],
    count: 1,
    isShowModal: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleOk = () => {
    // save
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const handleCancel = () => {
    // cancel
    dispatch({ type: "TOGGLE_MODAL" });
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
            onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
          >
            Edit Barang
          </Button>
        </Form.Item>
        <Form.Item>
          {state.isShowModal && (
            <ModalBarang
              visible={state.isShowModal}
              onOk={handleOk}
              onCancel={handleCancel}
              dispatch={dispatch}
              state={state}
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
