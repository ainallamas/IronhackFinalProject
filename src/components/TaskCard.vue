<template>

<div class="section">
<div class="container">
<div class="task-card" :style="colorCard ? { 'background-color': '#D9B13B'} :{ 'background-color': '#ADC027'}" >

    <div class="task-title">
    <div class="title">{{props.task.title}}</div>
    </div>

    <div class="task-description">
    <div class="subtitle">{{props.task.description}}</div>
    </div>

<div class="task-buttons">
    <button class="button is-info is-light edit-button">Edit</button>
    
    <button @click="colorCard = !colorCard" class="button is-success is-light done-button">Done</button>
    
    <button @click="delTask" class="button is-danger is-light delete-button">Delete</button>
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


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const props = defineProps (['task']);
const taskStore = useTaskStore(); 

//Canviar el color -> Done:
const colorCard = ref(true);

//Eliminar tasques:
const delTask = (async () => {
    await taskStore.deleteTask(props.task.id);
});




</script>


<style scoped>

.task-card {
    border: solid 1px #333;
    padding: 1rem;
    margin-top: 10px;

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


</style>