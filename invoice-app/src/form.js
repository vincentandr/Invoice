import { useState, useEffect, useReducer } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Row,
  Col,
  Popover,
  Popconfirm,
  Table,
  Card,
  Space,
} from "antd";
import reducer from "./reducer.js";
import moment from "moment";
import {numberWithCommas, getFieldsOnTable} from "./util.js";

const InvoiceForm = () => {
  const validateMessages = {
    required: null,
  };

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 22,
    },
  };

  const fullLayout = {
    labelCol: {
      span: 22,
    },
    wrapperCol: {
      span: 22,
    },
  };

  const defaultState = {
    data: [
      {
        key: 1,
        kode: "",
        nama: "",
        qty: 1,
        harga: 0,
        total: 0,
      },
    ],
    pagination: {
      current: 1,
      pageSize: 5,
    },
    count: 1,
    isShowModal: false,
  };

  const [form] = Form.useForm();
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((err) => console.log(err));
  };

  const handleFinishFailed = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((err) => console.log(err));
  };

  const isButtonDisabled = () => {
    return (
      Math.ceil(state.data.length / state.pagination.pageSize) !==
      state.pagination.current
    );
  };

  return (
    <>
      <Row justify="center">
        <h2>Info Faktur</h2>
      </Row>
      <Row>
        <Col offset="3" span="18">
          <Card>
            <Form
              {...layout}
              form={form}
              layout="vertical"
              validateMessages={validateMessages}
              onFinish={handleFinish}
              onFinishFailed={handleFinishFailed}
              scrollToFirstError
            >
              <Row>
                <Col span="11" offset="1">
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Nama perusahaan tidak boleh kosong",
                      },
                    ]}
                    label="Nama Perusahaan"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span="11">
                  <Form.Item
                    name="number"
                    label="Nomor Faktur Jual"
                    rules={[
                      {
                        required: true,
                        message: "Nomor faktur jual tidak boleh kosong",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span="23" offset="1">
                  <Form.Item
                    name="address"
                    label="Alamat Perusahaan"
                    rules={[
                      {
                        required: true,
                        message: "Alamat perusahaan tidak boleh kosong",
                      },
                    ]}
                    {...fullLayout}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span="7" offset="1">
                  <Form.Item
                    name="date"
                    label="Tanggal"
                    rules={[
                      {
                        required: true,
                        message: "Tanggal tidak boleh kosong",
                      },
                    ]}
                    initialValue={moment(new Date())}
                  >
                    <DatePicker format="DD-MM-YYYY" />
                  </Form.Item>
                </Col>
                <Col span="7">
                  <Form.Item
                    name="due"
                    label="Jatuh Tempo"
                    rules={[
                      {
                        required: true,
                        message: "Jatuh tempo tidak boleh kosong",
                      },
                    ]}
                    initialValue={moment(new Date()).add(30, "days")}
                  >
                    <DatePicker format="DD-MM-YYYY" />
                  </Form.Item>
                </Col>
                <Col span="9">
                  <Form.Item
                    name="city"
                    label="Kota"
                    rules={[
                      {
                        required: true,
                        message: "Kota tidak boleh kosong",
                      },
                    ]}
                    wrapperCol={{ span: "19" }}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span="23" offset="1">
                  <Form.Item label="Keterangan" {...fullLayout} name="note">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Space direction="vertical" size="middle">
                <ItemsTable
                  dispatch={dispatch}
                  state={state}
                  form={form}
                  isButtonDisabled={isButtonDisabled()}
                />
                <Row justify="end">
                  <Form.Item>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      hidden={isButtonDisabled()}
                    >
                      Generate
                    </Button>
                  </Form.Item>
                </Row>
              </Space>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const ItemsTable = (props) => {
  const EditableCell = ({
    editable,
    record,
    children,
    dataIndex,
    rowIndex,
    ...restProps
  }) => {
    let childNode = children;

    if (editable) {
      let page = { ...props.state.pagination };
      let index = rowIndex + (page.current - 1) * page.pageSize;

      if (dataIndex === "qty" || dataIndex === "harga") {
        childNode = (
          <Form.Item
            name={`${dataIndex}${index}`}
            rules={[
              {
                required: true,
                message: `${dataIndex} tidak boleh kosong`,
              },
            ]}
            initialValue={props.state.data[index][dataIndex]}
            preserve={false}
          >
            <InputNumber
              min={dataIndex === "harga" ? 0 : 1}
              onBlur={(e) =>
                props.dispatch({
                  type: "UPDATE_INPUT_VALUE",
                  payload: {
                    val: e.target.value,
                    index: index,
                    column: dataIndex,
                  },
                })
              }
            />
          </Form.Item>
        );
      } else {
        childNode = (
          <Form.Item
            name={`${dataIndex}${index}`}
            rules={[
              {
                required: true,
                message: `${dataIndex} tidak boleh kosong`,
              },
            ]}
            initialValue={props.state.data[index][dataIndex]}
            preserve={false}
          >
            <Input
              onBlur={(e) =>
                props.dispatch({
                  type: "UPDATE_INPUT_VALUE",
                  payload: {
                    val: e.target.value,
                    index: index,
                    column: dataIndex,
                  },
                })
              }
            />
          </Form.Item>
        );
      }
    }

    return <td {...restProps}>{childNode}</td>;
  };

  const components = {
    body: {
      cell: EditableCell,
    },
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Kode Barang",
      dataIndex: "kode",
      editable: true,
      width: "15%",
    },
    {
      title: "Nama Barang",
      dataIndex: "nama",
      editable: true,
      width: "35%",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      editable: true,
      width: "10%",
    },
    {
      title: "Harga (Rp.)",
      dataIndex: "harga",
      editable: true,
      width: "15%",
    },
    {
      title: "Total (Rp.)",
      dataIndex: "total",
      render: (text, _, index) => {
        let idx =
          index +
          (props.state.pagination.current - 1) *
            props.state.pagination.pageSize;
        return numberWithCommas(props.state.data[idx].total);
      },
    },
    {
      title: "Hapus",
      dataIndex: "remove",
      render: (_, record) =>
        props.state.data.length > 1 ? (
          <Button type="default" danger onClick={() => removeItem(record.key)}>
            Hapus
          </Button>
        ) : null,
    },
  ];

  const tableColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record, rowIndex) => ({
        record,
        rowIndex,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const addItem = () => {
    const toBeReset = getFieldsOnTable(props.form.getFieldsValue());

    props.form
      .validateFields(toBeReset)
      .then((values) => {
        const newRow = {
          key: props.state.count + 1,
          kode: "",
          nama: "",
          qty: 1,
          harga: 0,
          total: 0,
        };

        props.dispatch({ type: "ADD_ITEM", payload: newRow });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const removeItem = (key) => {
    props.dispatch({ type: "REMOVE_ITEM", payload: key });
  };

  const removeAll = () => {

    props.dispatch({ type: "REMOVE_ALL", payload: props.form });
  };

  const changePage = (page) => {
    const toBeReset = getFieldsOnTable(props.form.getFieldsValue());

    props.form
      .validateFields(toBeReset)
      .then((values) => {
            props.dispatch({ type: "CHANGE_PAGE", payload: page.current });
      })
      .catch((err) => {
        console.log("error");

      });
  };

  useEffect(() => {
    console.log(props.form.getFieldsValue())
  }, [props.state.data])

  return (
    <>
      <Space direction="vertical" size="large">
        <Row justify="end">
          <Space direction="horizontal" size="large">
            <Col>
                <Button
                  type="default"
                  size="large"
                  htmlType="button"
                  hidden={props.isButtonDisabled}
                  onClick={addItem}
                >
                  Tambah Barang Baru
                </Button>
            </Col>
            <Col>
              <Popconfirm
                title="Yakin ingin hapus semua barang?"
                onConfirm={removeAll}
                okText="Yes"
                cancelText="No"
              >
                <Button type="default" size="large" htmlType="button" danger>
                  Hapus Semua Barang
                </Button>
              </Popconfirm>
            </Col>
          </Space>
        </Row>
        <Table
          components={components}
          dataSource={props.state.data}
          columns={tableColumns}
          pagination={props.state.pagination}
          onChange={(pagination) => changePage(pagination)}
        />
      </Space>
    </>
  );
};

export default InvoiceForm;
