import { createClient } from '@supabase/supabase-js'

// El supabase no hace falta que sea exportable, ya que únicamente se utilizará en este archivo. 
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

// Con esta función registraríamos a los usuarios
// Cuando tenemos un objeto -> si el indice es igual a la variable que le vamos a asignar, podemos borrar lo que viene después de los dos puntos. Es decir, lo que hay entre ({}) es lo mismo que email: email, password: password. 
// Recordar que tienen que ser funciones exportarlas, para poderlas utilizar en otros archivos. 
export const registro = async (email, password) => {
    const result = await supabase.auth.signUp({
      email,
      password
      })
    //   TODO: identificar el result y retornar lo que nos interesa
}

// El supabase va a ser el equivalente al fetch -> nos permitirá actuar con la base de datos. 
export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return response.data.user.id
  }


// Queremos acceder a una table:
// El 'task' puede tener varias formas. P.ej: 
// .insert({
//     user_id: id, 
//     title: 'Título',
//     description: 'Descripción del task'
//   })

// El newTask nos da un objeto -> nos tendría que dar el id del objeto que se ha insertado --> tiene relación con el comentario de addTask del doc -> tasks.js (en api).
export const newTask = async (task) => {
    const response = await supabase
      .from('task')
      .insert(task)
// TODO -> identificar la respuesta y retornar lo que necesitamos. Por ejemplo, podemos retornar un true si se ha insertado y un false si no. 
// El response no retorna el id de la task que se ha creado y tendremos que volver a hacer un getTask para obtener los id. 
    console.log(response);  
  }


// Función para leer los datos, la información. 
// El from nos indica que tabla vamos a leer, en este caso, le ponemos la table 'task' 
export const getTasks = async () => {
    const response = await supabase
      .from('task')
     // Si ponemos un ('*') -> implica que queremos leer todo.
      .select('*')
      .order('id', {ascending: false})
    console.log(response)
    return response.data
    // TODO -> retornar la información de los tasks, por ejemplo, response.data (es el return que hemos puesto, comprobar que es correcto)
  }


// Para actualizar la información 
//   El task podría ser algo parecido a lo siguiente: 
//   .update({
//     title: 'Título modificado',
//     description: 'descripción del task modificado'
//   })
export const updateTask = async (taskId, task) => {
    const response = await supabase
      .from('task')
      // En el update tenemos que modificar la información que queramos
      .update(task)
      .eq('id', taskId)
        // TODO -> identificar el resultado y retornar lo que nos interesa. P.ej. true si ha ido bien o false si ha fallado. 
      console.log (response)
  }


// Delete marching rows: 
export const deleteTask = async (taskId) => {
    const response = await supabase
      .from('task')
      .delete()
      .eq('id', taskId)
      // TODO -> identificar el resultado y retornar lo que nos interesa. P.ej. true si ha ido bien o false si ha fallado. 
      console.log(response)
  }


// Función de LOGOUT
export const logOut = async () => {
    const response = await supabase.auth.signOut()
    //// TODO -> identificar el resultado y retornar lo que nos interesa. P.ej. true si ha ido bien o false si ha fallado.  
  }
  

