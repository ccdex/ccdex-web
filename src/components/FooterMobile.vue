<template>
    <section class = "footer-mobile">
        <div class = "imgs">
        <img src="../assets/email.svg" alt="">
        <img src="../assets/git.svg" alt="">
        <img src="../assets/twitter.svg" alt="">
        <img src="../assets/wechat.svg" alt="">
        <img src="../assets/phone.svg" alt="">  
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

