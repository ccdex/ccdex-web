<template>
    <section class = "footer-mobile">
        <div class = "imgs">
        <a href="https://github.com/ccdex" target="_blank"><img src="../assets/git.svg" alt=""></a>
         <el-popover  placement="top-start" width="100" trigger="click" content="connect@ccdex.top">
            <img src="../assets/email.svg" slot="reference" alt="">
        </el-popover>
        <a href="https://www.jianshu.com/u/27eb10f2f410" target="_blank"><img src="../assets/twitter.svg" alt=""></a>
        <el-popover  placement="top" width="150" trigger="hover">
            <img src="../assets/wechat.png" style = "width:150px;height:150px">
            <img src="../assets/wechat.svg" slot="reference" alt="">
        </el-popover> 
        <a href="https://medium.com/@ccdex" target="_blank"><img src="../assets/blog.svg" alt=""></a>
        <a href="https://www.linkedin.com/in/ccdex/" target="_blank"><img src="../assets/linkin.svg" alt=""></a>
        <a href="https://medium.com/@ccdex" target="_blank"><img src="../assets/blog.svg" alt=""></a>
        </div>
        <p>© 2018 - 2019 CCDEX. All rights reserved.</p>
    </section>
</template>
<script>
export default {
  data() {
      return{

      }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/base.scss";
.footer-mobile {
  background-color: $black5;
  width: 100%;
  text-align: center;
  overflow: hidden;
  .imgs {
    margin: toRem(125) auto toRem(88) auto;
    img {
      width: toRem(124);
      height: toRem(124);
      margin-right: toRem(88);
    }
    img:last-child() {
      margin-right: 0;
    }
  }
  p {
      font-size:toRem(74);
      margin-bottom:toRem(65);
  }
}
</style>

