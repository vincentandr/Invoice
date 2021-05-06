import { Modal, Table, Button, Input, InputNumber } from "antd";

const ModalBarang = (props) => {
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
      render: (_, record, index) => {
        return <Input value={props.state.data[index].code}/>;
      },
    },
    {
      title: "Nama Barang",
      dataIndex: "name",
      width: "40%",
      editable: true,
      render: (_, record, index) => {
        return (
          <Input
            value={props.state.data[index].name}
          />
        );
      },
    },
    {
      title: "Qty",
      dataIndex: "qty",
      width: "8%",
      editable: true,
      render: (text, record, index) => {
        return (
          <InputNumber
            value={props.state.data[index].qty}
            onChange={() =>
              calculateTotalPerItem(record, props.state.data[index].qty)
            }
          />
        );
      },
    },
    {
      title: "Harga",
      dataIndex: "price",
      editable: true,
      render: (text, record, index) => {
        return (
          <InputNumber
            value={props.state.data[index].price}
            onChange={() =>
              calculateTotalPerItem(record, props.state.data[index].price)
            }
          />
        );
      },
    },
    {
      title: "Total",
      dataIndex: "total",
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

    props.dispatch({    type:    "ADD_ITEM", payload:    newRow    });
  };

  const removeItem = (key) => {
    props.dispatch({    type:    "REMOVE_ITEM", payload:    key    });
  };

  const calculateTotalPerItem = (record, val) => {
    console.log(record);
    console.log(val);

    props.dispatch({     type:     "CALCULATE_TOTAL", payload:     record     });
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
        dataSource={props.state.data}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
      <Button type="primary" htmlType="button" onClick={addItem}>
        Tambah Barang
      </Button>
    </Modal>
  );
};

export default ModalBarang;
