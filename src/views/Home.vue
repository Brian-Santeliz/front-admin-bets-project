<template>
  <h1>{{datos}}</h1>
</template>

<script>

  export default {
    name: 'Home',
    data(){
      return{
        datos:[]
      }
    },
    methods:{
       mostrarAlerta(tipoIcono, mensaje) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: tipoIcono,
        title: mensaje,
      });
    },
    },
    created(){
      this.axios.get('/obtener-clientes').then(response=>{
        this.datos = response.data
      }).catch(error=>{
        this.mostrarAlerta('error', error.response.data.msg)
      })
    }
  }
</script>
