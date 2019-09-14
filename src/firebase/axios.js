import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.axios = axios.create({
            baseURL:  process.env.VUE_APP_DATABASE_URL,
        })
    }
})
