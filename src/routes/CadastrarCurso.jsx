import React from "react";
import FormCadastroCurso from "../components/FormCadastroCurso";

const CadastrarCurso = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <h1 className="sub-titulo mb-5">Cadastrar curso</h1>
      </div>
      <FormCadastroCurso />
    </div>
  );
};

export default CadastrarCurso;
