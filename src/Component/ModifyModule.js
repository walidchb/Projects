import React, { useState } from "react";
import { Input, Button } from "antd";

function ModifyModule() {
  const [CodeModule, setCodeModule] = useState("");
  const [LibelleM, setLibelle] = useState("");
  const [Coef, setCoef] = useState("");
  const [CodeEnseignant, setCodeEnseignant] = useState("");

  function Modify() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CodeModule: CodeModule,
      LibelleM: LibelleM,
      Coef: Coef,
      CodeEnseignant: CodeEnseignant,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost/Module/modify_module", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 400) alert("Module does nor exists !");
        else alert("infos modified");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <Input
        style={{ width: 200 }}
        placeholder="CodeModule"
        value={CodeModule}
        onChange={(e) => {
          setCodeModule(e.target.value);
        }}
      />

      <Input
        style={{ width: 200 }}
        placeholder="Libelle Module"
        value={LibelleM}
        onChange={(e) => {
          setLibelle(e.target.value);
        }}
      />

      <Input
        style={{ width: 200 }}
        placeholder="Coef"
        value={Coef}
        onChange={(e) => {
          setCoef(e.target.value);
        }}
      />

      <Input
        style={{ width: 200 }}
        placeholder="CodeEnseignant"
        value={CodeEnseignant}
        onChange={(e) => {
          setCodeEnseignant(e.target.value);
        }}
      />

      <Button type="primary" onClick={Modify}>
        {" "}
        Modify Module{" "}
      </Button>
    </div>
  );
}

export default ModifyModule;
