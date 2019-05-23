<template>
    <section class = "header-mobile">
        <img src="../assets/logo.svg" alt="" class = "logo">
        <img src="../assets/menu.svg" alt="" class = "menu" @click = "expandMenu()">
        <ul v-if= "expand">
            <li class = "nav-li"><span>{{LANG.header.entry1}}</span></li>
            <li class = "nav-li"><a :href = "exchangeUrl" target="_blank">{{LANG.header.entry2}}</a></li>
            <li class = "nav-li"><a :href = "walletUrl" target="_blank">{{LANG.header.entry3}}</a></li>
            <li class = "nav-li"><a :href = "explorerUrl" target="_blank">{{LANG.header.entry4}}</a></li>
            <li class = "nav-li" @click = "changetoEn"><span>English</span></li>
            <li class = "nav-li" @click = "changetoZh"><span>简体中文</span></li>
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
      },

    changetoEn(){
      localStorage.setItem("CCDEX_LANGUAGE_TYPE", "en");
      this.currentLan = "en";
      location.reload()
    },

    changetoZh(){
      localStorage.setItem("CCDEX_LANGUAGE_TYPE", "zh");
      this.currentLan = "zh";
      location.reload()
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
      position: absolute;
      top:toRem(80);
      right:toRem(100);
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
        z-index: 9;
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

