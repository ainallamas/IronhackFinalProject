import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
    // Aquí guardaremos las tasks que recibiremos de supabase
      tasks: []
    }
  },
  actions: {
    setTask(){
        //TODO -> Guardar en el estado las tasks que nos de supabase. 
    },
    updateTask(id, task){
        // TODO -> modificar el estado de la task
        // Encontrar el indice de la task con ese id y cambiar su contenido con task. 
    },
    deleteTask(id){
        // TODO -> modificar el estado borrando esa task.
        // Pasamos el id, encontramos el indice de ese id y eliminamos ese indice de la array. 
    },
    addTask(task){
        // TODO -> modificar el estado de task haciendo un push de la task. Si no nos da el id, de alguna manera lo tendríamos que solicitar. 
        // Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendríamos que hacer el getTask -> ya hemos comprobado que el reponse no lo retorna. 

    }
  }
})