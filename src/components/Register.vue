<template>


<div class="section">
<div class="container">

<div class="welcome-message">
    <h1 class="title welcome">Please, sign up</h1>
</div>

<div class="sign-up">
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
            <button class="button is-link is-centered submit-button" type="submit" placeholder="Text input">Submit</button>
            </div>
            </div>
        </form>

    <div class="login">
    <div class="field button is-link is-centered login-button">
    <router-link :to="{name: 'login'}">Already have an account? Sign in here</router-link>
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

.sign-up {
    margin: 20px;
    border: solid 5px #D2D904;
    border-radius: 0.8rem;
    background-color:  #F24194;
}

.field {
    margin: 20px;
}

.login-button {
    display: flex;
    background-color: #D2D904;
}

.login-button:hover {
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