<template>
    <section class = "homepage">
        <Header></Header>
        <section class = "section1">
          <div class = "section1-wrapper">   
            <!-- <img class = "star1" src="../assets/star1.svg" alt="">
            <img class = "star2" src="../assets/star2.svg" alt=""> -->
             
                <p class = "label">
                  <span>{{LANG.section1.label1}}</span>
                  <span class = "highlight">{{LANG.section1.label3}}</span>
                  <span>{{LANG.section1.label4}}</span>
                </p>
                <p class = "sec-label">{{LANG.section1.label2}}</p>
                <!-- <span class = "btn btn-start" @click = "routeExchange()">{{LANG.section1.btn1}}</span> 
                <span class = "btn btn-create" @click = "routeWallet()">{{LANG.section1.btn2}}</span>     -->
                
                <a :href = "config.walletUrl" target="_blank" class = "try">{{LANG.section1.btn}}</a>

                <div class = "light-box">
                  <img class = "light" src="../assets/light.png" alt="">  
                  <img class = "spot" id = "spot1" src="../assets/btc.svg" alt="">
                  <img class = "spot" id = "spot2" src="../assets/eth.svg" alt="">
                </div>
                
                </div>     
        </section>
        
        <section class = "section section2">
          <div class = "section-wrapper">   
            <p class = "title">{{LANG.section2.title}}</p>
            <img class = "line" src="../assets/line.png" alt="">
            <div class = "content">            
                <div class = "box">                
                    <img src="../assets/section2-left.svg" class = "section2-image-left" alt="">
                    <div class = "outer-round">
                      <div class = "inner-round"></div>
                    </div>
                    <p class = "label">{{LANG.section2.label1}}</p>
                   <p class = "sec2-des">{{LANG.section2.label1_des1}}<br>
                    {{LANG.section2.label1_des2}}</p>
                    <!-- <span class = "btn-detail">{{LANG.section2.btn}}</span> -->
                </div>
                <div class = "box">
                    <img src="../assets/section2-middle.svg" class = "section2-image-middle" alt="">
                    <div class = "outer-round">
                      <div class = "inner-round"></div>
                    </div>
                    <p class = "label">{{LANG.section2.label2}}</p>
                     <p class = "sec2-des">{{LANG.section2.label2_des1}}<br>
                    {{LANG.section2.label2_des2}}</p>
                    <!-- <span class = "btn-detail">{{LANG.section2.btn}}</span> -->
                </div>
                <div class = "box">
                    <img src="../assets/section2-right.svg"  class = "section2-image-right" alt="">
                    <div class = "outer-round">
                      <div class = "inner-round"></div>
                    </div>
                    <p class = "label">{{LANG.section2.label3}}</p>
                     <p class = "sec2-des">{{LANG.section2.label3_des1}}<br>
                    {{LANG.section2.label3_des2}}</p>
                    <!-- <span class = "btn-detail">{{LANG.section2.btn}}</span> -->
                </div>
            </div>
          </div>
        </section>

         <section class = "section section3">
           <div class = "section-wrapper">
            <p class = "title">{{LANG.section3.title}}</p>
             <div class = "content">
                <div class = "box left">
                    <img src="../assets/section3-left.svg" alt="" class = "section3-image-left">
                    <p class = "label">{{LANG.section3.label1}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section3.label1_des1}}<br>
                        {{LANG.section3.label1_des2}}</p>
                    </div>
                </div>
                <div class = "box right">
                    <img src="../assets/section3-right.svg" alt="" class = "section3-image-right">
                    <p class = "label">{{LANG.section3.label2}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section3.label2_des1}}<br>
                        {{LANG.section3.label2_des2}}</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section class = "section section4">
          <div class = "section-wrapper">
             <p class = "title">{{LANG.section4.title}}</p>
              <div class = "content">
                <div class = "box left">
                    <img src="../assets/section4-left.svg" alt="" class = "section4-image-left">
                    <p class = "label">{{LANG.section4.label1}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section4.label1_des1}}<br>
                        {{LANG.section4.label1_des2}}</p>
                    </div>
                </div>
                <div class = "box right">
                    <img src="../assets/section4-right.svg" alt="" class = "section4-image-right">
                    <p class = "label">{{LANG.section4.label2}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section4.label2_des1}}<br>
                        {{LANG.section4.label2_des2}}</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section class = "section section5">
          <div class = "section-wrapper">
             <p class = "title">{{LANG.section5.title}}</p>
              <div class = "content">
                <div class = "box left">
                    <img src="../assets/section5-left.svg" alt="" class = "section5-image-left">
                    <p class = "label">{{LANG.section5.label1}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section5.label1_des1}}<br>
                        {{LANG.section5.label1_des2}}</p>
                    </div>
                </div>
                <div class = "box right">
                    <img src="../assets/section5-right.svg" alt="" class = "section5-image-right">
                    <p class = "label">{{LANG.section5.label2}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section5.label2_des1}}<br>
                        {{LANG.section5.label2_des2}}</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section class = "section section6">
          <div class = "section-wrapper section6-wrapper">
              <p class = "title">{{LANG.section6.title}}</p>
              <img :src = "currentLan==='zh'?require('../assets/table.svg'):require('../assets/en-table.svg')" alt= "" class = "table">
        </div>
        </section>
       <Footer></Footer>
    </section>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from "@/config";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    let lan = localStorage.getItem("CCDEX_LANGUAGE_TYPE");
    let currentLan;
    if (lan && lan === "zh") {
      currentLan = "zh";
    } else {
      currentLan = "en";
    }
    return {
      currentLan: currentLan,
      config:config
    };
  },
  mounted() {
   if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
           this.$router.push('/mobile')
      }
    var total = document.documentElement.clientHeight;
    var headerHight = document.getElementsByClassName('header')[0].offsetHeight;
    document.getElementsByClassName('section1')[0].style.height = (total - headerHight)+'px' 
    document.getElementsByClassName('section1-wrapper')[0].style.height = (total - headerHight)+'px' 
    document.getElementById('spot1').classList.add('spot1');
    document.getElementById('spot2').classList.add('spot2');
  },
  methods: {
    routeExchange() {
      window.location = config.exchangeUrl;
    },
    routeWallet() {
      window.location = config.walletUrl;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/base.scss";
.homepage {
  .section1 {
    overflow-x:hidden;
    z-index: 0;
    width: 100%;
    min-height: 680px;
    background-image: url("../assets/bg1.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    .section1-wrapper {
      overflow-x:hidden;
      margin: 0 auto;
      width: Rem(1140);
      min-height: 680px;
      position: relative;
      overflow: hidden;
      text-align: center;
      .star1 {
        position: absolute;
        top: Rem(68);
        right: Rem(69);
        width: Rem(247);
        height: Rem(159);
        -webkit-animation: animations_star1 3s linear infinite;
        -moz-animation: animations_star1 3s linear infinite;
        animation: animations_star1 3s linear infinite;
      }
      .star2 {
        position: absolute;
        bottom: Rem(20);
        left: Rem(110);
        width: Rem(166);
        height: Rem(159);
        -webkit-animation: animations_star2 3s linear infinite;
        -moz-animation: animations_star2 3s linear infinite;
        animation: animations_star2 3s linear infinite;
      }
    
        .label {
          font-size: Rem(70);
          margin: Rem(240) auto Rem(90);
          font-weight: bold;
          .highlight{
            color:$green;
          }
        }
        .sec-label{
          font-size:Rem(40);
          margin-bottom:Rem(60);
        }
        .try {
          padding:Rem(20) Rem(40);
          border-radius: 25px;
          display: inline-block;
          font-size: Rem(30);
          line-height: Rem(20);
          text-align: center;
          cursor: pointer;
          z-index: 6;
          background-color: $green;
          color: #ffffff;
          position: relative;
          font-weight: bold;
        }
  
      .light-box {
        position: absolute;
        top: Rem(220);
        right: 0;
        z-index: 1;
        .light {
          z-index:1;
          width: Rem(591);
          height: Rem(466);
          -webkit-animation: animations_light 3s linear infinite;
          -moz-animation: animations_light 3s linear infinite;
          animation: animations_light 3s linear infinite;
          opacity: 0.3;
        }
        .spot {
          position: absolute;
          width: Rem(40);
          height: Rem(40);
          display: inline-block;
          // top:Rem(158);
          // left:Rem(280);
          top: Rem(150);
          left: Rem(276);
          opacity: 0.3;
        }
        .spot1 {
          -webkit-animation: animations_spot1 3s linear infinite;
          -moz-animation: animations_spot1 3s linear infinite;
          animation: animations_spot1 3s linear infinite;
        }
        .spot2 {
          -webkit-animation: animations_spot2 3s linear infinite;
          -moz-animation: animations_spot2 3s linear infinite;
          animation: animations_spot2 3s linear infinite;
        }
      }
    }
    @media screen and (max-width:480px){
      .section1-wrapper {
        width: 100%;
      }
    }
  }
  //}
  .section {
    width: 100%;
    height: Rem(827);
    text-align: center;
    //min-width: 1000px;
    .section-wrapper {
      width: Rem(1140);
      height: Rem(827);
      margin: 0 auto;
      position: relative;
      .title {
        position: absolute;
        font-size: Rem(40);
        top: Rem(100);
        left: 0;
        right: 0;
      }
      .content {
        display: flex;
        position: absolute;
        width: Rem(1006);
        // height: Rem(480);
        top: Rem(224);
        margin: auto;
        left: 0;
        right: 0;
        .box {
          flex: 1;
          // border: 1px solid $green;
          position: relative;
        }
        .left {
          margin-right: Rem(164);
          .section3-image-left {
            margin-top: Rem(60);
            width: Rem(362);
            height: Rem(261);
          }
          .section4-image-left {
            margin-top: Rem(56);
            width: Rem(259);
            height: Rem(277);
          }
          .section5-image-left {
            margin-top: Rem(70);
            width: Rem(235);
            height: Rem(251);
          }
          .label {
            font-size: Rem(20);
            position: absolute;
            top: Rem(350);
            left: 0;
            right: 0;
          }
          .des-section {
            position: absolute;
            top: Rem(386);
            left: 0;
            right: 0;
            text-align: left;
            padding:0 Rem(30);
            .des {
              text-align: left;
              font-size: Rem(18);
              color: $gray;
            }
          }
        }
        .right {
          .section3-image-right {
            margin-top: Rem(53);
            width: Rem(364);
            height: Rem(268);
          }
          .section4-image-right {
            margin-top: Rem(85);
            width: Rem(281);
            height: Rem(248);
          }
          .section5-image-right {
            margin-top: Rem(72);
            width: Rem(284);
            height: Rem(250);
          }
          .label {
            font-size: Rem(20);
            position: absolute;
            top: Rem(350);
            left: 0;
            right: 0;
          }
          .des-section {
            // margin:0 auto;
            position: absolute;
            top: Rem(386);
            left: 0;
            right: 0;
            text-align: left;
            padding:0 Rem(30);
            .des {
              font-size: Rem(18);
              color: $gray;
            }
          }
        }
      }
    }
    @media screen and (max-width:480px){
      .section-wrapper{
        width: 100%;
        .content{
          display: block;
          .box{
            width:100%;
          }
        }
      }
    }
  }

  .section2 {
    background-image: url("../assets/background2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    .line {
      position: absolute;
      top: Rem(371);
      left: 0;
      right: 0;
      margin: 0 auto;
      width: Rem(1140);
      height: Rem(114);
    }
    .content {
      width: Rem(850);
      // .box:hover {
      //   border: 1px solid $green;
      // }
      // .box:hover .btn-detail {
      //   display: inline-block;
      // }
      .box {
        // border: 1px solid $green;
        line-height: 0;
        margin-right: Rem(116);
        position: relative;
        padding: Rem(238) 0 Rem(30) 0;
        // min-width: 100px;
        .section2-image-left {
          width: Rem(122);
          height: Rem(118);
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          top: Rem(71);
        }
        .section2-image-middle {
          width: Rem(122);
          height: Rem(133);
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          top: Rem(56);
        }
        .section2-image-right {
          width: Rem(128);
          height: Rem(123);
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          top: Rem(66);
        }
        .outer-round {
          width: Rem(21);
          height: Rem(21);
          background-color: $green;
          border-radius: 50%;
          position: absolute;
          top: Rem(195);
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
          .inner-round {
            width: Rem(7);
            height: Rem(7);
            border-radius: 50%;
            background-color: #ffffff;
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 50%;
            margin: Rem(-3.5) 0 0 Rem(-3.5);
          }
        }
        .label {
          font-size: Rem(20);
          top: Rem(238);
          font-weight: bold;
          margin-bottom: Rem(20);
          line-height: Rem(24);
        }
        .sec2-des {
          padding: 0 Rem(12);
          font-size: Rem(18);
          color: $gray;
          margin-bottom: Rem(36);
          line-height: Rem(24);
          text-align: left;
        }
        .btn-detail {
          padding: Rem(6) Rem(36);
          border-radius: 14px;
          background-color: $green;
          text-align: center;
          line-height: Rem(28);
          display: none;
          font-size: Rem(16);
          cursor: pointer;
          vertical-align: top;
        }
      }
      .box:last-child {
        margin-right: 0;
      }
    }
  }
  .section3 {
    background-color: $black2;
  }
  .section4 {
    background-color: $black3;
  }
  .section5 {
    background-color: $black2;
  }
  .section6 {
    background-color: $black4;
    height: Rem(1217);
    overflow: hidden;
    .section6-wrapper {
      height:Rem(1217);
      .table {
        position: absolute;
        left: 0;
        right: 0;
        top: Rem(235);
        width: Rem(1170);
        height: Rem(859);
        margin: 0 auto;
      }
       @media screen and (max-width:480px){
         .table{
           width:100%;
         }
      }
    }
  }
 
  @-webkit-keyframes animations_light {
     0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.3;
    }
  }
  @-moz-keyframes animations_light {
   0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.3;
    }
  }
  @keyframes animations_light {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.3;
    }
  }
  @-webkit-keyframes animations_spot1 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    33% {
      -webkit-transform: translate(Rem(200), 0);
      -moz-transform: translate(Rem(200), 0);
      transform: translate(Rem(200), 0);
    }
    66% {
      -webkit-transform: translate(Rem(0), Rem(200));
      -moz-transform: translate(Rem(0), Rem(200));
      transform: translate(Rem(0), Rem(200));
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @-moz-keyframes animations_spot1 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    33% {
      -webkit-transform: translate(Rem(200), 0);
      -moz-transform: translate(Rem(200), 0);
      transform: translate(Rem(200), 0);
    }
    66% {
      -webkit-transform: translate(Rem(0), Rem(200));
      -moz-transform: translate(Rem(0), Rem(200));
      transform: translate(Rem(0), Rem(200));
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes animations_spot1 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    33% {
      -webkit-transform: translate(Rem(200), 0);
      -moz-transform: translate(Rem(200), 0);
      transform: translate(Rem(200), 0);
    }
    66% {
      -webkit-transform: translate(Rem(0), Rem(200));
      -moz-transform: translate(Rem(0), Rem(200));
      transform: translate(Rem(0), Rem(200));
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @-webkit-keyframes animations_spot2 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    33% {
      -webkit-transform: translate(Rem(-200), 0);
      -moz-transform: translate(Rem(-200), 0);
      transform: translate(Rem(-200), 0);
    }
    66% {
      -webkit-transform: translate(0, Rem(200));
      -moz-transform: translate(0, Rem(200));
      transform: translate(0, Rem(200));
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @-moz-keyframes animations_spot2 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    33% {
      -webkit-transform: translate(Rem(-200), 0);
      -moz-transform: translate(Rem(-200), 0);
      transform: translate(Rem(-200), 0);
    }
    66% {
      -webkit-transform: translate(0, Rem(200));
      -moz-transform: translate(0, Rem(200));
      transform: translate(0, Rem(200));
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes animations_spot2 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    33% {
      -webkit-transform: translate(Rem(-200), 0);
      -moz-transform: translate(Rem(-200), 0);
      transform: translate(Rem(-200), 0);
    }
    66% {
      -webkit-transform: translate(0, Rem(200));
      -moz-transform: translate(0, Rem(200));
      transform: translate(0, Rem(200));
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @-webkit-keyframes animations_star1 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    25% {
      -webkit-transform: translate(20px, 20px);
      -moz-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
    50% {
      -webkit-transform: translate(40px, 40px);
      -moz-transform: translate(40px, 40px);
      transform: translate(40px, 40px);
    }
    75% {
      -webkit-transform: translate(20px, 20px);
      -moz-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @-moz-keyframes animations_star1 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    25% {
      -webkit-transform: translate(20px, 20px);
      -moz-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
    50% {
      -webkit-transform: translate(40px, 40px);
      -moz-transform: translate(40px, 40px);
      transform: translate(40px, 40px);
    }
    75% {
      -webkit-transform: translate(20px, 20px);
      -moz-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }

  @keyframes animations_star1 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    25% {
      -webkit-transform: translate(20px, 20px);
      -moz-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
    50% {
      -webkit-transform: translate(40px, 40px);
      -moz-transform: translate(40px, 40px);
      transform: translate(40px, 40px);
    }
    75% {
      -webkit-transform: translate(20px, 20px);
      -moz-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @-webkit-keyframes animations_star2 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    25% {
      -webkit-transform: translate(0, -20px);
      -moz-transform: translate(0, -20px);
      transform: translate(0, -20px);
    }
    50% {
      -webkit-transform: translate(0, -40px);
      -moz-transform: translate(0, -40px);
      transform: translate(0, -40px);
    }
    75% {
      -webkit-transform: translate(0, -20px);
      -moz-transform: translate(0, -20px);
      transform: translate(0, -20px);
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
  @-moz-keyframes animations_star2 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    25% {
      -webkit-transform: translate(0, -20px);
      -moz-transform: translate(0, -20px);
      transform: translate(0, -20px);
    }
    50% {
      -webkit-transform: translate(0, -40px);
      -moz-transform: translate(0, -40px);
      transform: translate(0, -40px);
    }
    75% {
      -webkit-transform: translate(0, -20px);
      -moz-transform: translate(0, -20px);
      transform: translate(0, -20px);
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }

  @keyframes animations_star2 {
    0% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
    25% {
      -webkit-transform: translate(0, -20px);
      -moz-transform: translate(0, -20px);
      transform: translate(0, -20px);
    }
    50% {
      -webkit-transform: translate(0, -40px);
      -moz-transform: translate(0, -40px);
      transform: translate(0, -40px);
    }
    75% {
      -webkit-transform: translate(0, -20px);
      -moz-transform: translate(0, -20px);
      transform: translate(0, -20px);
    }
    100% {
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      transform: translate(0);
    }
  }
}
</style>
