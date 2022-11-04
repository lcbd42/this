<template>
  <div id="app">
    <!-- 라우터 구현해놓음, 필요시 사용가능 -->

    <div class="blueBtn">

        <div style="float:left; margin-left:10px;">
          <div v-if="isFlowTime==true">
            <button type="button" class="btn btn-success" @click="flowStart">Flow chart</button>
          </div>
          <div v-if="isFlowTime==false">
            <button type="button" class="btn btn-primary" @click="flowStart">Flow chart</button>
          </div>
        </div>


        <div style="float:left; margin-left:10px;">
          <div v-if="isLatexTime==true">
            <button type="button" class="btn btn-success" @click="latexStart">Latex</button>
          </div>
          <div v-if="isLatexTime==false">
            <button type="button" class="btn btn-primary" @click="latexStart">Latex</button>
          </div>
        </div>


        <div style="float:left; margin-left:10px;">
          <div v-if="isMemoTime==true">
            <button type="button" class="btn btn-success" @click="memoStart">Memo</button>
          </div>
          <div v-if="isMemoTime==false">
            <button type="button" class="btn btn-primary" @click="memoStart">Memo</button>
          </div>
        </div>

        
      
        <div style="float:right">
          <button type="button" class="btn btn-secondary" style="float: right; margin-left: 10px;">Import</button>
          <button type="button" class="btn btn-secondary" style="float: right">Save</button>
          <button type="button" class="btn btn-warning" style="float:right; margin-right: 10px;">How To Use</button>
        </div>
        
    </div>

    <div v-if="isFlowTime==true"> 
      <!-- TextArea -->
      <div style="float: left; display:inline-block; width:49%; height: 47%; margin-top: 10px;">
          <div class="shadow p-3 mb-∆5 bg-body rounded">
          <div class="form-floating">
              <textarea v-model="inputValue" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 600px"></textarea>
              <label for="floatingTextarea2">Data Flow</label>
          </div>
          </div>
      </div>
    
      <div style="display:inline-block; width:49%; height: 47%; margin-top: 10px;">
          <div class="shadow p-3 mb-5 bg-body rounded">
          <vue-mermaid-string :value="inputValue" />
          </div>
      </div>
    </div>
    

    <div v-if="isLatexTime==true">
      <latexView/>
    </div>

    <div v-if="isMemoTime==true">
      <memoView/>
    </div>

  </div>

</template>

<script>
import VueMermaidString from "vue-mermaid-string";
import latexView from './components/latexView.vue'
import memoView from "./components/memoView.vue";

// import endent from "endent";

export default {
  data(){
    return {
      inputValue: '',
      mermaid: '',
      isFlowTime: true,
      isLatexTime: false,
      isMemoTime: false,
    }
  },
  // computed: {
  //   diagram: () => endent`
  //     graph TD
  //       JavaScript --> Frameworks
  //       JavaScript --> DateTime
  //       JavaScript --> 3D
  //       Frameworks --> Vue.js
  //       Frameworks --> React
  //       DateTime --> Moment.js
  //       DateTime --> date-fns
  //       3D --> Three.js
  //       3D --> Babylon.js
  //   `,
  // },
  components: {
    VueMermaidString,
    memoView: memoView,
    latexView: latexView,
  },
  mounted() {
    console.log(this.inputValue)
  },
  methods: {
    flowStart(){ 
      this.isFlowTime=true; this.isLatexTime=false; this.isMemoTime=false 
    },
    latexStart(){ 
      this.isFlowTime=false; this.isLatexTime=true; this.isMemoTime=false 
    },
    memoStart(){ 
      this.isFlowTime=false; this.isLatexTime=false; this.isMemoTime=true 
    },
    inputToMermaid(){
      this.mermaid = this.input.replace('flow','graph')
    }
  }
};


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

.blueBtn{
  display:inline-block; width:100%; margin-top: 0px;
}

</style>
