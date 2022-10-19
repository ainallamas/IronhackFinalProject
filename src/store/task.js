import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'
 
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);


export const useTaskStore = defineStore('task', {
  state: () => ({
    task: undefined,
  }),
  actions: {
    async getTasks() {
      const res1 = await supabase
      .from('task')
      .select('*')
      .order('id', {ascending: false});
      this.task = task;
      console.log(task);
      return this.task; 
    },
    async newTask(title, description){
      console.log(useAuthStore().user.id);
      const res2 = await supabase
      .from('task')
      .insert([{
        user_id: useAuthStore().user.id,
        title, 
        is_complete: false,
        description, 
      },
    ]);
    },
    async updateTask (title, description, id){
      const res3 = await supabase
      .from('task')
      .update({
        title,
        description
      })
      .eq('id', id) 
    },
    async deleteTask (id) {
      const res4 = await supabase
      .from('task')
      .delete()
      .eq('id', id) 
    },
  }
}); 