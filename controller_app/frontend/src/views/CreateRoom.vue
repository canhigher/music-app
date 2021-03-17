<template>

    <b-card title="Create a room" sub-title="Guest control of playback state">

        <b-form-group label="Individual radios">
          <b-form-radio name="some-radios" value="A">Play/Pause</b-form-radio>
          <b-form-radio name="some-radios" value="B">No Control</b-form-radio>
          <b-form-spinbutton id="sb-inline" min = "1" v-model="value" inline style="margin: 20px;"></b-form-spinbutton>
        </b-form-group>
        <div class="btn-controller">
          <b-button to= "/create" variant="primary">Create</b-button>
        </div>
        <div class="btn-controller">
          <b-button to= "/" variant="warning">Back</b-button>
        </div>

    </b-card>

</template>

<script>
export default {
  name: "CreateRoom",
  data() {
    return {
      value: 1
    }
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
.btn-controller {
  margin: 5px;
}
</style>
