import React, { useState } from "react";
import { Input, Button } from "antd";
import DisplayNotes from "./DisplayNotes";
import "./Display.css";
import axios from "axios";

function Note() {
  const [CodeModule, setCodeModule] = useState("");
  const [Note, setNote] = useState("");
  const [Matricule, setMatricule] = useState("");

  function NextModule(e) {
    setCodeModule("");
    setNote("");
    setMatricule("");
  }

  function NextSuivant(e) {
    setNote("");
    setMatricule("");
  }

  function AddNote() {
    var data = JSON.stringify({
      CodeModule: CodeModule,
      Matricule: Matricule,
      Note: Note,
    });

    var config = {
      method: "post",
      url: "http://localhost/Note/add_note",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log({ response });
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        switch (error.response.data.Error_code) {
          case 1:
            alert("Module dsnt exst");
            break;
          case 2:
            alert("STD dsnt exst");

            break;
        }
        console.log({ error });
      });
  }
  return (
    <div className="notepage">
      <h1 className="Note">Notes</h1>
      <div className="Display">
        <div className="ADD">
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
            placeholder="Note"
            value={Note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          <br />
          <br />
          <Button type="primary" onClick={AddNote}>
            {" "}
            Add Note{" "}
          </Button>
          <br />
          <br />
          <Button type="primary" onClick={NextSuivant}>
            {" "}
            Next Student{" "}
          </Button>
          <br />
          <br />
          <Button type="primary" onClick={NextModule}>
            {" "}
            Next Module{" "}
          </Button>
        </div>
        <div className="DisplayNote">
          <DisplayNotes />
        </div>
      </div>
    </div>
  );
}

export default Note;
