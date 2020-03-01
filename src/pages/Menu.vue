<template>
  <q-page class="flex flex-center">
    <div class="container">
      
      <div>
        <q-btn class="btn">
        <i class="fas fa-apple-alt food"></i>
        <span class="title">Food Rescue</span>        
        </q-btn>
      </div>

      <div>
        <q-btn class="btn ">
        <i class="fas fa-weight warehouse"></i>
        <span class="title">Warehouse Entry</span>
        </q-btn>
      </div>

    </div>    

    <div class="container">

      <div>
        <q-btn class="btn">
        <i class="fas fa-truck distribution"></i>
        <span class="title">Distribution</span>
        </q-btn>
      </div>

      <div>
        <q-btn class="btn">
        <i class="fas fa-tools admin"></i>
        <span class="title">Administrative</span>
        </q-btn>
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>

<style scoped>

.btn {
  width: 13rem;
  height: 13rem;
  margin-left: 2rem;
	margin-right: 2rem;
  margin-top: 1rem;
	margin-bottom: 3rem;
  background-color: #383a3d; 
}

.title {
  display: block;
  color: white;
}

.food {
  font-size: 9em;
  color: rgb(255, 0, 89);
}

.distribution {
  font-size: 9em;
  color: rgb(187, 69, 0);
}

.warehouse {
  font-size: 9em;
  color: rgb(0, 230, 238);
}

.admin {
  font-size: 9em;
  color: rgb(0, 238, 139);
}

.container {
  flex-direction: column;
}
</style>
