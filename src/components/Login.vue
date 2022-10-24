<template>

<div class="section">
<div class="container">

<div class="welcome-message">
    <h1 class="title welcome">Already have an account?</h1>
    <h2 class="subtitle welcome">Please, log in</h2>
</div>

<div class="sign-in">
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
                <button class="button is-link is-centered submit-button" type="submit">Submit</button>
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

label {
color: #D2D904;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.welcome {
    color: #278C8C;
}

.welcome-message {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sign-in {
    margin: 20px;
    border: solid 5px #D2D904;
    border-radius: 0.8rem;
    background-color:  #F24194;
}

.field {
    margin: 20px;
}

.register-button {
    display: flex;
    background-color: #D2D904;
}

.register-button:hover {
    background-color: #278C8C;
}

.submit-button {
    background-color: #278C8C;
    color: #F24194;
}

.submit-button:hover {
    background-color: #D2D904;
    color: #F24194;
}

a {
    color: #D92567;
}



</style>