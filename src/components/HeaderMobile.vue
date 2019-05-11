<template>
    <section class = "header-mobile">
        <img src="../assets/logo.svg" alt="" class = "logo">
        <img src="../assets/menu.svg" alt="" class = "menu" @click = "expandMenu()">
        <ul v-if = "expand">
            <li class = "nav-li"><span>{{LANG.header.entry1}}</span></li>
            <li class = "nav-li"><a :href = "exchangeUrl">{{LANG.header.entry2}}</a></li>
            <li class = "nav-li"><a :href = "walletUrl">{{LANG.header.entry3}}</a></li>
            <li class = "nav-li"><a :href = "explorerUrl">{{LANG.header.entry4}}</a></li>
            <li class = "nav-li"><span>{{LANG.header.entry5}}</span></li>
        </ul>
    </section>
</template>
<script>
import { config } from "@/config";
export default {
  data() {
    let lan = localStorage.getItem("CCDEX_LANGUAGE_TYPE");
    let currentLan = 'en'
    return {
      exchangeUrl: config.exchangeUrl,
      walletUrl: config.walletUrl,
      explorerUrl: config.explorerUrl,
      currentLan: currentLan,
      expand:false
    };
  },
  methods:{
      expandMenu(){
          this.expand = !this.expand;
      }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/base.scss";
.header-mobile {
  width: 100%;
  height: toRem(317);
  line-height: toRem(317);
  background-color: $black1;
  position: relative;
  .logo {
    width: toRem(489);
    vertical-align: middle;
    margin-left: toRem(136);
  }
  .menu{
      width:toRem(138);
      height: toRem(138);
      float: right;
      margin:toRem(91)toRem(122);
      vertical-align: middle;
  }
  ul {
    list-style: none;
    position: absolute;
    right:0;
    z-index:9;
    .nav-li {
        color:#FFFFFF;
        padding-left:toRem(94);
        width:toRem(1113);
        a{
            color:#FFFFFF;
        }
    }
    .nav-li:nth-child(2n){
        background-color: $black6
    }
    .nav-li:nth-child(2n+1){
        background-color: $black3
    }
  }
}
</style>

