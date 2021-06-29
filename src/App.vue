<template>
  <v-app>
    <v-main>
      <Sidebar v-if="renderizadoSidebar"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: { Sidebar },
  name: 'App',

  data: () => ({
  }),
  computed:{
    renderizadoSidebar(){
      return this.$store.state.estaAutenticado
    }
  }
};
</script>
