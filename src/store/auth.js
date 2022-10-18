import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
    //   Lo ponemos en false porque al prinipio no va a estar autenticado. 
      isAuth: false, 
    //   Guardaremos el id de supabase que nos dará al hacer el login. Cuando registramos un usuario, tendremos que esperar que validen el email, por lo que tendremos que informar al usuario de que recibirá un email en breve para validarlo. 
      id: undefined,
    }
  },
  actions: {
    login(){
        // TODO -> cambiar el estado de isAuth a true y el id de usuario
        // isAuth: true, 
    }, 
    logout(){
        // isAuth: false, 
        // id: undefined,
    }
  }
})