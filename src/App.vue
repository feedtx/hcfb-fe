
</style>
<template>
  <div id="app">
    <router-view></router-view>
      
  </div>
</template>

<script>
import LandingMenu from "@/components/LandingMenu";

export default {
  name: "App",
  components: {
    LandingMenu
  }
};
</script>


<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #282c34
}

</style>

