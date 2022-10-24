<template>

<div class="nav-top">
<nav class="navbar" role="navigation" aria-label="main navigation">

  <div id="navbarBasicExample" class="navbar-menu">
   <div class="navbar-start">
      <div class="navbar-item title ">
      TASK DASHBOARD
      </div>
    </div>
  </div>


  <div class="navbar-end">
   <div class="navbar-item">
      <div class="buttons">
        <button @click="logOut" class="button is-link is-centered logout-button">
         <strong>Log out</strong>
        </button>
      </div>
    </div>
  </div>

</nav>
</div>


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

.title {
  color: #F24194;
}

.navbar-menu {
  background-color:#D9AD2B;
}

.navbar-item {
  background-color: #D9AD2B;
}

.logout-button {
  background-color: #D2D904;
  color: #F24194;
}

.logout-button:hover {
  background-color: #F24194;
  color: #278C8C;
}





</style>