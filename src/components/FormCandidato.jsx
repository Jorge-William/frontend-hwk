import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import FormData from "form-data";
import PicklistCursos from './PicklistCursos'
import salvarCandidato from "../services/salvarCandidato";

const formNames = {
	nome: "",
	cpf_num: "",
	data_nascimento: "",
	nome_da_mae: "",
	nome_do_pai: "",
	cnh_categoria: "",
	cnv_status: false,
	telefone: "",
	peso: "",
	altura: "",
	endereco: "",
	bairro: "",
	cep: "",
}
const uuid = uuidv4();

const FormCandidato = () => {
	const [radioValue, setRadioValue] = useState('false');
	const [imagens, setImagens] = useState([])
	const [numeroDeCursos, setNumeroDeCursos] = useState({ quantidade: 0 });
	const [data, setData] = useState([]);
	const [cursosCandidato, setCursosCandidatos] = useState([])
	const [formData, setFormData] = useState(formNames);

	useEffect(() => {
		const fetchCursos = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/todos-cursos"
				);
				// console.log(response.data.result);

				setData(response.data.result);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCursos();
	}, []);

	const handleRadioChange = (event) => {
		setRadioValue(event.target.value);
	}

	const picklistCallback = (event) => {
		const { value } = event.target
		setCursosCandidatos([...cursosCandidato, value])
	}

	const adicionaCurso = () => {
		numeroDeCursos.quantidade < data.length &&
			setNumeroDeCursos((prevState) => ({
				...prevState,
				quantidade: prevState.quantidade + 1,
			}));
	};

	const removeCurso = () => {
		// Evita que o numero diminua até ficar negativo
		numeroDeCursos.quantidade > 0 &&
			setNumeroDeCursos((prevState) => ({
				...prevState,
				quantidade: prevState.quantidade - 1,
			}));
		setCursosCandidatos(cursosCandidato.slice(0, -1))


	};

	const fileHandler = (event) => {
		setImagens(event.target.files)
	}

	const handleChange = (event) => {
		const name = event.target.name
		setFormData((formData) => ({ ...formData, [name]: event.target.value }));
	};

	return (
		<>
			<div className="container">
				<div className="d-flex gx-5 flex-row justify-content-center text-start">
					<div className="col-3 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Nome
						</label>
						<br />
						<input
							className="form-control"
							name="nome"
							type="text"
							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							CPF
						</label>
						<br />
						<input
							className="form-control"
							name="cpf_num"
							type="text"
							onChange={handleChange}
						/>
					</div>
					<div className="col-1 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							CNH
						</label>
						<br />
						<input
							className="form-control"
							name="cnh_categoria"
							type="text"
							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Nascimento
						</label>
						<br />
						<input
							className="form-control"
							type="date"
							name="data_nascimento"
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
			{/* ------------------------------------ Segunda Linha --------------------- */}
			<div className="container">
				<div className="d-flex gx-5 flex-row justify-content-center text-start">
					<div className="col-4 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Nome da mãe
						</label>
						<br />
						<input
							className="form-control"
							name="nome_da_mae"
							type="text"
							onChange={handleChange}
						/>
					</div>
					<div className="col-4 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Nome do Pai
						</label>
						<br />
						<input
							className="form-control"
							name="nome_do_pai"
							type="text"
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
			{/* ------------------------------------ Terceira Linha --------------------- */}
			<div className="container">
				<div className="d-flex gx-5 flex-row justify-content-center text-start">
					<div className="col-4 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Endereço
						</label>
						<br />
						<input
							className="form-control"
							name="endereco"
							type="text"
							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Bairro
						</label>
						<br />
						<input
							className="form-control"
							name="bairro"
							type="text"
							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Cidade
						</label>
						<br />
						<input
							className="form-control"
							name="cidade"
							type="text"
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>

			{/* ------------------------------------ Quarta Linha --------------------- */}
			<div className="container">
				<div className="d-flex gx-5 flex-row justify-content-center text-start">
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							CEP
						</label>
						<br />
						<input
							className="form-control"
							name="cep"
							type="text"
							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Telefone
						</label>
						<br />
						<input
							className="form-control"
							type="text"
							name="telefone"
							onChange={handleChange}
						/>
					</div>
					<div className="col-1 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Peso
						</label>
						<br />
						<input
							className="form-control"
							name="peso"
							type="number"
							onChange={handleChange}
						/>
					</div>
					<div className="col-1 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Altura
						</label>
						<br />
						<input
							className="form-control"
							type="number"
							name="altura"
							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2 ">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							CNV
						</label>
						<br />
						<div className="d-flex">
							<div className="form-check m-2">
								<input
									className="form-check-input"
									type="radio"
									value='false'
									checked={radioValue === 'false'}
									name="cnv_status"
									id="flexRadioDefault1"
									onChange={handleRadioChange}

								/>
								<label className="form-check-label" htmlFor="flexRadioDefault1">
									Não
								</label>
							</div>
							<div className="form-check m-2">
								<input
									className="form-check-input"
									type="radio"
									value='true'
									checked={radioValue === 'true'}
									name="cnv_status"
									id="flexRadioDefault2"
									onChange={handleRadioChange}
								// defaultChecked
								/>
								<label className="form-check-label" htmlFor="flexRadioDefault2">
									Sim
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* ------------------------------------ Quarta Linha --------------------- */}

				<div className="text-center mt-5">
					<h1 className="sub-titulo">Fotos</h1>
				</div>
				<div className="mb-2 container">
					<div className="d-flex  flex-row justify-content-center  mt-5">
						<div className="col-6   text-start p-2">
							<label htmlFor="foto-frente" className="form-label">
								Upload das imagens
							</label>
							<input type="file" id="foto-frente" multiple className="form-control" onChange={fileHandler} />
						</div>
					</div>
				</div>

				{/* ------------------------------------ Quinta Linha --------------------- */}

				{numeroDeCursos.quantidade !== 0 ? (
					<PicklistCursos
						options={data}
						numeroDeCursos={numeroDeCursos.quantidade}
						key={uuid}
						callback={picklistCallback}
					/>
				) : (
					<div className="">
						<div className="d-flex gx-5 flex-row justify-content-center text-start mt-5">
							<div className="col-8  text-center">
								<p>
									O candidato não possui cursos cadastrados. Para adicionar, use
									o botão abaixo.
								</p>
							</div>
						</div>
					</div>
				)}
				<div className="container">
					<div className="d-flex gx-5 flex-row justify-content-center text-start">
						{data.length !== numeroDeCursos.quantidade && (
							<div className="col-2  text-center">
								<button type="button" className="btn" onClick={adicionaCurso}>
									<i
										style={{ color: "#3A97A5", fontSize: "30px" }}
										className="bi bi-plus-square"
									></i>
									<p>Adicionar um curso</p>
								</button>
							</div>
						)}
						{/* Se não ouver cursos o botão de exclusão não será renderizado */}
						{numeroDeCursos.quantidade !== 0 && (
							<div className="col-2 text-center">
								<button type="button" className="btn" onClick={removeCurso}>
									<i
										style={{ color: "#A53A3A", fontSize: "30px" }}
										className="bi bi-dash-square"
									></i>
									<p>Remover um curso</p>
								</button>
							</div>
						)}
					</div>
				</div>

				<div className="flex-row mt-3 mb-5 d-flex justify-content-center">
					<button className="btn-principal btn-success m-2" onClick={() => salvarCandidato(formData, cursosCandidato, imagens)}>
						<i style={{ color: "white" }} className="bi bi-search"></i>
						Salvar
					</button>
				</div>
			</div>
			<footer></footer>
		</>
	);
};

export default FormCandidato;
