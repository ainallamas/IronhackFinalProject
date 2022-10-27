<template>
  <div class="section">
    <div class="container">
      <div v-if="publishing" class="welcome-message">
        <form>
          <button
            @click="publish"
            class="save-button button is-centered submit-button is-size-3 has-text-weight-bold" type="submit"
          >
            POST NEW TASKS
          </button>
        </form>
      </div>

      <div v-else class="newtask">
        <div class="welcome-message">
          <h1 class="title submit-button title-style has-text-weight-bold is-size-1">WHAT'S NEXT?</h1>
        </div>

        <form @submit.prevent="onSubmit">
          <div class="field">
            <div class="control">
              <input v-model="title" class="input is-warning" placeholder="Task title" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea
                v-model="description"
                class="textarea is-warning"
                placeholder="Write a task description"
              ></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control columns">
              <div class="column">
                <button
                  class="save-button button is-link is-centered change-button is-size-5 has-text-weight-bold is-fullwidth"
                  type="submit"
                >
                  Save changes
                </button>
              </div>
              <div class="column">
                <button
                  @click="publish"
                  class="save-button button is-link is-centered change-button is-size-5 has-text-weight-bold is-fullwidth"
                  type="submit"
                >
                  Don't save changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { useTaskStore } from "../store/task";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "vue-router";
import TaskCard from "./TaskCard.vue";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const taskStore = useTaskStore();
const authStore = useAuthStore();
const title = ref("");
const description = ref("");

// Publishing:
const publishing = ref(true);
const publish = () => {
  publishing.value = !publishing.value;
};

const onSubmit = async () => {
  if (title.value !== '' && description.value !== '') {
    await taskStore.newTask(title.value, description.value);
    console.log(authStore.user);
    console.log(title.value, description.value);
    title.value = "";
    description.value = "";
    taskStore.getTasks();
  }
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap");

.title {
  color: #f2bdd6;
  font-family: "Josefin Sans", sans-serif;
}

.newtask {
  border: solid 5px #1c593d;
  background-color: #1c593d;
}

form {
  margin: 0px 20px 0px 20px;
  text-align: center;
}

.welcome-message {
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.field {
  margin: 20px;
  text-align: center;
}

.submit-button {
  font-family: "Josefin Sans", sans-serif;
  background-color:  #1c593d;
  color: #f2bdd6;
  border: none; 
}

.change-button {
  font-family: "Josefin Sans", sans-serif;
  background-color:  #f2be5c;
  color: #f26052;
  border: none; 
}

.change-button:hover {
  background-color: #f26052;
  color: #f2be5c;
}

</style>
