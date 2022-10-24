<template>
<div class="section">
<div class="container mt-5">

<h1 class="title">NEW TASK</h1>

<form @submit.prevent="onSubmit">

    <div class="control">
        <input v-model="title" class="input is-normal" placeholder="Post title">
    </div> 

    <br>
    <div class="control">
        <textarea v-model="description" class="textarea" placeholder="Write a post"></textarea>
    </div>

    <div class="control">
        <button type="submit" class="mt-2 button is-info">Submit</button>
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
</style>