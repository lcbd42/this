<template>
    <div id="app">
    <div style="float: left; display:inline-block; width:49%; height: 47%; margin-top: 10px;">
        <div class="shadow p-3 mb-∆5 bg-body rounded">
        <div class="form-floating">
            <textarea v-model="input" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 600px"></textarea>
            <label for="floatingTextarea2">Note1</label>
        </div>
        </div>
    </div>

    <div style="display:inline-block; width:49%; height: 47%; margin-top: 10px;">
        <div class="shadow p-3 mb-∆5 bg-body rounded">
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 600px"></textarea>
            <label for="floatingTextarea2">Note2</label>
        </div>
        </div>
    </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>