<template>

<h1>Home</h1>

<NewTask />
<div v-for="task in taskStore.task">
    <TaskCard :task="task"/>
</div>

<br>
<br>

<button @click="logOut">Log out</button>


</template>

<script setup>

import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useTaskStore } from '../store/task';
import { useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'
import { storeToRefs } from 'pinia'
import NewTask from '../components/NewTask.vue'
import TaskCard from '../components/TaskCard.vue'



const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const router = useRouter();
const authStore = useAuthStore();
const taskStore = useTaskStore();

const logOut = (async () => {
try {
    await authStore.logout();
    router.push({
    name: 'login'
    });
} finally {

    }
});


taskStore.getTasks()

// const printTask = (async () => {
//     await taskStore.getTasks();
// })

</script>

<style scoped>
</style>