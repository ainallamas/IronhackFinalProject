<template>
<div class="section">
<div class="container">

<div class="welcome-message">
    <h1 class="title">NEW TASK</h1>
</div>

<form @submit.prevent="onSubmit">

    <div class="field">
        <div class="control">
        <input v-model="title" class="input" placeholder="Task title">
        </div>
    </div> 

    <div class="field">
        <div class="control">
        <textarea v-model="description" class="textarea" placeholder="Write a task description"></textarea>
        </div>
    </div>

    <div class="field">
        <div class="control">
        <button class="button is-link is-centered submit-button" type="submit">Submit</button>
        </div>
    </div>

</form>

</div>
</div>

</template>

<script setup>

import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useTaskStore } from '../store/task';
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'vue-router'
import TaskCard from './TaskCard.vue';


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

const taskStore = useTaskStore(); 
const authStore = useAuthStore();
const title = ref ('');
const description = ref ('');

const onSubmit = (async () => {
    await taskStore.newTask(title.value, description.value);
    console.log(authStore.user)
    console.log(title.value, description.value)
    title.value = '';
    description.value = '';
    taskStore.getTasks();
});


</script>

<style scoped>

.container {
    border: solid 5px #D2D904;
    border-radius: 0.8rem;
    background-color:  #F24194;
}

.welcome-message {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.field {
    margin: 20px;
    text-align: center;
}

.submit-button {
    background-color: #278C8C;
    color: #F24194;
}

.submit-button:hover {
    background-color: #D2D904;
    color: #F24194;
}

</style>