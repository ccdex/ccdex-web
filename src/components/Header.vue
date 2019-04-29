<template>
    <section class = "header">
        <div class = "header-wrapper">
            <img src="../assets/logo.png" alt="">
            <ul class = "nav">
                <li class = "nav-li"><span>{{LANG.header.entry1}}</span></li>
                <li class = "nav-li"><a :href = "exchangeUrl">{{LANG.header.entry2}}</a></li>
                <li class = "nav-li"><a :href = "walletUrl">{{LANG.header.entry3}}</a></li>
                <li class = "nav-li"><a :href = "explorerUrl">{{LANG.header.entry4}}</a></li>
                <li class = "nav-li"><span>{{LANG.header.entry5}}</span></li>
                <li class = "nav-li li-lan">
                  <img class = "lan-img" :src = "currentLan ==='zh'?require('../assets/zh.png'):require('../assets/en.png')" alt="">
                  {{currentLan==='zh'?LANG.header.entry6:LANG.header.entry7}}
                  <span class = "sanjiao"></span> 
                   <ul class = "ul-lan">
                     <li @click = "changeToZh">
                      <img class = "lan-img" src = '../assets/zh.png' alt="">
                       {{LANG.header.entry6}}
                     </li>
                     <li @click = "changeToEn">
                       <img class = "lan-img" src = "../assets/en.png" alt="">
                       {{LANG.header.entry7}}
                     </li>
                   </ul> 
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
    if (!lan || lan === "zh") {
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
      this.$router.go(0);
    },
    changeToEn() {
      localStorage.setItem("CCDEX_LANGUAGE_TYPE", "en");
      this.currentLan = "en";
      this.$router.go(0);
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
        font-size: Rem(14);
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
        .sanjiao {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #ffffff;
          display: inline-block;
          margin-left: Rem(20);
        }
        .lan-img {
          width: Rem(16);
          height: Rem(16);
          margin-right: Rem(10);
        }
        .ul-lan {
          display: none;
          position: absolute;
          list-style: none;
          top: Rem(66);
          right: Rem(4);
          z-index: 6;
          li {
            height: Rem(30);
            line-height: Rem(30);
            width: Rem(112);
            background-color: $black2;
            .lan-img {
              width: Rem(16);
              height: Rem(16);
              margin-right: Rem(10);
              margin-left: Rem(16);
            }
          }
          li:hover {
            color: $green;
          }
        }
      }
      .li-lan:hover {
        .ul-lan {
          display: block;
        }
        .sanjiao {
          -webkit-animation: animations 0.1s linear;
          -moz-animation: animations 0.1s linear;
          animation: animations 0.1s linear;
          transform: rotate(180deg);
        }
        @-webkit-keyframes animations {
          0% {
            -webkit-transform: rotate(0);
          }
          50% {
            -webkit-transform: rotate(90deg);
          }
          100% {
            -webkit-transform: rotate(180deg);
          }
        }
        @-moz-keyframes animations {
          0% {
            -moz-transform: rotate(0);
          }
          50% {
            -moz-transform: rotate(90deg);
          }
          100% {
            -moz-transform: rotate(180deg);
          }
        }
        @keyframes animations {
          0% {
            transform: rotate(0);
          }
          50% {
            transform: rotate(90deg);
          }
          100% {
            transform: rotate(180deg);
          }
        }
      }
      .nav-li:hover span {
        color: $green;
      }
    }
  }
}
</style>
