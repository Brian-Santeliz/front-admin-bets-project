import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:{
      nombre:"",
      id:""
    },
    token:null,
    estaAutenticado:true
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
