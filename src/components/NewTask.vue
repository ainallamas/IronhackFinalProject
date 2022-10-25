<template>
<div class="section">
<div class="container">

<div v-if="publishing">
    <form>
        <button @click="publish" class="button publish is-size-4 has-text-weight-bold">POST NEW TASKS</button>
    </form>
</div>

<div v-else class="newtask">
<div class="welcome-message">
    <h1 class="title has-text-weight-bold is-size-1">WHAT'S NEXT?</h1>
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
        <button class="button is-link is-centered submit-button is-size-5 has-text-weight-bold" type="submit">Save changes</button>
        <button @click="publish" class="button is-link is-centered submit-button is-size-5 has-text-weight-bold" type="submit">Don't save changes</button>
        </div>
    </div>
</form>
</div>

</div>
</div>

</template>

<script setup>

import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useTaskStore } from '../store/task';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'vue-router';
import TaskCard from './TaskCard.vue';


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

const taskStore = useTaskStore(); 
const authStore = useAuthStore();
const title = ref ('');
const description = ref ('');

// Publishing
const publishing = ref(true);
const publish = () => {
    publishing.value = !publishing.value;
};

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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

.publish {
    font-family: 'Josefin Sans', sans-serif;
    background-color: #1C593D;
    color: #F2BDD6;
    border: none;
    border-radius: 10rem;
}

.title {
  color: #F2BDD6;
  font-family: 'Josefin Sans', sans-serif;
}

.newtask {
    border: solid 5px #1C593D;
    background-color:  #1C593D;
}
/* .container {
    border: solid 5px #1C593D;
    background-color:  #1C593D;
} */

form {
   margin: 0px 20px 0px 20px;
   text-align: center;
}

.control {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    
}

.welcome-message {
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.field {
    margin: 20px;
    text-align: center;
}

.submit-button {
    font-family: 'Josefin Sans', sans-serif;
    background-color:#F2BE5C;
    color: #F26052;
}

.submit-button:hover {
    background-color:#F26052;
    color:  #F2BE5C;
};

</style>