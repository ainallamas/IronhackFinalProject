<template>
<div class="section">
    <div class="container">
<NavbarLogin />    

<router-view></router-view>
</div>
</div>
</template>

<script setup>
import NavbarLogin from '../components/NavbarLogin.vue';

</script>

<style scoped>

.section {
    background-color: #F26052;
}

</style>