<template>

<div class="section">
<div class="container">

<Navbar />

<NewTask />
<div v-for="task in taskStore.task">
    <TaskCard :task="task"/>
</div>


</div>
</div>

</template>

<script setup>

import { ref } from 'vue'
import { useAuthStore } from '../store/auth';
import { useTaskStore } from '../store/task';
import { useRouter } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import { storeToRefs } from 'pinia'
import NewTask from '../components/NewTask.vue';
import TaskCard from '../components/TaskCard.vue';
import Navbar from '../components/Navbar.vue';


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const taskStore = useTaskStore();


taskStore.getTasks();


</script>

<style scoped>
</style>