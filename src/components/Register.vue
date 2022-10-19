<template>

<h1>REGISTER</h1>

    <div class="section">
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input v-model="email" class="input" type="email" placeholder="E-mail">
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <!-- Con el v-model almacenamos/vinculamos las variables al input que queramos -->
                <input v-model="password" class="input" type="password" placeholder="Password">
                </div>
            </div>
            <div class="field">
                <div class="control">
                <input class="button is-link is-fullwidth" type="submit" placeholder="Text input">
                </div>
            </div>
        </form>
    </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'
import { storeToRefs } from 'pinia'

 
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const router = useRouter();
const authStore = useAuthStore();

// Inputs from the users:
const email = ref('');
const password = ref ('');


const onSubmit = (async () => {
try {
    await authStore.register(email.value, password.value);
    router.push({
    name: 'login'
    });
    }
catch (error) {
    console.log(error)
    }    
    alert(`Hello ${email.value}, please confirm your email.`)
});

</script>
    
<style scoped>

</style>