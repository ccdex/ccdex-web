<template>
    <section class = "footer">
        <div class = "footer-wrapper">
            <ul class = "ul-left">
                <li><img src="../assets/wechat.svg" alt=""></li>
                <li><img src="../assets/phone.svg" alt=""></li>
                <li><img src="../assets/email.svg" alt=""></li>
            </ul>
            <span>© 2018 - 2019 CCDEX. All rights reserved.</span>
            <ul class = "ul-right">
                <li><img src="../assets/git.svg" alt=""></li>
                <li><img src="../assets/twitter.svg" alt=""></li>
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


