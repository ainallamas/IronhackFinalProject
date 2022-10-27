<template>


<div class="section">
<div class="container">

<div class="welcome-message">
    <h1 class="title welcome is-size-2 has-text-weight-bold">Please, sign up</h1>
</div>

<div class="sign-up">
    <form @submit.prevent="onSubmit">
        <div class="field">
            <label class="label is-size-4 has-text-weight-bold">Email</label>
            <div class="control has-icons-left has-icons-right">
            <input v-model="email" class="input is-warning" type="email" placeholder="Email">
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
            </div>
        </div>
        <div class="field">
            <label class="label is-size-4 has-text-weight-bold">Password</label>
            <div class="control has-icons-left has-icons-right">
                <!-- Con el v-model almacenamos/vinculamos las variables al input que queramos -->
            <input v-model="password" class="input  is-warning" type="password" placeholder="Password">
            <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
            </span>
            </div>
        </div>
        <div class="field">
            <label class="label is-size-4 has-text-weight-bold">Password confirmation</label>
            <div class="control has-icons-left has-icons-right">
            <input v-model="passwordConfirmation" class="input is-warning" type="password" placeholder="Password">
            <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
            </span>
            </div>
        </div>
        <div class="field">
            <div class="control">
            <button class="button is-link is-centered submit-button is-size-4 has-text-weight-bold" type="submit">Start POST(PONE)ING</button>
            </div>
            </div>
        </form>

    <div class="login">
    <div class="field button is-link is-centered login-button">
    <router-link :to="{name: 'login'}">Already have an account? Sign in</router-link>
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
    color:#F2BE5C;
}

.welcome-message {
    margin: 20px;
    text-align: center;
}

.sign-up {
    margin: 40px;
    background-color: #F2BDD6;
}

.field {
    margin: 40px;
}

.login-button {
    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    background-color:  #1C593D;
}

.login-button:hover {
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