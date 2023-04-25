import React, { useEffect, useState } from 'react'
import '../estilo/CandidatoContainer.css'
import FiltroCandidatos from './FiltroCandidatos'

const CandidatoContainer = (dadosCandidatos) => {

    const [dados, setDados] = useState([])
    const [filtro, setFiltro] = useState({
        altura: "",
        bairro: "",
        categoria_cnh: "",
        cnv_status: '',
        curso: "",
        nome: "",
        tipo: ""
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
    const lowercaseTipo = filtro.tipo.toLowerCase()

    console.log(filtro);


    const itensFiltrados =
        candidatos?.filter((item) => {
            return (
                item.nome.toLowerCase().includes(lowercaseNome) &&
                item.altura.toLowerCase().includes(lowercaseAltura) &&
                item.bairro.toLowerCase().includes(lowercaseBairro) &&
                item.cnh_categoria.toLowerCase().includes(lowercaseCNH) &&
                item.tipo.toLowerCase().includes(lowercaseTipo)
            )
        })



    return (
        <div className=''>
            <FiltroCandidatos callback={filtroData} />
            {/* {
                itensFiltrados.length == 0 && <h3 id='quantidade-de-itens' className='text-center mt-5 text-danger'>{` A busca não retornou nenhum resultado`}</h3>
            }
            {itensFiltrados.length > 0 &&
                <h3 id='quantidade-de-itens' className='text-center mt-5'>{` A busca retornou: ${itensFiltrados.length} resultado(s)`}</h3>
            } */}

            {
                itensFiltrados?.map((candidato, id) => {
                    return <>
                        < article key={id} className='container  mb-4 mt-5 border' >
                            <div className='row d-flex justify-content-center g-4'>
                                <div className='col-md-6 foto-candidato' style={{ overflow: 'hidden' }}>
                                    <img className='img-fluid' src={`http://localhost:3000/${candidato.nome}/${candidato.img_frente}`} alt='Imagem de um candidato' />
                                </div>
                                <div className='foto-candidato col-md-6' style={{ overflow: 'hidden' }}>
                                    <img className='img-fluid' src={`http://localhost:3000/${candidato.nome}/${candidato.img_perfil}`} height={'100%'} width={'100%'} alt='Imagem de um candidato' />
                                </div>
                            </div>
                            <section className=''>
                                <div className='text-center mb-4'>
                                    <h2> {candidato.nome.toUpperCase()}</h2>
                                </div>
                                <div className='container'>
                                    <div className='row d-flex  pt-4  pb-3 justify-content-center gap-1 container-atributos border'>
                                        <div className='col-md-5 '>
                                            <p>DATA DE NASCIMENTO: {candidato.data_nascimento.toUpperCase()}</p>
                                            <p>MÃE: {candidato.nome_da_mae.toUpperCase()}</p>
                                            <p>PAI: {candidato.nome_do_pai.toUpperCase()}</p>
                                            <p>ALTURA: {candidato.altura}</p>
                                            <p>PESO: {candidato.peso}</p>
                                            <p>CPF: {candidato.cpf_num}</p>
                                            <p>TIPO: {candidato.tipo.toUpperCase()}</p>
                                        </div>
                                        <div className='col-md-5 '>
                                            <p>CNV: {candidato.cnv_status.toUpperCase()}</p>
                                            <p>CETEGORIA CNH: {candidato.cnh_categoria.toUpperCase()}</p>
                                            <p>Endereço: {candidato.endereco.toUpperCase()}</p>
                                            <p>BAIRRO: {candidato.bairro.toUpperCase()}</p>
                                            <p>CIDADE: {candidato.cidade.toUpperCase()}</p>
                                            <p>CEP: {candidato.cep}</p>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center ">
                                        {candidato.curso.map((curso, id) =>
                                            <div className='col-lg-2 col-md-3' style={{ marin: 'auto' }}>
                                                <button type="button" class="btn btn-outline-secondary mb-5">
                                                    <h3>{curso.nome_curso}</h3>
                                                </button>
                                            </div>
                                        )}
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