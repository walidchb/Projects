// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import Student from "./Component/Student";
import Module from "./Component/Module";
import AddStudent from "./Component/AddStudent";
import ModifyStudent from "./Component/ModifyStudent";
import DeleteStudent from "./Component/DeleteStudent";
import AddModule from "./Component/AddModule";
import ModifyModule from "./Component/ModifyModule";
import DeleteModule from "./Component/DeleteModule";
import Note from "./Component/Note";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<Student />}>
          <Route
            path="/student/add"
            element={<AddStudent className="FormDiv" />}
          />
          <Route
            path="/student/modify"
            element={<ModifyStudent className="FormDiv" />}
          />
          <Route
            path="/student/delete"
            element={<DeleteStudent className="FormDiv" />}
          />
        </Route>
        <Route path="/module" element={<Module />}>
          <Route
            path="/module/add"
            element={<AddModule className="FormDiv" />}
          />
          <Route
            path="/module/modify"
            element={<ModifyModule className="FormDiv" />}
          />
          <Route
            path="/module/delete"
            element={<DeleteModule className="FormDiv" />}
          />
        </Route>
        <Route path="/notes" element={<Note />} />
      </Routes>
    </div>
  );
}

export default App;
