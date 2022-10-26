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
      <button @click="delTask" class="button is-success">Delete</button>
      <button @click="delModal" class="button">Cancel</button>
    </footer>
  </div>
</div>

</template>


<script setup>

import {defineEmits} from 'vue';

// Definimos los eventos: 
// En este caso, el evento será accept or cancel: emitiremos al padre para que aparezca el modal.
const emits = defineEmits (['accept', 'cancel']);

const delTask = () => {
    emits('accept')
};

const delModal = () => {
    emits('cancel')
};


</script>


<style scoped>

</style>