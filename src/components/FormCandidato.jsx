import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import FormData from "form-data";
import PicklistCursos from './PicklistCursos'
import salvarCandidato from "../services/salvarCandidato";
import MaskedInput from "react-text-mask";

const formNames = {
	nome: "",
	cpf_num: "",
	data_nascimento: "",
	nome_da_mae: "",
	nome_do_pai: "",
	cnh_categoria: "",
	telefone: "",
	peso: "",
	altura: "",
	endereco: "",
	bairro: "",
	cep: "",
	cnv_status: "false",
	frente: null,
	perfil: null

}
const uuid = uuidv4();

const FormCandidato = () => {
	const [data, setData] = useState([]);
	const [numeroDeCursos, setNumeroDeCursos] = useState({ quantidade: 0 });
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

	const resetState = () => {
		setFormData(formNames)
		setCursosCandidatos([])
		setNumeroDeCursos({ quantidade: 0 })
	}

	const fileHandlerFrente = (event) => {
		const { name, files } = event.target
		setFormData({
			...formData, [name]: files[0]
		})
	}

	const fileHandlerPerfil = (event) => {
		const { name, files } = event.target
		setFormData({
			...formData, [name]: files[0]
		})
		console.log(event.target)
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((formData) => ({ ...formData, [name]: value }));
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
							value={formData.nome}
							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							CPF
						</label>
						<br />
						<MaskedInput
							mask={[/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
							className="form-control"
							name="cpf_num"
							type="text"
							value={formData.cpf_num}

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
							value={formData.cnh_categoria.toUpperCase()}

							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Nascimento
						</label>
						<br />
						<MaskedInput
							mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
							className="form-control"
							type="text"
							name="data_nascimento"
							value={formData.data_nascimento}
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
							value={formData.nome_da_mae}

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
							value={formData.nome_do_pai}

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
							value={formData.endereco}

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
							value={formData.bairro}

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
							value={formData.cidade}

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
						<MaskedInput
							mask={[/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
							className="form-control"
							name="cep"
							type="text"
							value={formData.cep}

							onChange={handleChange}
						/>
					</div>
					<div className="col-2 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Telefone
						</label>
						<br />
						<MaskedInput
							mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
							className="form-control"
							type="text"
							name="telefone"
							value={formData.telefone}

							onChange={handleChange}
						/>
					</div>
					<div className="col-1 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Peso
						</label>
						<br />
						<MaskedInput
							mask={[/\d/, /\d/, '.', /\d/]}
							className="form-control"
							name="peso"
							type="text"
							value={formData.peso}

							onChange={handleChange}
						/>
					</div>
					<div className="col-1 p-2">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Altura
						</label>
						<br />
						<MaskedInput
							mask={[/\d/, ',', /\d/, /\d/]}
							className="form-control"
							type="text"
							name="altura"
							value={formData.altura}

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
									name="cnv_status"
									id="flexRadioDefault1"
									onChange={handleChange}

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
									// checked={radioValue === 'true'}
									name="cnv_status"
									id="flexRadioDefault2"
									onChange={handleChange}
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
						<div className="col-3   text-start p-2">
							<label htmlFor="foto-frente" className="form-label">
								Frente
							</label>
							<input type="file" id="foto-frente" className="form-control" name='frente' onChange={fileHandlerFrente} />
						</div>
						<div className="col-3   text-start p-2">
							<label htmlFor="foto-frente" className="form-label">
								Perfil
							</label>
							<input type="file" id="foto-frente" className="form-control" name='perfil' onChange={fileHandlerPerfil} />
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
					<button className="btn-principal btn-success m-2" onClick={() => salvarCandidato(formData, cursosCandidato, resetState)}>
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
