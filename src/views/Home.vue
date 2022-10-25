<template>

<div class="section">
<div class="container">

<Navbar />

<NewTask />
<div class="columns is-multiline">
<div v-for="task in taskStore.task" class="column is-12-mobile is-6-tablet is-4-desktop">
    <TaskCard :task="task"/>
</div>
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

.column {
    padding: 0rem; 
}

.section {
    background-color: #F2BDD6;
}

</style>