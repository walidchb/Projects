import React from "react";
import { useHref } from "react-router-dom";

function HomePage() {
  function GoStudent() {
    document.location.href = "/student";
  }
  function GoModule() {
    document.location.href = "/module";
  }
  function GoNote() {
    document.location.href = "/notes";
  }
  return (
    <div>
      <button type="" onClick={GoStudent}>
        {" "}
        Student{" "}
      </button>
      <button type="" onClick={GoModule}>
        {" "}
        Module{" "}
      </button>
      <button type="" onClick={GoNote}>
        {" "}
        Notes{" "}
      </button>
    </div>
  );
}

export default HomePage;
