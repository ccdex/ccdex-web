<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    this.init();
    var vm = this;
    window.onresize = function(){
        vm.init();
      }
  },
  methods: {
     init(){
       var cssEl = document.createElement('style');
       document.documentElement.firstElementChild.appendChild(cssEl);
       var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
      var wW = window.innerWidth;// 当前窗口的宽度
      var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      cssEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
      }
  }
}
</script>

<style>
html,
body,
  {
  margin: 0;
  padding: 0;
}

*{
  margin:0;
  padding:0
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color:#FFFFFF;
  /* margin-top: 60px; */
}
</style>
