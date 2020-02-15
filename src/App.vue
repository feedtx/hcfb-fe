
</style>
<template>
  <div id="app">
    <Header />
    <router-view></router-view>
      
  </div>
</template>

<script>
import LandingMenu from "@/views/LandingMenu";
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>


<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background-color: #171d29;
}

</style>

