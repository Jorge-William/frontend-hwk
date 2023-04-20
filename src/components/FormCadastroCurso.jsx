import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormCadastroCurso = () => {
  const [formData, setFormData] = useState({ nome: "", descricao: "" });

  const handleNameChange = (event) => {
    setFormData((formData) => ({ ...formData, nome: event.target.value }));
  };

  const handleDescricaoChange = (event) => {
    setFormData((formData) => ({ ...formData, descricao: event.target.value }));
  };
  console.log(formData);

  const clearState = () => {
    setFormData({ nome: "", descricao: "" })
  }

  const handleClick = () => {
    Swal.fire({
      title: "Atenção",
      icon: "question",
      text: "Deseja salvar o curso?",
      showCancelButton: true,
      confirmButtonText: "Sim salvar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return axios
          .post("http://localhost:3000/inserir-curso", {
            nome_curso: formData.nome,
            descricao_curso: formData.descricao,
          })
          .then((response) => {
            if (!response.data) {
              throw new Error(response.statusText);
            }
            clearState()
            return response.data;
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Tudo certo!!",
          icon: "success",
          text: "Curso foi salvo com sucesso!!",
        });
      }
    });
  };

  return (
    <div className="container-fluid" id="container-form-cursos">
      <div>
        <div className="d-flex gx-5 flex-row justify-content-center text-start">
          <div className="col-12">
            <label htmlFor="nome-curso" className="form-label">
              Nome do curso
            </label>
            <input
              onChange={handleNameChange}
              type="text"
              name="nome"
              value={formData.nome}
              className="form-control"
              id="nome-curso"
              placeholder="Ex: Primeiros socorros"
            />
            <br />
            <label htmlFor="nome-curso" className="form-label">
              Descrição do curso
            </label>
            <textarea
              onChange={handleDescricaoChange}
              value={formData.descricao}
              name="descricao"
              cols={30}
              rows={10}
              className="form-control"
              id="descricao-curso"
            ></textarea>
          </div>
        </div>
        <div className="d-flex gx-5 flex-row justify-content-end text-start">
          <button
            className="btn-principal btn-success m-2"
            onClick={() => handleClick()}
          >
            <i
              className="bi bi-cloud-download-fill"
              style={{ color: "white", height: "12px", marginRight: "10px" }}
            ></i>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormCadastroCurso;
