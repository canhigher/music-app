<template>
  <div id="app">
      <router-link to="/create">Create!</router-link>
      <b-link href="/create" class="card-link">Backcreate</b-link>
      <b-link href="/join" class="card-link">Backjoin</b-link>
      <router-link to="/join">Join!</router-link>
    <router-view />
  </div>
</template>

<script>
import JoinRoom from './views/JoinRoom.vue';
import CreateRoom from './views/CreateRoom.vue';

export default {
  name: 'App',
  components : { JoinRoom, CreateRoom }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
