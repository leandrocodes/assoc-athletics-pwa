<template>
    <div class="users">
        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <h1>Gerenciamento de Associados</h1>
            </vs-col>

            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <img src="../assets/pruu.png" width="70%" />
            </vs-col>
        </vs-row>

        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                 <router-link to="/list">
                    <vs-button
                        icon="assignment"
                        type="filled"
                        color="#333"
                        size="large"
                    >
                        Controle de Associados
                    </vs-button>
                 </router-link>

            </vs-col>
        </vs-row>

        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <router-link to="/add">
                    <vs-button
                        icon="person_add"
                        type="filled"
                        color="#333"
                        size="large"
                    >Adicionar um Associado</vs-button>
                </router-link>
            </vs-col>
        </vs-row>
        <footer>
             Developed by
            <a target="_blank" href="https://leandrocodes.com.br"> © Leandro Viana </a>
            <br />Under
            <a href="https://github.com/leandrocodes/atletica-pruuu">MIT</a> license
        </footer>
    </div>
</template>

<script>
export default {
    beforeCreate() {
        this.$vs.loading({ background: '#333', color: '#f58634' })
        setTimeout(() => {
            this.$vs.loading.close()
        }, 3000)
    }
}
</script>

<style lang="scss" scoped>
.users {
    h1 {
        text-align: center;
        margin-bottom: 1em;
    }
}
.vs-row {
    margin-top: 20px;
}
.vs-button {
    color: #f58634;
    transition: all 0.1s ease !important;
}

@media screen and (min-width: 768px) {
    .users {
        img {
            width: 40%;
        }
    }
}

@media screen and (min-width: 1366px) {
    .users {
        img {
            width: 25%;
        }
    }
}
</style>