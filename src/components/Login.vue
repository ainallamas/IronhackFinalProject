<template>

<div class="section">
<div class="container">

<div class="welcome-message">
    <h1 class="title welcome is-size-2 has-text-weight-bold">ALREADY HAVE AN ACCOUNT?</h1>
    <h2 class="subtitle welcome is-size-2 has-text-weight-bold">Please, log in</h2>
</div>

<div class="sign-in">
    <form @submit.prevent="onSubmit">
        <div class="field">
            <label class="label is-size-4 has-text-weight-bold">Email</label>
            <div class="control">
            <input v-model="email" class="input is-warning" type="email" placeholder="your@email.com">
            </div>
        </div>
            <div class="field">
                <label class="label is-size-4 has-text-weight-bold">Password</label>
                <div class="control">
                    <!-- Con el v-model almacenamos/vinculamos las variables al input que queramos -->
                <input v-model="password" class="input is-warning" type="password" placeholder="*******">
                </div>
            </div>
            <div class="field">
                <div class="control">
                <button class="button is-link is-centered submit-button is-size-4 has-text-weight-bold" type="submit">LOG IN</button>
                </div>
            </div>
    </form>

    <div class="registro">
    <div class="field button is-link is-centered register-button">
        <router-link :to="{name: 'register'}">Not a member yet? Please, register</router-link>
    </div>
    </div>

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

// Inputs from the users:
const email = ref('');
const password = ref ('');

// Missatge alerta dels errors: 
const alerta = ref('');


const onSubmit = (async () => {
try {
    await authStore.login(email.value, password.value);
    router.push({
    name: 'home'
    });
    }
catch (error) {
    console.log(error);
    alert('Invalid login credentials. Please, sign up.');
    router.push({
    name: 'register'
    });
}; 
});

</script>
    
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

label {
    color: #1C593D;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.control {
    display: flex;
    justify-content: center;
}

.welcome {
    font-family: 'Josefin Sans', sans-serif;
    color: #F2BE5C;
}

.welcome-message {
    margin: 20px;
    text-align: center;
}

.sign-in {
    margin: 40px;
    background-color: #F2BDD6;
}

.field {
    margin: 40px;
}

.register-button {
    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    background-color: #1C593D;
}

.register-button:hover {
    background-color: #F2BE5C;
}

.submit-button {
    font-family: 'Josefin Sans', sans-serif;
    background-color: #F2BE5C;
    color: #1C593D;
}

.submit-button:hover {
    background-color: #1C593D;
    color: #F2BE5C;
}

a {
    color: #F2BE5C;
}

a:hover {
    color: #1C593D;
}


</style>