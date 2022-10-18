<template>

<h1>TASK APP</h1>

<ul>
  <li>
    <router-link :to="{name: 'home'}">Home</router-link>
  </li>
  <br>
  <li>
    <router-link :to="{name: 'login'}">Login</router-link>
  </li>
</ul>

<router-view></router-view> 

</template>

<script setup>

import { onMounted } from 'vue';
import {login, newTask} from './api';

// Aquí estamos importando el login -> le pasamos el email y la contraseña y nos devuelve un id. 
onMounted (async () => {
  const id = await login('ainallamas@gmail.com', '1234567');
  newTask({
    user_id: id, 
    title: 'Título',
    description: 'Descripción del task'
  })
});


</script>

<style scoped>
</style>
