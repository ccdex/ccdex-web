<template>
    <section class = "header">
        <div class = "header-wrapper">
            <img src="../assets/logo.png" alt="">
            <ul class = "nav">
                <li>{{LANG.header.entry1}}</li>
                <li><a :href = "exchangeUrl">{{LANG.header.entry2}}</a></li>
                <li><a :href = "walletUrl">{{LANG.header.entry3}}</a></li>
                <li><a :href = "explorerUrl">{{LANG.header.entry4}}</a></li>
                <li>{{LANG.header.entry5}}</li>
                <li>{{LANG.header.entry6}}</li>
            </ul>
        </div>
    </section>
</template>
<script>
import { config } from "@/config";
export default {
  data() {
    return {
        exchangeUrl:config.exchangeUrl,
        walletUrl:config.walletUrl,
        explorerUrl:config.explorerUrl
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/base.scss";
.header {
  height: Rem(100);
  background-color: $black1;
  .header-wrapper {
    margin: 0 auto;
    width: Rem(1140);
    height: Rem(100);
    line-height: Rem(100);
    img {
      width: Rem(158);
      height: Rem(45);
      vertical-align: middle;
      text-align: left;
      display: inline-block;
    }
    .nav {
      float: right;
      list-style: none;
      margin: 0;
      li {
        font-size: Rem(14);
        float: left;
        margin-left: Rem(40);
        cursor: pointer;
        a{
            text-decoration: none;
            color:#FFFFFF;
        }
        a:hover{
              color:$green;
        }
      }
      li:hover{
              color:$green;
        }
    }
  }
}
</style>
