<template>

<div class="section">
<div class="container">

<!-- El que hi ha després de :class només es compleix quan el boolean (isCreated) sigui true -->

<div v-if="!taskEdition" class="task-card" :class="{ done : props.task.isCreated }">

    <div class="task-title">
    <div class="title">{{props.task.title}}</div>
    </div>

    <div class="task-description">
    <div class="subtitle">{{props.task.description}}</div>
    </div>

<div class="task-buttons">

    <!-- <EditTaskModal v-if=edit @click="!editModal"/> -->

    <button @click="editTask" class="button is-info is-light edit-button">Edit</button>

    
    <button @click="completedTask" class="button is-success is-light done-button">Done</button>
    
    <button @click="delTask" class="button is-danger is-light delete-button">Delete</button>
</div>
</div>

<div v-else class="task-card" :class="{ done : props.task.isCreated }">


    <div class="control">
        <input v-model="taskUpdated.title" class="input is-normal" placeholder="Post the new title">
    </div> 

    <br>
    <div class="control">
        <textarea v-model="taskUpdated.description" class="textarea" placeholder="Write a new post description"></textarea>
    </div>

    <div class="control">
        <button @click="acceptChanges" class="mt-2 button is-info">Accept</button>
        <button @click="cancelChanges" class="mt-2 button is-info">Cancel</button>
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

.task-card {
    border: solid 1px #333;
    padding: 1rem;
    margin-top: 10px;
    background-color: #D6BD2A;
}

.task-buttons {
    display: flex;
    justify-content: space-between;
    margin: 20px;
}

/* header {
display: flex; 
justify-content: space-between;
} */

.done {
    background-color: #ADC;
}


</style>