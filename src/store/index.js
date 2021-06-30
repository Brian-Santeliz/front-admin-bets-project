import Vue from 'vue';
import Vuex from 'vuex';
import { decodificarToken } from '@/utils/datosToken.js';
import {AUTENTICACION_TOKEN} from '@/utils/constante'
import axios from 'axios';
import router from '@/router/index' 
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    usuario: {},
    token: null,
    estaAutenticado: false,
  },
  mutations: {
    establecerToken(state, payload) {
     state.token = payload
    },
    establecerUsuario(state, payload){
      state.usuario = payload
    },
    establecerAutenticado(state, payload){
      state.estaAutenticado = payload
    },
    resetearStore(state){
      state.token = null,
      state.usuario = {}
      state.estaAutenticado = false
    }
  },
  actions: {
    logout(context){
      localStorage.removeItem(AUTENTICACION_TOKEN);
      //PROBAR SI ASI SE ESTA ELIMINANDO LA CABECERA
      delete axios.defaults.headers.common['Authorization'];
      context.commit('resetearStore');
      router.push('/login')
    },
    establecerDatos(context, payload) {
      const { id, nombre, usuario } = decodificarToken(payload);
      const datosUsuario = {
        id,
        nombre,
        usuario,
      };
      localStorage.setItem(AUTENTICACION_TOKEN, payload);
      context.commit('establecerToken', payload);
      context.commit('establecerUsuario', datosUsuario);
      context.commit('establecerAutenticado', true);
      //establecer cabecera axios
      /* INSTALAR PERSISTENCIA DE STORE */
    },  
    obtenerUsuario(context){
      const existeToken = localStorage.getItem(AUTENTICACION_TOKEN)
      if(existeToken){
        return context.dispatch('establecerDatos', existeToken)
      }
      context.commit('resetearStore')
    },

  },
  getters:{
    nombreAdmin: store=>{
     return store.usuario.nombre
   }
  }
});
