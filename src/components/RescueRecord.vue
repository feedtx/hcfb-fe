<template>

  <div id='test'> 
  <div class="d-flex justify-content-center" style="margin-top: 3em;">
   <h2>Food Rescue</h2>
   </div>
<div class="d-flex justify-content-center" style="margin-bottom: 2em; display: flex;
  height: 50%;
  justify-content: center;
  align-items: center; background-color: #171d29; width: 100%; ">
   
</div>
<div class="jumbotron" style = "background-color: #171d29; width: 100%;">

<div class="d-flex justify-content-center">
   
   <div class="p-2 bd-highlight rescue-form" style="float:left; width: 27%; background-color:red; border-radius: 50px;">
      <form>
         <h3 style="margin-bottom: 2.50rem; margin-top: 1rem;">Pickup</h3>
         <div class="form-group" style="padding-left: 1.25em; padding-right: 1.25em; padding-bottom: 0.3125em;">
            <label for="initialMeatTempPickUp" style="color:white;">Meat Temp.</label>
            <input  type="number" class="form-control" id="initialMeatTempPickUp" style="clear:both;" min= "-50" max = "200">
            
            <label for="initialProduceTempPickUp" style="color:white; margin-top: 1rem;">Produce Temp.</label>
            <input type="number" class="form-control" id="initialProduceTempPickUp" style="clear:both;" min= "-50" max = "200">
         </div>
      </form>
   </div>

   <div class="p-2 bd-highlight rescue-form" style="background-color:green; width: 27%; border-radius: 50px;">
      <form>
         <h3 style="margin-bottom: 2.50rem; margin-top: 1rem;">Drop Off</h3>
         <div class="form-group" style="padding-left: 1.25em; padding-right: 1.25em; padding-bottom: 0.3125em;">
            <label for="initialMeatTempDropOff" style="color:white;">Meat Temp.</label>
            <input type="number" class="form-control" id="initialMeatTempDropOff" style="clear:both;" min= "-50" max = "200">
            <label for="initialProduceTempDropOff" style="color:white; margin-top: 1rem; ">Produce Temp.</label>
            <input type="number" class="form-control" id="initialProduceTempDropOff" style="clear:both;" min= "-50" max = "200">
         </div>
      </form>
   </div>

</div>

</div>
</div>
</template>

<script>
export default {
  name: 'RescueRecord',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
	font-family: "Open Sans", serif;
}

h3 {
	font-family: "Open Sans", serif;
	font-size: 2em;
}

.btn-rescue{
	font-family: "Open Sans", serif;
	font-size: 2em;
	height: 5rem;
	width: 40rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

.rescue-form{
	margin-left: 5rem;
	margin-right: 5rem;
}

input {
	font-family: "Open Sans", serif;
	font-size: 2.5em;
	height: 5rem;
	width: 7rem;
   margin: auto;
}

label {
	font-family: "Open Sans", serif;
	font-size: 2em;
}
</style>
