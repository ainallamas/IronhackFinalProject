<template>

<div class="section">
<div class="container">

<Navbar />

<NewTask />

<div class="mb-5 filter-buttons">

    <button class="button submit-button is-size-5 has-text-weight-bold" @click="filtered = 'all'">All</button>
    <button class="button submit-button is-size-5 has-text-weight-bold" @click="filtered = 'done'">Done</button>
    <button class="button submit-button is-size-5 has-text-weight-bold" @click="filtered = 'unfinished'">Unfinished</button>

</div>


<div class="columns is-multiline">
<div v-for="task in tasks" class="column is-12-mobile is-6-tablet is-4-desktop">
    <TaskCard :task="task"/>
</div>
</div>

<FooterSignature />

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
import FooterSignature from '../components/FooterSignature.vue';


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const taskStore = useTaskStore();

// Computed -> recalcular les variables 
const tasks = computed(() => {
    if (filtered.value == "all") return taskStore.task;
    if (filtered.value == "done") {
    return taskStore.task.filter(task => task.isCreated == true)
    }   
    return taskStore.task.filter(task => task.isCreated == false)
})

const filtered = ref('all');

// Perquè aparegui el dashboard de les tasques:  
taskStore.getTasks();


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

.column {
    padding: 0rem; 
}

.section {
    background-color: #F2BDD6;
}

.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    border: none;
}

.submit-button {
    font-family: 'Josefin Sans', sans-serif;
    background-color:#F26052;
    color: #F2BDD6;
    border: none;
}

.submit-button:hover {
    background-color: #1C593D;
    color: #F26052;
    border: none;
}

</style>