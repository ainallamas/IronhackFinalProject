<template>

<div class="nav-top">
<nav class="navbar" role="navigation" aria-label="main navigation">
  <!-- <div class="navbar-brand">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyy_zGw32yNCVIqADtHgWGALoYrZrdRbRBmA&usqp=CAU" class="logo">
  </div> -->

  <div class="navbar-menu">
   <div class="navbar-start">
      <div class="navbar-item title is-size-1 has-text-weight-bold">
      POST(PONE) IT
      </div>
    </div>
  </div>


  <div class="navbar-end">
   <div class="navbar-item">
      <div class="buttons">
        <button @click="logOut" class="button is-link is-centered logout-button is-size-4 has-text-weight-bold">
              Log out
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

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

.title {
  color:#F26052;
  font-family: 'Josefin Sans', sans-serif;
}

.navbar-menu {
  background-color:#F2BDD6;
}

.navbar-item {
  background-color: #F2BDD6;
}

.logout-button {
  font-family: 'Josefin Sans', sans-serif;
  background-color: #F26052;
  color: #1C593D;
}

.logout-button:hover {
  background-color: #1C593D;
  color: #F2BE5C;
}

.buttons {
  display: flex;
  justify-content: center;
}

</style>