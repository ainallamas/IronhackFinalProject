import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'
 
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: undefined, 
    }),
  actions: {
    async fetchUser () {
      const user = await supabase.auth.user();
      this.user = user
    },
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
      if (error) throw error;
      console.log (error);
    },
    persist: {
      enabled: true, 
      strategies: [
        {
          key: 'user',
          storage: localStorage
        },
      ],
    },
  },
  });
