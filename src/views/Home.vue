<template>

<div class="section">
<div class="container">

<Navbar />

<NewTask />

<div class="mb-5">
    <button class="button" @click="filtered = 'all'">All</button>
    <button class="button" @click="filtered = 'done'">Done</button>
    <button class="button" @click="filtered = 'unfinished'">Unfinished</button>
</div>


<div class="columns is-multiline">
<div v-for="task in tasks" class="column is-12-mobile is-6-tablet is-4-desktop">
    <TaskCard :task="task"/>
</div>
</div>



</div>
</div>

</template>

<script setup>

import { ref, computed } from 'vue';
import { useAuthStore } from '../store/auth';
import { useTaskStore } from '../store/task';
import { useRouter } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import { storeToRefs } from 'pinia'
import NewTask from '../components/NewTask.vue';
import TaskCard from '../components/TaskCard.vue';
import Navbar from '../components/Navbar.vue';
import { propsToAttrMap } from '@vue/shared';


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const taskStore = useTaskStore();

// Computed -> recalcular las variables 
const tasks = computed(() => {
    if (filtered.value == "all") return taskStore.task;
    if (filtered.value == "done") {
    return taskStore.task.filter(task => task.isCreated == true)
    }   
    return taskStore.task.filter(task => task.isCreated == false)
})


const filtered = ref('all');




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