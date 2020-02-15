<template>
  <div id="app">
    <div><h1 class="d-flex justify-content-center" style="margin-bottom: 2em;">{{title}}</h1></div>    
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "[feed]"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
	font-family: 'Open Sans', serif;
  text-shadow: black 6px 6px;;
	font-size: 3em;
	color: #cccccc;
} 

</style>
