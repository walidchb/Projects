import React from "react";
import { Pie } from "@ant-design/charts";

const config = {
  appendPadding: 10,
  angleField: "num_of_votes",
  colorField: "food_name",
  radius: 0.9,
  label: {
    type: "inner",
    offset: "-30%",
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: "center",
    },
  },
  interactions: [
    {
      type: "element-active",
    },
  ],
};
const DemoPie = (props) => {
  const data = props.data;
  //    [
  //     {
  //       type: "分类一",
  //       value: 27,
  //     },
  //     {
  //       type: "分类二",
  //       value: 25,
  //     },
  //     {
  //       type: "分类三",
  //       value: 18,
  //     },
  //     {
  //       type: "分类四",
  //       value: 15,
  //     },
  //     {
  //       type: "分类五",
  //       value: 10,
  //     },
  //     {
  //       type: "其他",
  //       value: 5,
  //     },
  //   ];

  return <Pie {...config} data={data} />;
};

export default DemoPie;

// ReactDOM.render(<DemoPie />, document.getElementById("container"));
