import React, { useState } from "react";
import { Input, Button } from "antd";

function DeleteStudent() {
  const [Matricule, setMatricule] = useState("");

  function Delete() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Matricule: Matricule,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost/student/delete_student", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 400) alert("Student does nor exists !");
        else alert("student deleted");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <Input
        style={{ width: 200 }}
        placeholder="Matricule"
        value={Matricule}
        onChange={(e) => {
          setMatricule(e.target.value);
        }}
      />

      <Button type="primary" onClick={Delete}>
        {" "}
        Delete Student{" "}
      </Button>
    </div>
  );
}

export default DeleteStudent;
