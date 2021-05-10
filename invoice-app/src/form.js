import { useRef, useReducer } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Row,
  Col,
  Popconfirm,
  Table,
  Card,
} from "antd";
import { useReactToPrint } from "react-to-print";
import reducer from "./reducer.js";
import moment from "moment";
import {
  numberWithCommas,
  numberWithCommasReverse,
  getFieldsOnTable,
} from "./util.js";
import { Invoice, invoiceStyle} from "./invoice.js";

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
        id: 1,
        kode: "",
        nama: "",
        qty: 1,
        harga: 0,
        total: 0,
      },
    ],
    info: {
      
    },
    columns: ["No.", "Kode Barang", "Nama Barang", "Qty", "Harga", "Total"],
    pagination: {
      current: 1,
      pageSize: 5,
    },
    count: 1,
    isShowModal: false,
  };

  const [form] = Form.useForm();
  const [state, dispatch] = useReducer(reducer, defaultState);
  const invoiceToPrint = useRef();

  const handleFinish = useReactToPrint({
    content: () => invoiceToPrint.current,
    pageStyle:
      invoiceStyle,
  });

  const isButtonDisabled = () => {
    return (
      Math.ceil(state.data.length / state.pagination.pageSize) !==
      state.pagination.current
    );
  };

  return (
    <>
      <div style={{ overflow: "hidden", height: 0   }}>
        <Invoice ref={invoiceToPrint} state={state}/>
      </div>
      <Row justify="center">
        <h2>Info Faktur</h2>
      </Row>
      <Row>
        <Col offset="4" span="16">
          <Card>
            <Form
              {...layout}
              form={form}
              layout="vertical"
              validateMessages={validateMessages}
              onFinish={handleFinish}
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
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>
              <ItemsTable
                dispatch={dispatch}
                state={state}
                form={form}
                isButtonDisabled={isButtonDisabled()}
              />
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
            style={{ marginBottom: 0 }}
          >
            <InputNumber
              {...(dataIndex === "harga"
                ? {
                    formatter: (value) => numberWithCommas(value),
                    parser: (value) => numberWithCommasReverse(value),
                    style: { width: "100%" },
                  }
                : {
                    parser: (value) => parseInt(value),
                    style: { width: "100%" },
                  })}
              min={dataIndex === "harga" ? 0 : 1}
              onBlur={(e) =>
                props.dispatch({
                  type: "UPDATE_INPUT_VALUE",
                  payload: {
                    val: parseInt(e.target.value),
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
            style={{ marginBottom: 0 }}
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
      dataIndex: "id",
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
      width: "25%",
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
          <Button type="default" danger onClick={() => removeItem(record.id)}>
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

    const newRow = {
      id: props.state.count + 1,
      kode: "",
      nama: "",
      qty: 1,
      harga: 0,
      total: 0,
    };

    // validate before adding new item creates a new page
    if(props.state.data.length % props.state.pagination.pageSize === 0){
      props.form
        .validateFields(toBeReset)
        .then((values) => {
          props.dispatch({ type: "ADD_ITEM", payload: newRow });
        })
        .catch((err) => {
          console.log("error");
        });
    }else{
      props.dispatch({ type: "ADD_ITEM", payload: newRow });
    }
  };

  const removeItem = (id) => {
    props.dispatch({ type: "REMOVE_ITEM", payload: id });
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

  return (
    <>
      <Row>
        <Col span="23">
          <Table
            components={components}
            dataSource={props.state.data}
            columns={tableColumns}
            pagination={props.state.pagination}
            onChange={(pagination) => changePage(pagination)}
          />
        </Col>
      </Row>
      <Row justify="start">
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
          <Col offset="3">
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
        </Col>
        <Col offset="12">
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              hidden={props.isButtonDisabled}
            >
              Generate
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default InvoiceForm;
