<template>

    <b-card title="Create a room" sub-title="Guest control of playback state">
      
        <b-form-group label="Individual radios">
          <b-form-radio name="some-radios" value="A">Play/Pause</b-form-radio>
          <b-form-radio name="some-radios" value="B">No Control</b-form-radio>
        </b-form-group>

        <a href="#" class="card-link">Create a Room!</a>
      <b-link href="/" class="card-link">Back</b-link>
    </b-card>

</template>

<script>
export default {
  name: "CreateRoom",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
