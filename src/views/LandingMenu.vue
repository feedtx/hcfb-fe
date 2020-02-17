<template>
  <div id="app">
    <!-- <div class="d-flex justify-content-center" style="margin-top: 3em; margin-bottom: 2em;">
      <h1>[feed]</h1>
    </div> -->

    <div class="d-flex justify-content-center">

      <router-link to="/rescue">
      <button type="button" class="btn btn-menu"><i class="fas fa-apple-alt" style="font-size: 6em; color: #EE0055">
      </i><br><br>
      Food Rescue</button>
      </router-link>

      <router-link to="/warehouse">
      <button  type="button" class="btn btn-menu weight"><i class="fas fa-weight" style="font-size: 6em; color: #7DB1B1">
      </i><br><br>
      Warehouse Entry </button>
      </router-link>
    </div>

    <div class="d-flex justify-content-center">

      <router-link to="/distribution">
      <button  type="button" class="btn btn-menu"><i class="fas fa-truck" style="font-size: 6em; color: #0e6502">
      </i><br><br>
      Distribution </button>
      </router-link>

      <router-link to="/admin">
      <button  type="button" class="btn btn-menu"><i class="fas fa-tools" style="font-size: 6em; color: #2c33CC">
      </i><br><br>
      Admin </button>
      </router-link>
      
    </div>      
  </div>
</template>

<script>
export default {
  name: "LandingMenu",
  data() {
    return {};
  }
};
</script>

<style scoped>

h1 {
	font-family: 'Open Sans', serif;
  text-shadow: black 6px 6px;;
	font-size: 3em;
	color: #cccccc;
} 

.btn-menu {
	margin-left: 2rem;
	margin-right: 2rem;
	width: 13rem;
	height: 13rem;
	margin-top: 1rem;
	margin-bottom: 3rem;
  border: 2px solid #6e6e6e;
  box-shadow: 5px 5px #2b2a2a;
	font-family: 'Open Sans', sans-serif;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
	font-weight: bold;
	color: #ffffff;
}
/* .weight {
  background:url("/Users/michaelrwalker/Documents/GitHub/hcfb-fe/src/assets");
} */
</style>
