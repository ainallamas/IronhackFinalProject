<template>

<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">ALERT MESSAGE</p>
      <button @click="delModal" class="delete" aria-label="close"></button>
    </header>

    <section class="modal-card-body">
      Are you sure you wanna delete this POST-IT?
    </section>

    <footer class="modal-card-foot">
      <button @click="delTask" class="button delete-button">Delete</button>
      <button @click="delModal" class="button cancel-button">Cancel</button>
    </footer>
  </div>
</div>

</template>


<script setup>
import {defineEmits} from 'vue';

const emits = defineEmits (['accept', 'cancel']);

const delTask = () => {
    emits('accept')
};

const delModal = () => {
    emits('cancel')
};

</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap");

.modal-card-head {
  background-color: #f26052;
  border: none;
}

.modal-card-body {
  background-color: #F2BDD6;
  color: #1C593D;
}

.modal-card-foot {
  background-color: #F2BDD6;
  border: none;
  display: flex;
  justify-content: center;
}

.delete-button {
  font-family: 'Josefin Sans', sans-serif;
  background-color:  #F2BE5C;
  color: #F26052;
  border: none; 
}

.cancel-button {
  font-family: 'Josefin Sans', sans-serif;
  border: none;
  color: #F2BDD6;
  background-color: #1C593D;
}

</style>