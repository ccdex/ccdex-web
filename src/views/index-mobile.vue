<template>
    <div class = "index-mobile">
        <HeaderMobile></HeaderMobile>
        <div class = "body">
            <div class = "section-bg">
                <img src="../assets/light.png" alt="" class = "light">
                 <p class = "label">
                  <span>{{LANG.section1.label1}}</span>
                  <span class = "highlight">{{LANG.section1.label3}}</span>
                  <span>{{LANG.section1.label4}}</span>
                </p>
                <p class = "sec-label">{{LANG.section1.label2}}</p>
                <a :href = "config.walletUrl" target="_blank" class = "try">{{LANG.section1.btn}}</a>
            </div>
            <section class = "section section2">
                <p class = "title">{{LANG.section2.title}}</p>
                <div class = "box">
                    <img src="../assets/section2-left.svg" alt="" class = "section2-left-image">
                    <p class = "label">{{LANG.section2.label1}}</p>
                    <p class = "sec2-des">{{LANG.section2.label1_des1}}<br>
                    {{LANG.section2.label1_des2}}</p>
                </div>
                <div class = "box">
                    <img src="../assets/section2-middle.svg" alt="" class = "section2-middle-image">
                    <p class = "label">{{LANG.section2.label2}}</p>
                    <p class = "sec2-des">{{LANG.section2.label2_des1}}<br>
                    {{LANG.section2.label2_des2}}</p>
                </div>
                <div class = "box">
                    <img src="../assets/section2-right.svg" alt="" class = "section2-right-image">
                    <p class = "label">{{LANG.section2.label3}}</p>
                    <p class = "sec2-des">{{LANG.section2.label3_des1}}<br>
                    {{LANG.section2.label3_des2}}</p>
                </div>
            </section>

            <section class = "section section3">
                <p class = "title">{{LANG.section3.title}}</p>
                <div class = "box">
                    <img src="../assets/section3-left.svg" alt="" class = "section3-left">
                    <p class = "label">{{LANG.section3.label1}}</p>
                    <p class = "des">{{LANG.section3.label1_des1}}<br>
                    {{LANG.section3.label1_des2}}
                    </p>
                </div>
                <div class = "box">
                    <img src="../assets/section3-right.svg" alt="" class = "section3-right">
                    <p class = "label">{{LANG.section3.label2}}</p>
                     <p class = "des">{{LANG.section3.label2_des1}}<br>
                    {{LANG.section3.label2_des2}}
                    </p>
                </div>
            </section>

             <section class = "section section4">
                <p class = "title">{{LANG.section4.title}}</p>
                <div class = "box">
                    <img src="../assets/section4-left.svg" alt="" class = "section4-left">
                    <p class = "label">{{LANG.section4.label1}}</p>
                     <p class = "des">{{LANG.section4.label1_des1}}<br>
                    {{LANG.section4.label1_des2}}
                    </p>
                </div>
                <div class = "box">
                    <img src="../assets/section4-right.svg" alt="" class = "section4-right">
                    <p class = "label">{{LANG.section4.label2}}</p>
                     <p class = "des">{{LANG.section4.label2_des1}}<br>
                    {{LANG.section4.label2_des2}}
                    </p>
                </div>
            </section>

             <section class = "section section5">
                <p class = "title">{{LANG.section5.title}}</p>
                 <div class = "box">
                    <img src="../assets/section5-left.svg" alt="" class = "section5-left">
                    <p class = "label">{{LANG.section5.label1}}</p>
                     <p class = "des">{{LANG.section5.label1_des1}}<br>
                    {{LANG.section5.label1_des2}}
                    </p>
                </div>
                <div class = "box">
                    <img src="../assets/section5-right.svg" alt="" class = "section5-right">
                    <p class = "label">{{LANG.section5.label1}}</p>
                     <p class = "des">{{LANG.section5.label1_des1}}<br>
                    {{LANG.section5.label1_des2}}
                    </p>
                </div>
            </section>

            <section class = "section-table">
                <p class = "title">{{LANG.section6.title}}</p>
                <img :src = "currentLan==='zh'?require('../assets/table.svg'):require('../assets/en-table.svg')" alt= "" class = "table">
            </section>

        </div>
        <FooterMobile></FooterMobile>
    </div>
</template>
<script>
import HeaderMobile from "@/components/HeaderMobile";
import FooterMobile from "@/components/FooterMobile";
import { config } from "@/config";
export default {
  components: {
    HeaderMobile,
    FooterMobile
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/base.scss";
.index-mobile {
  .body {
    .section-bg {
      height:toRem(2234);
      width: 100%;
      background-image: url("../assets/bg-mobile.svg");
      background-size: cover;
      background-position: center center;
      position: relative;
      overflow: hidden;
      text-align: center;
      .light {
        width: toRem(1297);
        height: toRem(1022);
        position: absolute;
        bottom: toRem(209);
        right: toRem(110);
        opacity: 0.2;
      }
      .label {
          font-size: toRem(155);
          margin: toRem(428) auto toRem(139);
          font-weight: bold;
          width:70%;
          .highlight{
            color:$green;
          }
        }
        .sec-label{
          font-size:toRem(93);
          font-weight: bold;
        }
      .try {
          padding:toRem(80) toRem(200);
          border-radius: 25px;
          display: inline-block;
          font-size: toRem(73);
          line-height: toRem(73);
          text-align: center;
          cursor: pointer;
          z-index: 6;
          background-color: $green;
          color: #ffffff;
          position: relative;
          margin:toRem(350) auto 0;
        }
    }
    .section {
      text-align: center;
      font-size: toRem(124);
      padding:0 toRem(134);
      overflow: hidden;
      .title {
        margin-top: toRem(255);
        padding: 0 toRem(200);
        font-weight: bold;
        // margin-bottom: toRem(300);
      }
      .box {
        margin-top:toRem(200);
        padding-bottom:toRem(200);
        border-bottom:1px solid #666666;
        .section2-left-image {
          width: toRem(960);
          height: toRem(929);
        }
        .section2-middle-image {
          width: toRem(975);
          height: toRem(1064);
        }
        .section2-right-image {
          width: toRem(975);
          height: toRem(937);
        }
        .section3-left {
          width: toRem(960);
          height: toRem(689);
        }
        .section3-right {
          width: toRem(1175);
          height: toRem(864);
        }
        .section4-left {
          width: toRem(958);
          height: toRem(1030);
        }
        .section4-right {
          width: toRem(979);
          height: toRem(863);
        }
        .section5-left {
          width: toRem(923);
          height: toRem(865);
        }
        .section5-right {
          width: toRem(980);
          height: toRem(863);
        }
        .label {
          margin-top: toRem(300);
          font-weight: lighter;
          font-size:toRem(124);
        }
        .sec2-des,.des {
          font-size: toRem(93);
          color: #cccccc;
          margin-top: toRem(200);
          text-align: left;
        }
      }
      .box:last-child{
          border-bottom:none;
      }
    }
    .section2 {
      background-color: $black3;
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
    .section-table {
      text-align: center;
      background-color: $black4;
      overflow: hidden;
      .title{
        margin-top:toRem(255);
        font-size:toRem(124);
        font-weight: bold;
      }
      .table {
        margin: toRem(215) auto;
        width: 95%;
      }
    }
  }
}
</style>
