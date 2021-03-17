<template>
  <div id="home">
      <router-link to="/create">Create!</router-link>
      <router-link to="/join">Join!</router-link>
      <router-view />
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
  }
};
</script>
