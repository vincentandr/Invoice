import { useRef, useReducer } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Popconfirm,
  Table,
  Card,
} from "antd";
import NumberFormat from "react-number-format";
import { useReactToPrint } from "react-to-print";
import reducer from "./reducer.js";
import moment from "moment";
import {
  numberWithCommas,
  getFieldsOnTable,
  qtyFormat,
  priceFormat,
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
      grandTotal: 0,
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
      <div style={{ overflow: "hidden", height: 0 }}>
        <Invoice ref={invoiceToPrint} state={state} />
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
                    initialValue={state.buyerInfo.name}
                  >
                    <Input
                      onBlur={(e) =>
                        dispatch({
                          type: "UPDATE_FORM_INPUT_VALUE",
                          payload: {
                            name: "name",
                            value: e.target.value,
                          },
                        })
                      }
                    />
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
                    initialValue={state.buyerInfo.number}
                  >
                    <Input
                      onBlur={(e) =>
                        dispatch({
                          type: "UPDATE_FORM_INPUT_VALUE",
                          payload: {
                            name: "number",
                            value: e.target.value,
                          },
                        })
                      }
                    />
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
                    initialValue={state.buyerInfo.address}
                    {...fullLayout}
                  >
                    <Input
                      onBlur={(e) =>
                        dispatch({
                          type: "UPDATE_FORM_INPUT_VALUE",
                          payload: {
                            name: "address",
                            value: e.target.value,
                          },
                        })
                      }
                    />
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
                    initialValue={moment(state.buyerInfo.date, "DD-MM-YYYY")}
                  >
                    <DatePicker
                      format="DD-MM-YYYY"
                      onBlur={(e) =>
                        dispatch({
                          type: "UPDATE_FORM_INPUT_VALUE",
                          payload: {
                            name: "date",
                            value: e.target.value,
                          },
                        })
                      }
                    />
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
                    initialValue={moment(state.buyerInfo.due, "DD-MM-YYYY")}
                  >
                    <DatePicker
                      format="DD-MM-YYYY"
                      onBlur={(e) =>
                        dispatch({
                          type: "UPDATE_FORM_INPUT_VALUE",
                          payload: {
                            name: "due",
                            value: e.target.value,
                          },
                        })
                      }
                    />
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
                    initialValue={state.buyerInfo.city}
                    wrapperCol={{ span: "19" }}
                  >
                    <Input
                      onBlur={(e) =>
                        dispatch({
                          type: "UPDATE_FORM_INPUT_VALUE",
                          payload: {
                            name: "city",
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span="23" offset="1">
                  <Form.Item
                    label="Keterangan"
                    {...fullLayout}
                    name="note"
                    initialValue={state.buyerInfo.note}
                  >
                    <Input.TextArea
                      onBlur={(e) =>
                        dispatch({
                          type: "UPDATE_FORM_INPUT_VALUE",
                          payload: {
                            name: "note",
                            value: e.target.value,
                          },
                        })
                      }
                    />
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

const EditableCell = ({
  editable,
  record,
  children,
  dataIndex,
  rowIndex,
  title,
  state,
  dispatch,
  ...restProps
}) => {
  let childNode = children;

  if (editable) {
    let page = { ...state.pagination };
    let index = rowIndex + (page.current - 1) * page.pageSize;

    if (dataIndex === "qty" || dataIndex === "price") {
      childNode = (
        <Form.Item
          name={`${dataIndex}${index}`}
          rules={[
            {
              required: true,
              message: `${title} tidak boleh kosong`,
            },
          ]}
          initialValue={state.data[index][dataIndex]}
          preserve={false}
          style={{ marginBottom: 0 }}
        >
          <NumberFormat
            {...(dataIndex === "price"
              ? {
                  format: numberWithCommas,
                  isAllowed: priceFormat,
                  allowNegative: true,
                }
              : {
                  isAllowed: qtyFormat,
                  allowNegative: false,
                })}
            value={state.data[index][dataIndex]}
            displayType="input"
            customInput={Input}
            style={{ width: "100%", textAlign: "end" }}
            onValueChange={(values) => {
              const { value } = values;
              dispatch({
                type: "UPDATE_TABLE_INPUT_VALUE",
                payload: {
                  val: parseInt(value),
                  index: index,
                  column: dataIndex,
                },
              });
            }}
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
              message: `${title} tidak boleh kosong`,
            },
          ]}
          initialValue={state.data[index][dataIndex]}
          preserve={false}
          style={{ marginBottom: 0 }}
        >
          <Input
            onBlur={(e) =>
              dispatch({
                type: "UPDATE_TABLE_INPUT_VALUE",
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

const ItemsTable = (props) => {
  const components = {
    body: {
      cell: EditableCell,
    },
  };

  const columns = [
    {
      title: props.state.columns[0],
      dataIndex: "id",
      width: "5%",
    },
    {
      title: props.state.columns[1],
      dataIndex: "code",
      editable: true,
      width: "15%",
    },
    {
      title: props.state.columns[2],
      dataIndex: "name",
      editable: true,
      width: "25%",
    },
    {
      title: props.state.columns[3],
      dataIndex: "qty",
      editable: true,
      width: "10%",
      align: "right",
    },
    {
      title: props.state.columns[4],
      dataIndex: "price",
      editable: true,
      width: "15%",
      align: "right",
    },
    {
      title: props.state.columns[5],
      dataIndex: "total",
      align: "right",
      render: (text, _, index) => {
        let idx =
          index +
          (props.state.pagination.current - 1) *
            props.state.pagination.pageSize;
        return (
          <NumberFormat
            format={numberWithCommas}
            displayType="text"
            value={props.state.data[idx].qty * props.state.data[idx].price}
          />
        );
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
        state: props.state,
        dispatch: props.dispatch,
      }),
    };
  });

  const addItem = () => {
    const toBeReset = getFieldsOnTable(props.form.getFieldsValue());

    const newRow = {
      id: props.state.count + 1,
      code: "",
      name: "",
      qty: 1,
      price: 0,
    };

    // validate before adding new item creates a new page
    if (props.state.data.length % props.state.pagination.pageSize === 0) {
      props.form
        .validateFields(toBeReset)
        .then((values) => {
          props.dispatch({ type: "ADD_ITEM", payload: newRow });
        })
        .catch((err) => {
          console.log("error");
        });
    } else {
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
            rowKey="id"
            footer={() => {
              return (
                <div style={{ fontWeight: "bold" }}>
                  <Row justify="end">
                    <Col pull="1">Subtotal</Col>
                    <Col span="3" style={{ textAlign: "end" }}>
                      <NumberFormat
                        displayType="text"
                        format={numberWithCommas}
                        value={
                          props.state.buyerInfo.grandTotal -
                          props.state.buyerInfo.discount
                        }
                      />
                    </Col>
                  </Row>
                  <Row justify="end">
                    <Col pull="1">Discount</Col>
                    <Col span="3">
                      <NumberFormat
                        customInput={Input}
                        displayType="input"
                        format={numberWithCommas}
                        allowNegative={false}
                        isAllowed={priceFormat}
                        value={props.state.buyerInfo.discount}
                        style={{ textAlign: "end" }}
                        onValueChange={(values) => {
                          const { value } = values;
                          props.dispatch({
                            type: "UPDATE_FORM_INPUT_VALUE",
                            payload: {
                              name: "discount",
                              value: value,
                            },
                          });
                        }}
                      />
                    </Col>
                  </Row>
                  <Row justify="end">
                    <Col pull="1">Grand Total</Col>
                    <Col span="3" style={{ textAlign: "end" }}>
                      <NumberFormat
                        displayType="text"
                        format={numberWithCommas}
                        value={props.state.buyerInfo.grandTotal}
                      />
                    </Col>
                  </Row>
                </div>
              );
            }}
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
