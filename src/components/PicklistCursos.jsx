import React, { useState } from "react";
import { v4 as uuidv4, v3, v4 } from "uuid";

const uuid = uuidv4()

const PicklistCursos = ({ options, numeroDeCursos, callback }) => {

  const cursos = [];

  for (let index = 0; index < numeroDeCursos; index++) {
    cursos.push(
      <div key={index + 1}>
        <div className="d-flex gx-5 flex-row justify-content-center text-center">
          <div className="col-8 p-2 d-flex">
            <select className="form-select" aria-label="Default select example" onChange={callback}>
              <option defaultValue={"default"} key={index} value={'Padrão'}>
                Selecione o curso
              </option>
              {options.map((curso) => {
                return (
                  <option key={curso.id} value={curso.id}>
                    {curso.nome_curso}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="sub-titulo mt-5 text-center">Cursos</h1>
      {cursos}
    </div>
  );
};

export default PicklistCursos;
