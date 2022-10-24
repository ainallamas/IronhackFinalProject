<template>

<nav class="navbar" role="navigation" aria-label="main navigation">

<div id="navbarBasicExample" class="navbar-menu">
  <div class="navbar-start">
    <div class="navbar-item title">
      TASK DASHBOARD
    </div>
  </div>
</div>


<div class="navbar-end">
  <div class="navbar-item">
    <div class="buttons">
      <button @click="logOut" class="button">
        <strong>Log out</strong>
      </button>
    </div>
  </div>
</div>
</nav>

</template>

<script setup>
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore();
const router = useRouter();

const logOut = (async () => {
try {
    await authStore.logout();
    router.push({
    name: 'login'
    });
} finally {
    }
});


</script>

<style scoped>
</style>