<template>
  <div id="app">
    <QuoteComponent />
  </div>
</template>

<script>
import QuoteComponent from "./components/QuoteComponent.vue";

export default {
  name: "app",
  components: {
    QuoteComponent
  }
};
</script>

<style>
body {
  overflow: scroll;
  background-color: #192a56;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f3640;
}
</style>
