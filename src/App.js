// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import AddStudent from "./Component/AddStudent";
import ModifyStudent from "./Component/ModifyStudent";
import DeleteStudent from "./Component/DeleteStudent";

function App() {
  return (
    <div className="App">
      <AddStudent className="FormDiv" />
      <br />
      <ModifyStudent className="FormDiv" />
      <br />
      <DeleteStudent className="FormDiv" />
    </div>
  );
}

export default App;
