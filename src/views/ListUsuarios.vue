<template>
    <div class="users-list">
        <vs-row>
           <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <router-link to="/"><vs-button icon="home" type="flat" color="#f58634" size="large">Início</vs-button></router-link>
                <router-link to="/add"><vs-button icon="person_add" type="flat" color="#f58634" size="large">Adicionar</vs-button></router-link>
           </vs-col>
           <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <h2>Listagem de Associados</h2>
           </vs-col>
       </vs-row>
    </div>
</template>
<script>
export default {

}
</script>

<style style="scss" scopded>
.users-list{
    width: 85%;
    margin: 0 auto;
    padding: 1em .3em;
}

</style>