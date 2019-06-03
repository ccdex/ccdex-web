<template>
    <section class = "footer-mobile">
        <img src="@/assets/logo.svg" alt="" class = "footer-logo">
        <div class = "imgs">
            <a href="https://github.com/ccdex" target="_blank"><img src="@/assets/git.svg" alt=""></a>
            <el-popover  placement="top-start" width="100" trigger="click" content="connect@ccdex.top">
                <img src="@/assets/email.svg" slot="reference" alt="">
            </el-popover>
            <a href="https://twitter.com/@CCDEX_TOP" target="_blank"><img src="@/assets/twitter.svg" alt=""></a>
            <el-popover  placement="top" width="150" trigger="hover">
                <img src="@/assets/wechat.png" style = "width:150px;height:150px">
                <img src="@/assets/wechat.svg" slot="reference" alt="">
            </el-popover> 
            <a :href = "currentLan==='en'?'https://t.me/ccdex_en':'https://t.me/ccdex_cn'" target="_blank"><img src="@/assets/telegram.svg" alt=""></a>
            <a href="https://www.linkedin.com/in/ccdex/" target="_blank"><img src="@/assets/linkin.svg" alt=""></a>
            <a v-if = "currentLan==='en'"  href="https://medium.com/@ccdex" target="_blank"><img src="@/assets/blog.svg" alt=""></a>
            <a v-if = "currentLan==='zh'" href="https://www.jianshu.com/u/27eb10f2f410" target="_blank"><img src="@/assets/jianshu.svg" alt=""></a>
           
        </div>
        <ul>
           <li>{{LANG.footer.section1_title}}</li>
           <li>{{LANG.footer.section1_link1}}</li>
           <li><a :href = "exchangeUrl" target="_blank">{{LANG.footer.section1_link2}}</a></li>
           <li><a :href = "walletUrl" target="_blank">{{LANG.footer.section1_link3}}</a></li>
           <li><a :href = "explorerUrl" target="_blank">{{LANG.footer.section1_link4}}</a></li>
           <li>{{LANG.footer.section1_link5}}</li>
        </ul>
        <p>© 2018 - 2019 CCDEX. All rights reserved.</p>
    </section>
</template>
<script>
import { config } from "@/config";
export default {
  data(){
    let lan = localStorage.getItem("CCDEX_LANGUAGE_TYPE");
    let currentLan;
    if (lan && lan === "zh") {
      currentLan = "zh";
    } else {
      currentLan = "en";
    }
    return{
        currentLan:currentLan,
        exchangeUrl: config.exchangeUrl,
        walletUrl: config.walletUrl,
        explorerUrl: config.explorerUrl,
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/base.scss";
.footer-mobile {
  background-color: #222222;
  width: 100%;
  overflow: hidden;
  .footer-logo{
    width: auto;
    height: toRem(115);
    margin:toRem(228) 0 0 toRem(179);
  }
  .imgs {
    font-size:0;
    letter-spacing: -3px;
    margin:toRem(150) 0 0 toRem(179);
    a {
      display: inline-block;
      width: toRem(100);
      height: toRem(100);
      margin-right: toRem(72);
      img {
        width: toRem(100);
        height: toRem(100);
      }
    }
    img {
      width: toRem(100);
      height: toRem(100);
      margin-right: toRem(72);
    }
    a:last-child{
      margin-right: 0;
    }
  }
  ul{
    margin:toRem(150) 0 0 toRem(179);
    li{
      font-size:toRem(92);
      color:$footerFont;
      line-height: toRem(95);
      margin-bottom:toRem(70);
      a{
        text-decoration: none;
        color:$footerFont;
      }
    }
    li:first-child{
      font-size:toRem(102);
      color:#ffffff;
    }
  }
  p {
    font-size: toRem(77);
    margin:toRem(160) 0 toRem(190);
    text-align: center;
  }
}
</style>

