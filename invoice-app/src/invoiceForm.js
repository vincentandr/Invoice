import {
  Button,
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Popconfirm,
  Checkbox,
  Table,
  Select,
} from "antd";
import NumberFormat from "react-number-format";
import moment from "moment";
import { numberWithCommas, getFieldsOnTable } from "./util.js";

const { Option } = Select;

const InvoiceForm = (props) => {
  const [form] = Form.useForm();

  const handleFinish = () => {
    console.log(form.getFieldsValue());

    props.submitHandler();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      scrollToFirstError
    >
      <Row>
        <Col span="13" offset="1">
          <Form.Item
            name="companyName"
            rules={[
              {
                required: true,
                message: "Nama perusahaan tidak boleh kosong",
              },
            ]}
            label="Nama Perusahaan"
            initialValue={props.state.buyerInfo.name}
          >
            <Input
              onBlur={(e) =>
                props.dispatch({
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
        <Col span="8" offset="1">
          <Form.Item
            name="city"
            label="Kota"
            rules={[
              {
                required: true,
                message: "Kota tidak boleh kosong",
              },
            ]}
            initialValue={props.state.buyerInfo.city}
          >
            <Input
              onBlur={(e) =>
                props.dispatch({
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
        <Col span="22" offset="1">
          <Form.Item
            name="address"
            label="Alamat Perusahaan"
            rules={[
              {
                required: true,
                message: "Alamat perusahaan tidak boleh kosong",
              },
            ]}
            initialValue={props.state.buyerInfo.address}
          >
            <Input
              maxLength={80}
              onBlur={(e) =>
                props.dispatch({
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
        <Col span="6" offset="1">
          <Form.Item
            name="date"
            label="Tanggal"
            rules={[
              {
                required: true,
                message: "Tanggal tidak boleh kosong",
              },
            ]}
            initialValue={moment(props.state.buyerInfo.date, "DD-MM-YYYY")}
          >
            <DatePicker
              format="DD-MM-YYYY"
              onBlur={(e) =>
                props.dispatch({
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
        {props.formState === "faktur" && (
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
              initialValue={moment(props.state.buyerInfo.due, "DD-MM-YYYY")}
            >
              <DatePicker
                format="DD-MM-YYYY"
                onBlur={(e) =>
                  props.dispatch({
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
        )}
        <Col flex="auto" pull="1">
          <Form.Item
            name="number"
            label={
              props.formState === "faktur"
                ? "Nomor Faktur Jual"
                : "Nomor Surat Jalan"
            }
            rules={[
              {
                required: true,
                message: "Nomor faktur jual tidak boleh kosong",
              },
            ]}
            initialValue={props.state.buyerInfo.number}
          >
            <Input
              onBlur={(e) =>
                props.dispatch({
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
        <Col span="22" offset="1">
          <Form.Item
            label="Keterangan"
            name="note"
            initialValue={props.state.buyerInfo.note}
          >
            <Input.TextArea
              maxLength={120}
              onBlur={(e) =>
                props.dispatch({
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
        dispatch={props.dispatch}
        state={props.state}
        form={form}
        formState={props.formState}
        isButtonHidden={props.isButtonHidden}
      />
    </Form>
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
  formState,
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
                  allowNegative: true,
                }
              : {
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
    } else if (dataIndex === "discount") {
      childNode = (
        <Form.Item
          name={`${dataIndex}${index}`}
          valuePropName="checked"
          initialValue={state.data[index][dataIndex]}
          preserve={false}
          style={{ marginBottom: 0 }}
        >
          <Checkbox
            disabled={state.buyerInfo.discount === 0 || isNaN(state.buyerInfo.discount)}
            defaultChecked={state.data[index][dataIndex]}
            style={{transform: "scale(1.5)" }}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_TABLE_INPUT_VALUE",
                payload: {
                  val: e.target.checked,
                  index: index,
                  column: dataIndex,
                },
              })
            }
          />
        </Form.Item>
      );
    } else if (dataIndex === "unit"){
      childNode = (
        <Form.Item
          name={`${dataIndex}${index}`}
          initialValue={state.data[index][dataIndex]}
          preserve={false}
          style={{ marginBottom: 0 }}
        >
          <Select
            defaultValue="buah"
            onChange={(value) =>
              dispatch({
                type: "UPDATE_TABLE_INPUT_VALUE",
                payload: {
                  val: value,
                  index: index,
                  column: dataIndex,
                },
              })
            }
          >
            <Option value="buah">buah</Option>
            <Option value="set">set</Option>
          </Select>
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
            maxLength={60}
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

  var columns = [];

  if (props.formState === "faktur") {
    columns = [
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
        width: "20%",
      },
      {
        title: props.state.columns[3],
        dataIndex: "discount",
        editable: true,
        width: "5%",
      },
      {
        title: props.state.columns[4],
        dataIndex: "qty",
        editable: true,
        width: "8%",
        align: "right",
      },
      {
        title: props.state.columns[5],
        dataIndex: "unit",
        editable: true,
        width: "10%",
      },
      {
        title: props.state.columns[6],
        dataIndex: "price",
        editable: true,
        width: "13%",
      },
      {
        title: props.state.columns[7],
        dataIndex: "total",
        align: "right",
        width: "14%",
        render: (text, _, index) => {
          let idx =
            index +
            (props.state.pagination.current - 1) *
              props.state.pagination.pageSize;
          return (
            <NumberFormat
              format={numberWithCommas}
              displayType="text"
              value={
                isNaN(props.state.data[idx].qty) ||
                isNaN(props.state.data[idx].price)
                  ? 0
                  : props.state.data[idx].qty * props.state.data[idx].price
              }
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
  } else if (props.formState === "surat") {
    columns = [
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
        width: "50%",
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
        dataIndex: "unit",
        editable: true,
        width: "10%",
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
  }

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
        formState: props.formState,
      }),
    };
  });

  const addItem = () => {
    const toBeReset = getFieldsOnTable(props.form.getFieldsValue());

    const newRow = {
      id: props.state.data.length + 1,
      count: props.state.data[props.state.data.length - 1].count + 1,
      code: "",
      name: "",
      discount: false,
      qty: 1,
      unit: "buah",
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
          console.log("form values are missing");
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

    // reset first row form values
    props.form.setFieldsValue({
      code0: "",
      name0: "",
      discount0: false,
      qty0: 1,
      price0: 0,
    });
  };

  const changePage = (page) => {
    const toBeReset = getFieldsOnTable(props.form.getFieldsValue());

    props.form
      .validateFields(toBeReset)
      .then((values) => {
        props.dispatch({ type: "CHANGE_PAGE", payload: page.current });
      })
      .catch((err) => {
        console.log("form values are missing");
      });
  };

  const isButtonHidden = () => {
    return (
      Math.ceil(props.state.data.length / props.state.pagination.pageSize) !==
        props.state.pagination.current && props.formState !== "kwitansi"
    );
  };

  return (
    <>
      <Row>
        <Col span="22" offset="1">
          <Table
            components={components}
            dataSource={props.state.data}
            columns={tableColumns}
            pagination={props.state.pagination}
            onChange={(pagination) => changePage(pagination)}
            rowKey="count"
            {...(props.formState === "faktur" && {
              footer: () => {
                return (
                  <div style={{ fontWeight: "bold" }}>
                    <Row>
                      <Col offset="15" span="3">
                        Subtotal
                      </Col>
                      <Col span="3" offset="3" style={{ textAlign: "end" }}>
                        <NumberFormat
                          displayType="text"
                          format={numberWithCommas}
                          value={
                            isNaN(props.state.buyerInfo.subtotal)
                              ? 0
                              : props.state.buyerInfo.subtotal
                          }
                        />
                      </Col>
                    </Row>
                    <Row align="middle">
                      <Col offset="15" span="3">
                        Discount
                      </Col>
                      <Col span="2">
                        <Form.Item
                          name="discount"
                          rules={[
                            {
                              required: true,
                              message: "Discount tidak boleh kosong",
                            },
                          ]}
                          initialValue={props.state.buyerInfo.discount}
                          style={{ marginBottom: 0, fontWeight: "normal" }}
                        >
                          <NumberFormat
                            suffix="%"
                            customInput={Input}
                            displayType="input"
                            allowNegative={false}
                            value={props.state.buyerInfo.discount}
                            style={{ textAlign: "end" }}
                            onValueChange={(values) => {
                              const { value } = values;
                              props.dispatch({
                                type: "UPDATE_FORM_INPUT_VALUE",
                                payload: {
                                  name: "discount",
                                  value: parseFloat(value),
                                },
                              });
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col span="3" offset="1" style={{ textAlign: "end" }}>
                        <NumberFormat
                          displayType="text"
                          format={numberWithCommas}
                          value={
                            isNaN(props.state.buyerInfo.totalDiscount)
                              ? 0
                              : props.state.buyerInfo.totalDiscount
                          }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col offset="15" span="3">
                        Grand Total
                      </Col>
                      <Col span="3" offset="3" style={{ textAlign: "end" }}>
                        <NumberFormat
                          displayType="text"
                          format={numberWithCommas}
                          value={
                            isNaN(props.state.buyerInfo.totalDiscount) ||
                            isNaN(props.state.buyerInfo.subtotal)
                              ? 0
                              : props.state.buyerInfo.subtotal -
                                props.state.buyerInfo.totalDiscount
                          }
                        />
                      </Col>
                    </Row>
                  </div>
                );
              },
            })}
          />
        </Col>
      </Row>
      <Row>
        <Col offset="1" span="5">
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
        <Col span="5">
          <Col>
            <Button
              type="default"
              size="large"
              htmlType="button"
              hidden={isButtonHidden()}
              onClick={addItem}
            >
              Tambah Barang Baru
            </Button>
          </Col>
        </Col>
        <Col offset="10" span="3">
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              hidden={isButtonHidden()}
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
