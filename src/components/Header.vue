<template>
    <section class = "header">
        <div class = "header-wrapper">
            <img src="../assets/logo.svg" alt="" class = "logo">
            <ul class = "nav">
                <li class = "nav-li"><span>{{LANG.header.entry1}}</span></li>
                <li class = "nav-li"><a :href = "exchangeUrl" target="_blank">{{LANG.header.entry2}}</a></li>
                <li class = "nav-li"><a :href = "walletUrl" target="_blank">{{LANG.header.entry3}}</a></li>
                <li class = "nav-li"><a :href = "explorerUrl" target="_blank">{{LANG.header.entry4}}</a></li>
                <li class = "nav-li"><span>{{LANG.header.entry5}}</span></li>
                <li class = "nav-li li-lan">
                  <img class = "lan-img" src = "../assets/earth.png" alt="">
                  {{currentLan==='zh'?'简体中文':'English'}}
                   <div class = "ul-lan">
                     <p @click = "changeToZh">简体中文</p>
                     <p @click = "changeToEn">English</p>
                   </div> 
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import { config } from "@/config";
export default {
  data() {
    let lan = localStorage.getItem("CCDEX_LANGUAGE_TYPE");
    let currentLan;
    if (lan && lan === "zh") {
      currentLan = "zh";
    } else {
      currentLan = "en";
    }
    return {
      exchangeUrl: config.exchangeUrl,
      walletUrl: config.walletUrl,
      explorerUrl: config.explorerUrl,
      currentLan: currentLan
    };
  },
  mounted() {},
  methods: {
    changeToZh() {
      localStorage.setItem("CCDEX_LANGUAGE_TYPE", "zh");
      this.currentLan = "zh";
      location.reload()
    },
    changeToEn() {
      localStorage.setItem("CCDEX_LANGUAGE_TYPE", "en");
      this.currentLan = "en";
      location.reload()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/base.scss";
.header {
  height: Rem(100);
  background-color: $black1;
  .header-wrapper {
    margin: 0 auto;
    width: Rem(1140);
    height: Rem(100);
    line-height: Rem(100);
    //min-width: 800px;
    img {
      width: Rem(158);
      height: Rem(45);
      vertical-align: middle;
      text-align: left;
      display: inline-block;
    }
    .nav {
      float: right;
      list-style: none;
      margin: 0;
      .nav-li {
        font-size: Rem(20);
        float: left;
        margin-left: Rem(40);
        cursor: pointer;
        a {
          text-decoration: none;
          color: #ffffff;
        }
        a:hover {
          color: $green;
        }
      }
      .li-lan {
        position: relative;
        .lan-img {
          width: Rem(20);
          height: Rem(20);
          margin-right: Rem(10);
        }
        .ul-lan {
          display: none;
          position: absolute;
          top: Rem(66);
          right: Rem(4);
          z-index: 6;
          p{
            background-color: $black2;
            padding:0 Rem(10);
            width:Rem(100);
            line-height: Rem(40);
            text-align: center;
            }
            
          }
          p:hover {
            color: $green;
          }
        }
      }
      .li-lan:hover {
        .ul-lan {
          display: block;
        }
      }
      .nav-li:hover span {
        color: $green;
      }
    }
  }
</style>
