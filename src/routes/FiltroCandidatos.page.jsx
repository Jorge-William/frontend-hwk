import React from 'react'
import FiltroCandidatos from '../components/FiltroCandidatos'

const FiltroCandidatosPage = () => {
    return (
        <section>
            <div className="d-flex flex-row justify-content-center">
                <h1 className="sub-titulo mb-5">Filtro Candidato</h1>
            </div>
            <FiltroCandidatos />
        </section>
    )
}

export default FiltroCandidatosPage