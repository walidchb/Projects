import React from "react";
import { Outlet } from "react-router-dom";

function Student() {
  function GoADD() {
    document.location.href = "/student/add";
  }

  function GoModify() {
    document.location.href = "/student/modify";
  }

  function GoDelete() {
    document.location.href = "/student/delete";
  }
  return (
    <div>
      <button type="" onClick={GoADD}>
        {" "}
        Add Student{" "}
      </button>
      <button type="" onClick={GoModify}>
        {" "}
        Modify Student{" "}
      </button>
      <button type="" onClick={GoDelete}>
        {" "}
        Delete Student{" "}
      </button>
      <Outlet />
    </div>
  );
}

export default Student;
