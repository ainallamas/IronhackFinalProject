import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: undefined, 
    }),
  actions: {
    async register (email, password) {
      const res1 = await supabase.auth.signUp({
        email,
        password
      });
      if (error) throw error; 
      if (user) {
      this.user = user;
      console.log(this.user); 
      }
    },
    async login (email, password) {
      console.log(email, password)
      const res2 = await supabase.auth.signInWithPassword({
        email,
        password
      });
      console.log(res2);
      if (res2.error) throw error;
      if (res2.data.user) {
        this.user = res2.data.user;
        console.log(this.user); 
        }
    },
    async logout () {
      const res3 = await supabase.auth.signOut();
      console.log (res3.error);
      if (res3.error) throw error;
      console.log (res3.error);
      this.user = undefined;
    },

  },
  persist: {
    enabled: true, 
  },
  });
