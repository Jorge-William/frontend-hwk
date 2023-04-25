import React, { useEffect, useState } from 'react'
import FiltroCandidatos from '../components/FiltroCandidatos'
import CandidatoContainer from '../components/CandidatoContainer'
import axios from 'axios'

const FiltroCandidatosPage = () => {

    const [candidatos, setCandidatos] = useState(null)
    console.log(candidatos);
    useEffect(() => {
        const fetchCandidatos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/candidatos')

                setCandidatos(response.data)
            } catch (error) {
                throw new Error(error)
            }
        }
        fetchCandidatos()
    }, [])


    return (
        <section>
            <div className="d-flex flex-row justify-content-center">
                <h1 className="sub-titulo mb-5">Filtro Candidato</h1>
            </div>


            <CandidatoContainer dadosCandidato={candidatos} />

        </section>
    )
}

export default FiltroCandidatosPage