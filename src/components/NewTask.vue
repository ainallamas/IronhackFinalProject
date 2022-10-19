<template>

<div class="mt-5">
<form @submit.prevent="onSubmit">
    <div class="control">
        <input v-model="title" class="textarea" placeholder="Post title">
    </div> 
    <div class="control">
        <textarea v-model="description" class="textarea" placeholder="Write a post"></textarea>
    </div>
    <div class="control">
        <button type="submit" class="mt-2 button is-info">Submit</button>
    </div>
</form>
</div>

<PublishedTask v-for="task in taskStore" :task="task" />

</template>

<script setup>

import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useTaskStore } from '../store/task';
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'vue-router'
import PublishedTask from './PublishedTask.vue'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

const taskStore = useTaskStore(); 
const authStore = useAuthStore();
const message = ref('');
const title = ref ('');
const description = ref ('');

const onSubmit = (async () => {
    // await authStore.fetchUser();
    await taskStore.newTask(title.value, description.value);
    console.log(authStore.user)
    title.value = '';
    description.value = '';
});

</script>

<style scoped>
</style>