<template>


<div class="section">
<div class="container">

    <h1 class="title">Please, sign up</h1>

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
            <label class="label">Password confirmation</label>
            <div class="control">
                <!-- Con el v-model almacenamos/vinculamos las variables al input que queramos -->
            <input v-model="passwordConfirmation" class="input" type="password" placeholder="Password confirmation">
            </div>
        </div>
        <div class="field">
            <div class="control">
            <button class="button is-link is-fullwidth" type="submit" placeholder="Text input">Submit</button>
            </div>
            </div>
        </form>

    <div class="button register-button">
    <router-link :to="{name: 'login'}">Already have an account? Login here</router-link>
    </div>

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

// Info from the users:
const email = ref('');
const password = ref ('');
const passwordConfirmation = ref ('');


const onSubmit = (async () => {
if (password.value === passwordConfirmation.value) {
try {
    await authStore.register(email.value, password.value);
    }
catch (error) {
    console.log(error)
    }    
    alert(`Hello ${email.value}, please confirm your email.`)
    router.push({
    name: 'login'
    });
} else {
    alert(`Passwords do not match!`)
};
});

</script>
    
<style scoped>

</style>