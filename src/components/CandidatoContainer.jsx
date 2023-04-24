import React, { useEffect, useState } from 'react'
import '../estilo/CandidatoContainer.css'
import FiltroCandidatos from './FiltroCandidatos'

const CandidatoContainer = (dadosCandidatos) => {

    const [dados, setDados] = useState([])
    const [filtro, setFiltro] = useState({
        altura: "",
        bairro: "",
        categoria_cnh: "",
        cnv_status: false,
        curso: "",
        nome: ""
    })


    useEffect(() => {
        setDados(dadosCandidatos)
    }, [])

    const filtroData = (data) => {
        setFiltro(data);
    }

    const candidatos = Object.entries(dadosCandidatos)[0][1];

    const lowercaseNome = filtro.nome.toLowerCase()
    const lowercaseAltura = filtro.altura.toLowerCase()
    const lowercaseBairro = filtro.bairro.toLowerCase()
    const lowercaseCNH = filtro.categoria_cnh.toLowerCase()

    console.log(filtro);

    const itensFiltrados = candidatos?.filter((item) => {
        return (
            item.nome.toLowerCase().includes(lowercaseNome) &&
            item.altura.toLowerCase().includes(lowercaseAltura) &&
            item.bairro.toLowerCase().includes(lowercaseBairro) &&
            item.cnh_categoria.toLowerCase().includes(lowercaseCNH)
        )
    })


    return (
        <div>
            <FiltroCandidatos callback={filtroData} />
            {
                itensFiltrados?.map((candidato, key) => {
                    return <>

                        < article key={key} className='container  m-3'>
                            <div className='row d-flex justify-content-evenly'>
                                <div className='col-md-6  foto-candidato '>
                                </div>
                                <div className='foto-candidato foto-candidato'>
                                </div>
                            </div>
                            <section>
                                <div className='row d-flex justify-content-center gap-1'>
                                    <div className='col-md-5 border p-5'>
                                        <p>Nome: {candidato.nome}</p>
                                        <p>Data de nascimento: {candidato.data_nascimento}</p>
                                        <p>Mãe: {candidato.nome_da_mae}</p>
                                        <p>Pai: {candidato.nome_do_pai}</p>
                                        <p>Altura: {candidato.altura}</p>
                                        <p>Peso: {candidato.peso}</p>
                                        <p>CPF: {candidato.cpf_num}</p>
                                    </div>
                                    <div className='col-md-5 border p-5'>
                                        <p>CNV: {candidato.cnv_status}</p>
                                        <p>Categoria CNH: {candidato.cnh_categoria}</p>
                                        <p>Endereço: {candidato.endereco}</p>
                                        <p>Bairro: {candidato.bairro}</p>
                                        <p>Cidade: {candidato.cidade}</p>
                                        <p>CEP: {candidato.cep}</p>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </>
                })
            }
        </div >
    )
}

export default CandidatoContainer