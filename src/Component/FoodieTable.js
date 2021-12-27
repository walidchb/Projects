import React from "react";
import { Table } from "antd";
import moment from "moment";

function FoodieTable(props) {
  const dataSource = props.data;
  //   [
  //     {
  //       key: "1",
  //       name: "Mike",
  //       age: 32,
  //       address: "10 Downing Street",
  //     },
  //     {
  //       key: "2",
  //       name: "John",
  //       age: 42,
  //       address: "10 Downing Street",
  //     },
  //   ];

  const columns = [
    {
      title: "food_name",
      dataIndex: "food_name",
      key: "food_name",
    },
    {
      title: "num_of_votes",
      dataIndex: "num_of_votes",
      key: "num_of_votes",
    },
    {
      title: "Last vote",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (updatedAt) => {
        return moment(updatedAt).calendar();
      },
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default FoodieTable;
