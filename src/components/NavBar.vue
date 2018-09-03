<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div v-if="!isAuthenticated">
        <router-link class="navbar-brand" to="/login">Login</router-link>
      </div>
      <div v-else>
        <router-link class="navbar-brand" to="/movies">Movies</router-link>
        <router-link class="navbar-brand" to="/add">Add</router-link>
        <button @click="logout">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { authService } from '../services/auth'
import { eventBus } from '../main'

export default {
    
  data() {
    return {
      isAuthenticated: authService.isAuthenticated()
    }
  },
  methods: {
    logout() {
      authService.logout()
      this.isAuthenticated = false
      this.$router.push("/login");
    }
  },
  created() {
        eventBus.$on("changeState", state => {
            this.isAuthenticated = state;
        });
    }
}
</script>