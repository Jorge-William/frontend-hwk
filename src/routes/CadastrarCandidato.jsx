import React from "react";
import FormCandidato from "../components/FormCandidato";


const CadastrarCandidato = () => {
  return (
    <div className="container">
      <div className="flex-row justify-content-center text-center p-5 d-flex">
        <div className="col-4">
          <h1 className="sub-titulo ">Cadastro de Candidato</h1>
        </div>
      </div>

      <FormCandidato />
    </div>
  );
};

export default CadastrarCandidato;
