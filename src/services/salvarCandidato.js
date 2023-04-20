import axios from 'axios'
import Swal from 'sweetalert2'

export default function salvarCandidato(formData, cursos, imagens) {

    if (
        formData.nome
    ) {
        Swal.fire({
            title: 'Atenção',
            text: 'Deseja salvar o documento no servidor?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, salvar!',
            showLoaderOnConfirm: true,
            preConfirm: () => {

                const dadosUpload = new FormData()

                dadosUpload.append('nome', formData.nome)
                dadosUpload.append('cpf_num', formData.cpf_num)
                dadosUpload.append('data_nascimento', formData.data_nascimento)
                dadosUpload.append('nome_da_mae', formData.nome_da_mae)
                dadosUpload.append('nome_do_pai', formData.nome_do_pai)
                dadosUpload.append('cnh_categoria', formData.cnh_categoria)
                dadosUpload.append('cnv_status', formData.cnv_status)
                dadosUpload.append('telefone', formData.telefone)
                dadosUpload.append('peso', formData.peso)
                dadosUpload.append('altura', formData.altura)
                dadosUpload.append('endereco', formData.endereco)
                dadosUpload.append('bairro', formData.bairro)
                dadosUpload.append('cep', formData.cep)
                for (let i = 0; i < imagens.length; i++) {
                    dadosUpload.append('files', imagens[i]);
                }
                // dadosUpload.append('perfil', imgPerfil),
                dadosUpload.append('cursos', [cursos])

                // console.log(dadosUpload);

                // console.log(formData.get('file'))
                axios
                    .post('http://localhost:3000/inserir-candidato', dadosUpload, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }, params: {
                            nome: dadosUpload.get('nome')
                        }
                    })
                    .then((response) => {
                        // console.log(response)
                        if (response.status === 'false') {
                            throw new Error(response.statusText)
                        } else {
                            Swal.fire({
                                icon: 'success',
                                title: 'As informações foram salvas com sucesso.'
                            })
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'As informações não puderam ser salvas no sistema.'
                        })
                        Swal.showValidationMessage(`${error}`)
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Preencha todos os dados!',
            text: 'Preencha os campos obrigatórios.'
        })
    }
}