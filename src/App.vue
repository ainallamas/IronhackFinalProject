<template>

<h1>TASK APP</h1>

<ul>
  <li>
    <router-link :to="{name: 'home'}">Home</router-link>
  </li>
  <br>
  <li>
    <router-link :to="{name: 'auth'}">Authentication</router-link>
  </li>
</ul>

<router-view></router-view> 

</template>

<script setup>

import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from './store/auth';
import { ref } from 'vue';

const router = useRouter();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

onMounted (async () => {
  const appReady = ref(null);
  try {
    if (!authStore.user) {
      appReady.value = true; 
      router.push({
        name: 'login'
      });
    } else {
   
    }
  }
  catch (error) {
    console.log(error)
  }
});


</script>

<style scoped>
</style>
