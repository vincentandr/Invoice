import { Modal, Table, Button, Input, InputNumber } from "antd";
import { useState } from "react";

const ModalBarang = (props) => {
  const dataSource = [
    {
      key: 1,
      code: "A123",
      name: "Barang 1",
      qty: 30,
      price: 10000,
      total: 30 * 10000,
    },
    {
      key: 2,
      code: "B123",
      name: "Barang 2",
      qty: 10,
      price: 20000,
      total: 10 * 20000,
    },
  ];

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
      render: (text, _) => {
        return <Input defaultValue={text} />;
      },
    },
    {
      title: "Nama Barang",
      dataIndex: "name",
      width: "40%",
      render: (text, _) => {
        return <Input defaultValue={text} />;
      },
    },
    {
      title: "Qty",
      dataIndex: "qty",
      width: "8%",
      render: (text, record, index) => {
        return (
          <InputNumber
            value={data[index].qty}
            onChange={() =>
              calculateTotalPerItem(text, record, data[index].qty)
            }
          />
        );
      },
    },
    {
      title: "Harga",
      dataIndex: "price",
      render: (text, record, index) => {
        return (
          <InputNumber
            value={data[index].price}
            onChange={() =>
              calculateTotalPerItem(text, record, data[index].price)
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
        data.length > 1 ? (
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

  const [data, setData] = useState(dataSource);
  const [count, setCount] = useState(2);

  const addItem = () => {
    const newRow = {
      key: count + 1,
      code: "",
      name: "",
      desc: "",
      qty: 0,
      price: 0,
      total: 0,
    };

    const newData = [...data, newRow];

    setData(newData);
    setCount((prevState) => prevState + 1);
  };

  const removeItem = (key) => {
    const newItems = data.filter((item) => item.key !== key);

    setData(newItems);
  };

  const calculateTotalPerItem = (text, record, val) => {
    console.log(record);
    console.log(text);

    console.log(val);

    const items = [...data];

    const item = { ...items[record.key - 1] };

    item.total = item.qty * item.price;

    items[record.key - 1] = item;

    setData(items);
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
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
      <Button type="primary" htmlType="button" onClick={addItem}>
        Tambah Barang
      </Button>
    </Modal>
  );
};

export default ModalBarang;
