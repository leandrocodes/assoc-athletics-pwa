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
                    <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="tr.nomeCompleto">{{tr.nomeCompleto}}</vs-td>

                        <vs-td :data="tr.curso">{{tr.curso}}</vs-td>

                        <vs-td :data="tr.email">{{tr.email}}</vs-td>

                        <vs-td :data="tr.status">{{tr.status}}</vs-td>

                        <template class="expand-user" slot="expand">
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
                            </div>
                        </template>
                    </vs-tr>
                </template>
            </vs-table>

            <pre>{{ selected }}</pre>
        </div>
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
            usuarios: []
        }
    },
    created() {
        this.axios.get('associados.json').then(res => {
            this.usuarios = res.data
            console.log(this.usuarios)
        })
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