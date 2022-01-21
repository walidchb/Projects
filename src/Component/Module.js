import React from "react";
import { Outlet } from "react-router-dom";

function Module() {
  function GoADD() {
    document.location.href = "/module/add";
  }

  function GoModify() {
    document.location.href = "/module/modify";
  }

  function GoDelete() {
    document.location.href = "/module/delete";
  }
  return (
    <div>
      <button type="" onClick={GoADD}>
        {" "}
        Add Module{" "}
      </button>
      <button type="" onClick={GoModify}>
        {" "}
        Modify Module{" "}
      </button>
      <button type="" onClick={GoDelete}>
        {" "}
        Delete Module{" "}
      </button>
      <Outlet />
    </div>
  );
}

export default Module;
