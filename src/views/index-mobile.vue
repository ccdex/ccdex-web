<template>
    <div class = "index-mobile">
        <HeaderMobile></HeaderMobile>
        <section class = "body">
            <section class = "section-bg">
                <img src="../assets/light.png" alt="" class = "light">
            </section>

            <section class = "section1">
                 <p class = "label">{{LANG.section1.label1}}<br>
                {{LANG.section1.label2}}</p>
                <div class = "btns">
                    <span class = "btn btn-start" @click = "routeExchange()">{{LANG.section1.btn1}}</span> 
                    <span class = "btn btn-create" @click = "routeWallet()">{{LANG.section1.btn2}}</span> 
                </div>
            </section>

            <section class = "section section2">
                <p class = "title">{{LANG.section2.title}}</p>
                <div class = "box">
                    <img src="../assets/section2-left.png" alt="" class = "section2-left-image">
                    <p class = "label">{{LANG.section2.label1}}</p>
                    <p class = "sec2-des">{{LANG.section2.label1_des1}}<br>
                    {{LANG.section2.label1_des2}}</p>
                </div>
                <div class = "box">
                    <img src="../assets/section2-middle.png" alt="" class = "section2-middle-image">
                    <p class = "label">{{LANG.section2.label2}}</p>
                    <p class = "sec2-des">{{LANG.section2.label2_des1}}<br>
                    {{LANG.section2.label2_des2}}</p>
                </div>
                <div class = "box">
                    <img src="../assets/section2-right.png" alt="" class = "section2-right-image">
                    <p class = "label">{{LANG.section2.label3}}</p>
                    <p class = "sec2-des">{{LANG.section2.label3_des1}}<br>
                    {{LANG.section2.label3_des2}}</p>
                </div>
            </section>

            <section class = "section section3">
                <p class = "title">{{LANG.section3.title}}</p>
                <div>
                    <img src="../assets/section3-left.png" alt="">
                    <p class = "label">{{LANG.section3.label1}}></p>
                </div>
                <div>
                    <img src="../assets/section3-right.png" alt="">
                    <p class = "label">{{LANG.section3.label2}}></p>
                </div>
            </section>

             <section class = "section section4">
                <p class = "title">{{LANG.section4.title}}</p>
                <div>
                    <img src="../assets/section4-left.png" alt="">
                    <p class = "label">{{LANG.section4.label1}}></p>
                </div>
                <div>
                    <img src="../assets/section4-right.png" alt="">
                    <p class = "label">{{LANG.section4.label2}}></p>
                </div>
            </section>

             <section class = "section section5">
                <p class = "title">{{LANG.section5.title}}</p>
                 <div>
                    <img src="../assets/section5-left.png" alt="">
                    <p class = "label">{{LANG.section5.label1}}></p>
                    <p ></p>
                </div>
                <div>
                    <img src="../assets/section5-right.png" alt="">
                    <p class = "label">{{LANG.section5.label1}}></p>
                </div>
            </section>

            <section class = "section-table">
                <p class = "title">{{LANG.section6.title}}</p>
                <img src = '../assets/en-table.svg' alt= "" class = "table">
            </section>

        </section>
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/base.scss";
.index-mobile {
  .body {
    .section-bg {
      height: toRem(1043);
      width: 100%;
      //background: red;
      background-image: url("../assets/bg-mobile.svg");
      background-size: cover;
      position: relative;
      .light {
        width: toRem(1297);
        height: toRem(1022);
        position: absolute;
        top: toRem(22);
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
    .section1 {
      background-color: #000000;
      text-align: center;
      overflow: hidden;
      .label {
        margin: toRem(169) 0 toRem(289);
        font-size: toRem(93);
      }
      .btns {
        width: toRem(1763);
        margin: 0 auto toRem(151);
        display: flex;
        .btn {
          flex: 1;
          height: toRem(244);
          display: inline-block;
          border-radius: toRem(122);
          line-height: toRem(244);
          font-size: toRem(73);
          margin-right: toRem(147);
        }
        .btn-start {
          background-color: $green;
          color: #ffffff;
        }
        .btn-create {
          margin-right: 0;
          border: 1px solid #ffffff;
        }
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
        margin-bottom: toRem(300);
      }
      .box {
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
        .label {
          margin-top: toRem(300);
          font-weight: lighter;
        }
        .sec2-des {
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
      .table {
        margin: toRem(215) auto;
        width: toRem(1809);
      }
    }
  }
}
</style>
