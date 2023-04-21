import React, { useState } from 'react'

const FiltroCandidatos = () => {
    const inputNames = {
        nome: '',
        bairro: '',
        altura: '',
        categoria_cnh: '',
        cnv_status: false,
        curso: null
    }


    const [dadosFiltro, setDadosFiltro] = useState(inputNames)

    const handleChange = (event) => {
        const { value, name } = event.target

        setDadosFiltro({ ...dadosFiltro, [name]: value })

    }


    return (
        <div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-3 col-md-6 mt-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Nome
                        </label>
                        <br />
                        <input
                            className="form-control"
                            name="nome"
                            type="text"
                            value={dadosFiltro.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-lg-2 col-md-3 mt-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Bairro
                        </label>
                        <br />
                        <input
                            className="form-control"
                            name="bairro"
                            type="text"
                            value={dadosFiltro.bairro}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-lg-1 col-md-2 mt-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Altura
                        </label>
                        <br />
                        <input
                            className="form-control"
                            name="altura"
                            type="text"
                            value={dadosFiltro.altura}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-lg-1 col-md-2 mt-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            CNH
                        </label>
                        <br />
                        <input
                            className="form-control"
                            name="categoria_cnh"
                            type="text"
                            value={dadosFiltro.cnh}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-lg-2 col-md-2 mt-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            CNV
                        </label>
                        <br />
                        <select className="form-select" name="cnv_status" aria-label="Default select example" onChange={handleChange}>
                            <option defaultValue={false}>Não</option>
                            <option value={true}>Sim</option>
                        </select>
                    </div>
                    <div className='col-lg-2 col-md-2 mt-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Curso
                        </label>
                        <br />
                        <select className="form-select" name="curso" aria-label="Default select example" onChange={handleChange}>
                            <option defaultValue={false} value={false}>Não</option>
                            <option value={true}>Sim</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltroCandidatos