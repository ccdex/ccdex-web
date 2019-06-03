<template>
    <section class = "footer">
        <div class = "footer-wrapper">
            <div class = "footer-left">
                <img class = "footer-logo" src="@/assets/logo.svg" alt="">
                <p>© 2018 - 2019 CCDEX. All rights reserved.</p>
            </div>
            <ul>
                <li>{{LANG.footer.section1_title}}</li>
                <li>{{LANG.footer.section1_link1}}</li>
                <li><a :href = "exchangeUrl" target="_blank">{{LANG.footer.section1_link2}}</a></li>
                <li><a :href = "walletUrl" target="_blank">{{LANG.footer.section1_link3}}</a></li>
                <li><a :href = "explorerUrl" target="_blank">{{LANG.footer.section1_link4}}</a></li>
                <li>{{LANG.footer.section1_link5}}</li>
            </ul>
            <ul>
                <li>{{LANG.footer.section2_title}}</li>
                <li>
                    <a :href = "currentLan==='en'?'https://t.me/ccdex_en':'https://t.me/ccdex_cn'" target="_blank">
                    <img src="@/assets/telegram.svg" alt="">{{LANG.footer.section2_link1}}</a>
                </li>
                <li>
                    <el-popover  placement="top-start" width="150" trigger="hover">
                    <img src="@/assets/wechat.png" style = "width:150px;height:150px">
                    <span slot="reference">
                    <img src="@/assets/wechat.svg"  alt=""><span style = "margin-left:6px">{{LANG.footer.section2_link2}}</span>
                    </span>
                    </el-popover>  
                </li>
                <li>
                     <el-popover  placement="top-start" width="200" trigger="hover" content="connect@ccdex.top">
                    <span slot="reference">
                    <img src="@/assets/email.svg"  alt=""><span style = "margin-left:6px">{{LANG.footer.section2_link3}}</span>
                    </span>
                    </el-popover>  
                </li>
            </ul>

             <ul>
                <li>{{LANG.footer.section3_title}}</li>
                <li>
                   <a href="https://www.linkedin.com/in/ccdex/" target="_blank"><img src="@/assets/linkin.svg" alt="">{{LANG.footer.section3_link1}}</a>
                </li>
                <li>
                     <a href = "https://twitter.com/@CCDEX_TOP" target="_blank"><img src="@/assets/twitter.svg" alt="">{{LANG.footer.section3_link2}}</a>
                </li>
                <li>
                     <a href="https://github.com/ccdex" target="_blank"><img src="@/assets/git.svg" alt="">{{LANG.footer.section3_link3}}</a>
                </li>
                 <li>
                    <a v-if = "currentLan==='en'" href="https://medium.com/@ccdex" target="_blank"><img src="@/assets/blog.svg" alt="">{{LANG.footer.section3_link4}}</a>
                    <a v-if = "currentLan==='zh'" href="https://www.jianshu.com/u/27eb10f2f410" target="_blank"><img src="@/assets/jianshu.svg" alt="">{{LANG.footer.section3_link5}}</a>
                </li>
            </ul>
        </div>
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
}
</script>
<style lang="scss" scoped>
@import '@/styles/base.scss';
.footer{
    height: Rem(350);
    width: 100%;
    background-color: $footerBlack;
    .footer-wrapper{
         width:Rem(1140);
         margin:0 auto;
         height: Rem(350);
        //  line-height: Rem(100);
         font-size:Rem(12);
         color:#FFFFFF;
         .footer-left{
            display: inline-block;
            .footer-logo{
                width: auto;
                height: Rem(45);
                margin:Rem(62) auto Rem(60)
            }
            p{
                font-size:Rem(14);
                line-height: Rem(14);
            }
         }
         ul{
             display: inline-block;
             vertical-align: top;
             margin-left:Rem(140);
             margin-top:Rem(62);
             li{
                 color:$footerFont;
                 font-size:Rem(16);
                 line-height: Rem(40);
                 cursor: pointer;
                 img{
                     width:Rem(25);
                     height: Rem(25);
                     vertical-align: middle;
                 }
                 a{
                     text-decoration: none;
                     color:$footerFont;
                     img{
                         margin-right:6px;
                     }
                 }
             }
             li:first-child{
                 font-size:Rem(19);
                 color:#ffffff;
             }
         }
        //  .ul-left{
        //      list-style:none;
        //      float:left;
        //      li{
        //        float:left; 
        //        margin-left:Rem(10);
        //        img{
        //            width:Rem(25);
        //            height: Rem(25);
        //            vertical-align: middle;            
        //        }
        //      }
        //  }
        //   .ul-right{
        //      list-style:none;
        //      float:right;
        //      li{
        //        float:right; 
        //        margin-left:Rem(10);
        //        img{
        //            width:Rem(25);
        //            height: Rem(25);
        //            vertical-align: middle;    
        //            cursor: pointer;        
        //        }
        //      }
        //  }
    }
}
</style>


