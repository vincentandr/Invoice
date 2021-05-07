import { Modal, Table, Button, Input, Row, Col, Popconfirm } from "antd";
import { useState } from "react";
import numberWithCommas from "./util.js";

const ModalBarang = (props) => {
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
      childNode = (
        <Input
          defaultValue={
            dataIndex === "price"
              ? numberWithCommas(props.state.data[index][dataIndex])
              : props.state.data[index][dataIndex]
          }
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
      );
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
      dataIndex: "code",
      width: "15%",
      editable: true,
    },
    {
      title: "Nama Barang",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      width: "8%",
      editable: true,
    },
    {
      title: "Harga (Rp.)",
      dataIndex: "price",
      width: "13%",
      editable: true,
    },
    {
      title: "Total (Rp.)",
      dataIndex: "total",
      width: "14%",
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
          <Button
            type="default"
            danger="true"
            onClick={() => removeItem(record.key)}
          >
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
    const newRow = {
      key: props.state.count + 1,
      code: "",
      name: "",
      desc: "",
      qty: 0,
      price: 0,
      total: 0,
    };

    props.dispatch({ type: "ADD_ITEM", payload: newRow });
  };

  const removeItem = (key) => {
    props.dispatch({ type: "REMOVE_ITEM", payload: key });
  };

  const removeAll = () => {
    props.dispatch({ type: "REMOVE_ALL" });
  };

  const changePage = (page) => {
    props.dispatch({ type: "CHANGE_PAGE", payload: page.current });
  };

  return (
    <Modal
      title="Daftar Barang"
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
      maskClosable={false}
      width="75rem"
    >
      <Table
        components={components}
        dataSource={props.state.data}
        columns={tableColumns}
        pagination={props.state.pagination}
        onChange={(pagination) => changePage(pagination)}
      />
      <Row justify="center">
        <Col span="4">
          <Button
            type="primary"
            size="large"
            htmlType="button"
            onClick={addItem}
          >
            Tambah Barang Baru
          </Button>
        </Col>
        <Col span="4">
          <Popconfirm
            title="Yakin ingin hapus semua barang?"
            onConfirm={removeAll}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" size="large" htmlType="button">
              Hapus Semua Barang
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalBarang;
