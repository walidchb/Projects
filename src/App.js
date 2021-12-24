// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Input, Button } from "antd";

function App() {
  const [foodName, setFoodName] = useState("");

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
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

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
    </div>
  );
}

export default App;
