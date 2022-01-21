import React, { useState } from "react";
import { Input, Button } from "antd";

function ModifyStudent() {
  const [Matricule, setMatricule] = useState("");
  const [First_Name, setFirstName] = useState("");
  const [Last_Name, setLastName] = useState("");
  const [Section, setSection] = useState("");
  const [Groupe, setGroupe] = useState("");

  function Modify() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Matricule: Matricule,
      First_Name: First_Name,
      Last_Name: Last_Name,
      Section: Section,
      Groupe: Groupe,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost/student/modify_student", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 400) alert("Student does nor exists !");
        else alert("infos modified");
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

      <Input
        style={{ width: 200 }}
        placeholder="First Name"
        value={First_Name}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <Input
        style={{ width: 200 }}
        placeholder="Last Name"
        value={Last_Name}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <Input
        style={{ width: 200 }}
        placeholder="Section"
        value={Section}
        onChange={(e) => {
          setSection(e.target.value);
        }}
      />

      <Input
        style={{ width: 200 }}
        placeholder="Groupe"
        value={Groupe}
        onChange={(e) => {
          setGroupe(e.target.value);
        }}
      />
      <Button type="primary" onClick={Modify}>
        {" "}
        Modify Student{" "}
      </Button>
    </div>
  );
}

export default ModifyStudent;