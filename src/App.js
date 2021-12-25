// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { render } from "@testing-library/react";
import axios from "axios";
import DemoColumn from "../src/Component/DemoColumn";

function App() {
  const [foodName, setFoodName] = useState("");
  const [foodData, setfoodData] = useState([]);

  const fetchVotes = () => {
    var data = "";

    var config = {
      method: "post",
      url: "http://localhost/get_foods",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setfoodData(response.data.votes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchVotes();
  }, []);

  const voteForFood = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      food_name: foodName,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost/vote_for_food", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        fetchVotes();
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  function displayData(posts) {
    return posts.map((post, index) => (
      <div className="displayData">
        <table></table>
        <h3>{post.food_name}</h3>
        <h3>{post.num_of_votes}</h3>
      </div>
    ));
  }

  return (
    <div className="App">
      <Input
        style={{ width: 200 }}
        placeholder="vote for your fav food"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />
      <Button type="primary" onClick={voteForFood}>
        {" "}
        Vote !{" "}
      </Button>

      {displayData(foodData)}

      <div className="statistic">
        <DemoColumn data={foodData} />
      </div>
    </div>
  );
}

export default App;
