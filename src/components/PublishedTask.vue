<template>

<div class="post">
    <header>
        <!-- <div>{{props.res2.user_id}}</div> -->
        <!-- Aquí pasaremos una propiedad computada: -->
        <!-- <div>{{date}}</div> -->
    </header>
        <!-- <div>{{props.res2.message}}</div> -->

</div>


</template>

<script setup>

import { defineProps } from 'vue'

const props = defineProps({
    task: Object
});

</script>

<style scoped>
</style>