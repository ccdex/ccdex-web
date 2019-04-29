<template>
    <section>
        <Header></Header>
        <section class = "section1">       
            <img class = "star1" src="../assets/star1.png" alt="">
            <img class = "star2" src="../assets/star2.png" alt="">
            <!-- <div class = "section1-wrapper">     -->
                <p class = "label">{{LANG.section1.label1}}<br>
                {{LANG.section1.label2}}</p>
                <img class = "light" src="../assets/light.png" alt="">  
                <span class = "btn btn-start" @click = "routeExchange()">{{LANG.section1.btn1}}</span> 
                <span class = "btn btn-create" @click = "routeWallet()">{{LANG.section1.btn2}}</span>     
                      
            <!-- </div> -->
        </section>
        
        <section class = "section section2">
            <p class = "title">{{LANG.section2.title}}</p>
            <div class = "content">
                <div class = "box">
                    <img src="../assets/section2-left.png" class = "section2-image-left" alt="">
                    <p class = "label">{{LANG.section2.label1}}<br>(CCDEX)
                    </p>
                    <p class = "sec2-des">{{LANG.section2.label1_des1}}<br>
                    {{LANG.section2.label1_des2}}</p>
                    <span class = "btn-detail">{{LANG.section2.btn}}</span>
                </div>
                <div class = "box">
                    <img src="../assets/section2-middle.png" class = "section2-image-middle" alt="">
                    <p class = "label">{{LANG.section2.label2}}<br>(Xprotocol)</p>
                     <p class = "sec2-des">{{LANG.section2.label2_des1}}<br>
                    {{LANG.section2.label2_des2}}</p>
                     <span class = "btn-detail">{{LANG.section2.btn}}</span>
                </div>
                <div class = "box">
                    <img src="../assets/section2-right.png"  class = "section2-image-right" alt="">
                    <p class = "label">{{LANG.section2.label3}}</p>
                     <p class = "sec2-des">{{LANG.section2.label3_des1}}<br>
                    {{LANG.section2.label3_des2}}</p>
                     <span class = "btn-detail">{{LANG.section2.btn}}</span>
                </div>
            </div>
        </section>

        <section class = "section section3">
            <p class = "title">{{LANG.section3.title}}</p>
             <div class = "content">
                <div class = "box left">
                    <img src="../assets/section3-left.png" alt="" class = "section3-image-left">
                    <p class = "label">{{LANG.section3.label1}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section3.label1_des1}}<br>
                        {{LANG.section3.label1_des2}}</p>
                    </div>
                </div>
                <div class = "box right">
                    <img src="../assets/section3-right.png" alt="" class = "section3-image-right">
                    <p class = "label">{{LANG.section3.label2}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section3.label2_des1}}<br>
                        {{LANG.section3.label1_des2}}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class = "section section4">
             <p class = "title">{{LANG.section4.title}}</p>
              <div class = "content">
                <div class = "box left">
                    <img src="../assets/section4-left.png" alt="" class = "section4-image-left">
                    <p class = "label">{{LANG.section4.label1}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section4.label1_des1}}<br>
                        {{LANG.section4.label1_des2}}</p>
                    </div>
                </div>
                <div class = "box right">
                    <img src="../assets/section4-right.png" alt="" class = "section4-image-right">
                    <p class = "label">{{LANG.section4.label2}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section4.label2_des1}}<br>
                        {{LANG.section4.label1_des2}}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class = "section section5">
             <p class = "title">{{LANG.section5.title}}</p>
              <div class = "content">
                <div class = "box left">
                    <img src="../assets/section5-left.png" alt="" class = "section5-image-left">
                    <p class = "label">{{LANG.section5.label1}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section5.label1_des1}}<br>
                        {{LANG.section5.label1_des2}}</p>
                    </div>
                </div>
                <div class = "box right">
                    <img src="../assets/section5-right.png" alt="" class = "section5-image-right">
                    <p class = "label">{{LANG.section5.label2}}</p>
                    <div class = "des-section">
                        <p class = "des">{{LANG.section5.label2_des1}}<br>
                        {{LANG.section5.label1_des2}}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class = "section section6">
              <p class = "title">{{LANG.section6.title}}</p>
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

  mounted() {},
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
.section1 {
  z-index: 1;
  width: 100%;
  height: Rem(700);
  background-image: url("../assets/background1.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  position: relative;
  .star1 {
    position: absolute;
    top: Rem(68);
    right: Rem(69);
    width: Rem(247);
    height: Rem(159);
  }
  .star2 {
    position: absolute;
    bottom: Rem(162);
    left: Rem(110);
    width: Rem(166);
    height: Rem(159);
  }
  .label {
    font-size: Rem(40);
    margin: Rem(263) 0 0 Rem(392);
    text-align: right;
    width: Rem(530);
  }
  .light {
    position: absolute;
    width: Rem(591);
    height: Rem(466);
    top: Rem(115);
    left: Rem(943);
    -webkit-animation: animations_light 1s linear infinite;
    -moz-animation: animations_light 1s linear infinite;
    animation: animations_light 1s linear infinite;
    opacity: 1;
  }

  .btn {
    width: Rem(165);
    height: Rem(50);
    position: absolute;
    top: Rem(446);
    border-radius: 25px;
    display: inline-block;
    font-size: Rem(15);
    line-height: Rem(50);
    text-align: center;
    cursor: pointer;
    z-index: 6;
  }
  .btn-start {
    left: Rem(550);
    background-color: $green;
    color: #ffffff;
  }
  .btn-create {
    left: Rem(745);
    border: 1px solid #ffffff;
  }
}
//}
.section {
  width: 100%;
  height: Rem(827);
  position: relative;
  text-align: center;
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
    height: Rem(480);
    top: Rem(224);
    margin: auto;
    left: 0;
    right: 0;
    .box {
      flex: 1;
      border: 1px solid $green;
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
        font-size: Rem(16);
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
        text-align: center;
        .des {
          font-size: Rem(12);
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
        font-size: Rem(16);
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
        text-align: center;
        .des {
          font-size: Rem(12);
          color: $gray;
        }
      }
    }
  }
}

.section2 {
  background-image: url("../assets/background2.png");
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    width: Rem(735);
    height: Rem(423);
    .box:hover {
      border: 1px solid $green;
    }
    .box:hover .btn-detail {
      display: inline-block;
    }
    .box {
      border: none;
      margin-right: Rem(116);
      position: relative;
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
      .label {
        position: absolute;
        font-size: Rem(16);
        top: Rem(238);
        left: 0;
        right: 0;
        font-weight: bold;
      }
      .sec2-des {
        position: absolute;
        font-size: Rem(12);
        color: $gray;
        top: Rem(294);
      }
      .btn-detail {
        width: Rem(141);
        height: Rem(28);
        border-radius: 14px;
        background-color: $green;
        text-align: center;
        line-height: Rem(28);
        display: none;
        font-size: Rem(16);
        position: absolute;
        bottom: Rem(29);
        left: 0;
        right: 0;
        margin: 0 auto;
        cursor: pointer;
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
}
@-webkit-keyframes animations_light {
  0% {
   opacity: 1;
  }
  50% {
   opacity: 0.6;
  }
  100% {
    opacity: 0.2;
  }
}
@-moz-keyframes animations_light {
  0% {
   opacity: 1;
  }
  50% {
   opacity: 0.6;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes animations_light {
  0% {
   opacity: 1;
  }
  50% {
   opacity: 0.6;
  }
  100% {
    opacity: 0.2;
  }
}
</style>