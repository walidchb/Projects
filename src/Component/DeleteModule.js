import React, { useState } from "react";
import { Input, Button } from "antd";

function DeleteModule() {
  const [CodeModule, setCodeModule] = useState("");

  function Delete() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CodeModule: CodeModule,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost/Module/delete_module", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 400) alert("Module does nor exists !");
        else alert("Module deleted");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <Input
        style={{ width: 200 }}
        placeholder="Code Module"
        value={CodeModule}
        onChange={(e) => {
          setCodeModule(e.target.value);
        }}
      />

      <Button type="primary" onClick={Delete}>
        {" "}
        Delete Module{" "}
      </Button>
    </div>
  );
}

export default DeleteModule;
