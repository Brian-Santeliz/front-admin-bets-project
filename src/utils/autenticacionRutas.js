export const  requiereAutenticacion =  async (to, from, next)=> {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem('autenticacion-token') ? next() : next(`/login`);
    }
  }
  export const NoRequiereAutenticacion = async (to, from, next)=> {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem('autenticacion-token') ? next("/") : next();
    }
  }
  