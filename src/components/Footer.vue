<template>
    <section class = "footer">
        <div class = "footer-wrapper">
            <ul class = "ul-left">
                <li>
                    <el-popover  placement="top-start" width="150" trigger="hover">
                    <img src="../assets/wechat.png" style = "width:150px;height:150px">
                    <img src="../assets/wechat.svg" slot="reference" alt="">
                    </el-popover>             
                </li>
                <li>
                    <el-popover  placement="top-start" width="200" trigger="hover" content="connect@ccdex.top">
                    <img src="../assets/email.svg" slot="reference" alt="">
                    </el-popover>
                </li>
                <li>
                    <a href = "https://twitter.com/@CCDEX_TOP"><img src="../assets/twitter.svg" slot = "reference" alt=""></a>
                </li>
            </ul>
            <span>© 2018 - 2019 CCDEX. All rights reserved.</span>
            <ul class = "ul-right">
                <li><a href="https://github.com/ccdex"><img src="../assets/git.svg" alt=""></a></li>
                <li><a href="https://www.jianshu.com/u/27eb10f2f410"><img src="../assets/jianshu.svg" alt=""></a></li>
                <li><a href="https://medium.com/@ccdex"><img src="../assets/blog.svg" alt=""></a></li>
                <li><a href="https://www.linkedin.com/in/ccdex/"><img src="../assets/linkin.svg" alt=""></a></li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '@/styles/base.scss';
.footer{
    height: Rem(100);
    width: 100%;
    background-color: $black5;
    .footer-wrapper{
         width:Rem(1140);
         margin:0 auto;
         height: Rem(100);
         line-height: Rem(100);
         text-align: center;
         font-size:Rem(12);
         color:#FFFFFF;
         .ul-left{
             list-style:none;
             float:left;
             li{
               float:left; 
               margin-left:Rem(10);
               img{
                   width:Rem(25);
                   height: Rem(25);
                   vertical-align: middle;            
               }
             }
         }
          .ul-right{
             list-style:none;
             float:right;
             li{
               float:right; 
               margin-left:Rem(10);
               img{
                   width:Rem(25);
                   height: Rem(25);
                   vertical-align: middle;    
                   cursor: pointer;        
               }
             }
         }
    }
}
</style>


