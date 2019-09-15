<template>
    <div class="edit-user">
        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <router-link to="/">
                    <vs-button icon="home" type="flat" color="#f58634" size="large">Início</vs-button>
                </router-link>
                <router-link to="/list">
                    <vs-button icon="assignment" type="flat" color="#f58634" size="large">Listar</vs-button>
                </router-link>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <h2>Adicionar Associado</h2>
            </vs-col>
        </vs-row>

        <form>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input
                        v-model="usuario.nomeCompleto"
                        color="#f58634"
                        label="Nome Completo"
                        placeholder="Nome Sobrenome"
                    />
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input
                        v-model="usuario.cpf"
                        color="#f58634"
                        label="CPF"
                        placeholder="123.567.890-10"
                    />
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input
                        v-model="usuario.endereco"
                        color="#f58634"
                        label="Endereço"
                        placeholder="Bairro - Rua"
                    />
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input
                        v-model="usuario.complemento"
                        color="#f58634"
                        label="Complemento"
                        placeholder="Apto. 21"
                    />
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="right" vs-w="2">
                    <vs-input v-model="usuario.uf" color="#f58634" label="UF" placeholder="UF" />
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="right" vs-w="10">
                    <vs-input
                        v-model="usuario.cidade"
                        color="#f58634"
                        label="Cidade"
                        placeholder="Cidade"
                    />
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input
                        v-model="usuario.telefone"
                        color="#f58634"
                        label="Telefone/Whatsapp"
                        placeholder="(67) 99887-6655"
                    />
                </vs-col>
            </vs-row>

            <vs-row class="radio-box">
                <vs-col vs-type="flex" vs-w="12">Curso:</vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio
                        color="#f58634"
                        v-model="usuario.curso"
                        vs-value="Ciência da Computação"
                    >Ciência da Computação</vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio
                        color="#f58634"
                        v-model="usuario.curso"
                        vs-value="Sistemas de Informação"
                    >Sistemas de Informação</vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio color="#f58634" v-model="usuario.curso" vs-value="Pedagogia">Pedagogia</vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio
                        color="#f58634"
                        v-model="usuario.curso"
                        vs-value="Matemática"
                    >Matemática</vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio color="#f58634" v-model="usuario.curso" vs-value="Externo">Externo</vs-radio>
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input
                        color="#f58634"
                        v-model="usuario.email"
                        label="Email"
                        placeholder="nome.sobrenome@email.com"
                    />
                </vs-col>
            </vs-row>

            <vs-row class="radio-box">
                <vs-col vs-type="flex" vs-w="12">Turno:</vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio
                        color="#f58634"
                        v-model="usuario.turno"
                        vs-value="Vespertino"
                    >Vespertino</vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio color="#f58634" v-model="usuario.turno" vs-value="Noturno">Noturno</vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio color="#f58634" v-model="usuario.turno" vs-value="Integral">Integral</vs-radio>
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input-number
                        color="#f58634"
                        min="1"
                        max="8"
                        label="Semestre: "
                        v-model="usuario.semestre"
                        icon-inc="expand_less"
                        icon-dec="expand_more"
                    />
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input
                        v-model="usuario.rga"
                        color="#f58634"
                        label="RGA"
                        placeholder="201X.180X.XXX-XX"
                    />
                </vs-col>
            </vs-row>

            <vs-row class="radio-box">
                <vs-col vs-type="flex" vs-w="12">Status do Cadastro:</vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio color="#f58634" v-model="usuario.status" vs-value="Pendente">Pendente</vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-w="12">
                    <vs-radio color="#f58634" v-model="usuario.status" vs-value="Em dia">Em dia</vs-radio>
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col v-if="alert" vs-type="flex" vs-justify="center" vs-align="center">
                    <vs-alert
                        :active.sync="alert"
                        color="success"
                        icon="check_circle"
                        closable
                    >Associado editado com sucesso!</vs-alert>
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center">
                    <vs-button
                        @click="editar"
                        icon="edit"
                        type="filled"
                        color="#f58634"
                        size="small"
                    >Editar</vs-button>
                </vs-col>
            </vs-row>
        </form>
    </div>
</template>

<script>
export default {
    props: ['uid'],
    data() {
        return {
            usuario: {
                nome: '',
                telefone: '',
                cpf: '',
                cidade: '',
                uf: '',
                endereco: '',
                complemento: '',
                email: '',
                curso: '',
                turno: '',
                semestre: 1,
                status: '',
                rga: ''
            },
            alert: false
        }
    },
    created() {
        this.axios.get(`/associados/${this.uid}.json`).then(res => {
            this.usuario = res.data
        })
    },
    methods: {
        editar() {
            this.axios.patch(`/associados/${this.uid}.json`, this.usuario)
            this.alert = true
        }
    }
}
</script>

<style lang="scss" scoped>
.edit-user{
    width: 85%;
    margin: 0 auto;
    padding: 1em .3em;
    h2{
        margin-bottom: 1em;
    }
    .vs-row{
        margin-top: 1em;
    }
    .vs-input{
        width: 95%;
    }
    .radio-box{
        .vs-col{
            margin-bottom: 15px;
        }
    }
}
</style>