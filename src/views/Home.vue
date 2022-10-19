<template>

<h1>Home</h1>

<NewTask />

<br>
<br>

<button @click="logOut">Log out</button>




</template>

<script setup>

import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'
import { storeToRefs } from 'pinia'
import NewTask from '../components/NewTask.vue'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const router = useRouter();
const authStore = useAuthStore();

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