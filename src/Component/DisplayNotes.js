import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import axios from "axios";

function DisplayNotes() {
  const [noteData, setnoteData] = useState([]);

  const [CodeModule, setCodeModule] = useState("");
  const [Matricule, setMatricule] = useState("");

  function click() {
    var axios = require("axios");
    var data = JSON.stringify({
      CodeModule: CodeModule,
      Matricule: Matricule,
    });

    var config = {
      method: "post",
      url: "http://localhost/Note/get_notes",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setnoteData(response.data.notes);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function TableNote(post) {
    return post.map((e) => (
      <tr>
        <th>{e.student_id.Matricule}</th>
        <th>{e.student_id.First_Name}</th>
        <th>{e.student_id.Last_Name}</th>
        <th>{e.Note}</th>
      </tr>
    ));
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
      <br />
      <br />
      <Input
        style={{ width: 200 }}
        placeholder="CodeModule"
        value={CodeModule}
        onChange={(e) => {
          setCodeModule(e.target.value);
        }}
      />
      <br />
      <br />
      <Button type="primary" onClick={click}>
        {" "}
        Display Notes{" "}
      </Button>
      <table>
        <tr>
          <th>Matricule</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Note</th>
        </tr>
        {TableNote(noteData)}
      </table>
    </div>
  );
}

export default DisplayNotes;
