<template>

<div class="section">
<div class="container">

<!-- El que hi ha després de :class només es compleix quan el boolean (isCreated) sigui true -->

<div v-if="!taskEdition" class="task-card has-text-centered" :class="{ done : props.task.isCreated }">

    <div class="task-title">
    <div class="title tasca" :class="{ fet : props.task.isCreated }">{{props.task.title}}</div>
    </div>

    <div class="task-description">
    <div class="subtitle tasca" :class="{ fet : props.task.isCreated }">{{props.task.description}}</div>
    </div>

    <div class="task-buttons">
    <button @click="editTask" class="button submit-button is-size-5 has-text-weight-bold">Edit</button>
    
    <button @click="completedTask" class="button submit-button is-size-5 has-text-weight-bold">Done</button>
    
    <button @click="delTask" class="button submit-button is-size-5 has-text-weight-bold">Delete</button>
    </div>

</div>

<div v-else class="task-card tarea has-text-centered" :class="{ done : props.task.isCreated }">

    <div class="field">
        <div class="control">
        <input v-model="taskUpdated.title" class="input is-normal" placeholder="Post the new title">
        </div> 
    </div>

    <div class="field">
        <div class="control">
        <textarea v-model="taskUpdated.description" class="textarea" placeholder="Write a new post description"></textarea>
        </div>
    </div>  

    <div class="field">
        <div class="control">
        <button @click="acceptChanges" class="button submit-button is-size-5 has-text-weight-bold">
            <strong>Accept</strong>
        </button>
        <button @click="cancelChanges" class="button submit-button is-size-5 has-text-weight-bold">
           <strong>Cancel</strong>
        </button>
        </div>
    </div>

</div>
</div>

</div>

</template>


<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { defineProps } from 'vue';
import { useTaskStore } from '../store/task';
import { updateTask } from '../api';



const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const props = defineProps ({task: Object});
const taskStore = useTaskStore(); 

// Editar tasques:
const taskEdition = ref(false);


//Funció per eliminar tasques:
const delTask = (async () => {
    await taskStore.deleteTask(props.task.id);
    await taskStore.getTasks();
});

// Funció per marcar que la tasca està completa: 
const completedTask = (async () => {
    await taskStore.doneTask(props.task.id, props.task.isCreated)
    await taskStore.getTasks();
});


// Funció per editar les tasques:
const taskUpdated = ref ({
    title: props.task.title,
    description: props.task.description
})

const editTask = () => {
    taskEdition.value = true;
}

const cancelChanges = (async () => {
    taskEdition.value = false; 
    taskUpdated.value.title = props.task.title;
    taskUpdated.value.description = props.task.description;
    await taskStore.updateTask(
        props.task.title, 
        props.task.description, 
        props.task.id
    );
});

const acceptChanges = (async () => {
    taskEdition.value = false; 
    await taskStore.updateTask(
        taskUpdated.value.title,
        taskUpdated.value.description,
        props.task.id
    );
    await taskStore.getTasks();
});



</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

.task-card {
    font-family: 'Josefin Sans', sans-serif;
    border: solid 5px #F2BE5C;
    padding: 1rem;
    margin-top: 10px;
    background-color: #F2BE5C;
}

.task-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px;
}

.done {
    background-color:#F2BDD6;
    border: solid 5px #F26052;
    /* text-decoration: line-through; */
}

.submit-button {
    font-family: 'Josefin Sans', sans-serif;
    background-color: #1C593D;
    border: none;
    color: #F26052;
}

.submit-button:hover {
    background-color:#F26052;
    color: #F2BDD6;
}

.control {
    display: flex;
    justify-content: space-around;
}

.tasca {
    color: #1C593D;
}

.fet {
    text-decoration: line-through;
};

</style>