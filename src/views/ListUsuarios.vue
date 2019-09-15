<template>
    <div class="users-list">
        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <router-link to="/">
                    <vs-button icon="home" type="flat" color="#f58634" size="large">Início</vs-button>
                </router-link>
                <router-link to="/add">
                    <vs-button icon="person_add" type="flat" color="#f58634" size="large">Adicionar</vs-button>
                </router-link>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <h2>Listagem de Associados</h2>
            </vs-col>
        </vs-row>

        <div class="list-all-users">
            <vs-table :data="usuarios">
                <template slot="thead">
                    <vs-th>Nome</vs-th>
                    <vs-th>Curso</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Status</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="tr" :key="uid" v-for="(tr, uid) in data">
                        <vs-td :data="tr.nomeCompleto">{{tr.nomeCompleto}}</vs-td>

                        <vs-td :data="tr.curso">{{tr.curso}}</vs-td>

                        <vs-td :data="tr.email">{{tr.email}}</vs-td>

                        <vs-td :data="tr.status">{{tr.status}}</vs-td>

                        <template class="expand-user" slot="expand">
                           <vs-row>
                                <div class="con-expand-users">
                                    <vs-list>
                                        <vs-list-item icon="smartphone" title="Telefone" :subtitle="tr.telefone"></vs-list-item>
                                        <vs-list-item icon="contacts" title="CPF" :subtitle="tr.cpf"></vs-list-item>
                                        <vs-list-item icon="map" title="Estado" :subtitle="tr.uf"></vs-list-item>
                                        <vs-list-item icon="my_location" title="Cidade" :subtitle="tr.cidade"></vs-list-item>
                                        <vs-list-item icon="person_pin" title="Endereço" :subtitle="tr.endereco"></vs-list-item>
                                        <vs-list-item icon="access_time" title="Turno" :subtitle="tr.turno"></vs-list-item>
                                        <vs-list-item icon="today" title="Semestre" :subtitle="tr.semestre"></vs-list-item>
                                        <vs-list-item icon="credit_card" title="RGA" :subtitle="tr.rga"></vs-list-item>
                                    </vs-list>
                                    <vs-button @click="edit(uid)" color="warning" icon="edit" style="margin-right: 20px;">Editar</vs-button>
                                    <vs-button @click="confirmar(uid)"  color="danger" icon="delete_forever">Excluir</vs-button>
                                </div>
                           </vs-row>
                        </template>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
        <vs-popup class="holamundo"  title="Tem certeza?" :active.sync="popupActive">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <h3>Tem certeza que deseja excluir este cadastro?</h3>
                </vs-col>
                <vs-col style="margin-top: 20px" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-button @click="deletar(uid)" color="danger" icon="delete_forever">Deletar</vs-button>
                </vs-col>
            </vs-row>
        </vs-popup>
    </div>
</template>
<script>
export default {
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
                rga: '',
            },
            usuarios: [],
            uid: null,
            popupActive: false
        }
    },
    created() {
        this.axios.get('associados.json').then(res => {
            this.usuarios = res.data
        })
    },
    methods: {
        edit(uid) {
            this.$router.push({ name: 'EditUser', params: {uid} })
        },
        deletar(){
            this.axios.delete(`/associados/${this.uid}.json`).then(()=>{
                this.popupActive = false
                this.$router.go()
            })
        },
        confirmar(uid){
            this.uid = uid
            this.popupActive = true
        }
    }
}
</script>

<style lang="scss" scoped>
.users-list {
    width: 85%;
    margin: 0 auto;
    padding: 1em 0.3em;
    h2 {
        margin-bottom: 20px;
    }
}
</style>