<template>
  <div id="index">
    <!-- 图片 -->
    <img :src="imgUrl" alt="标题图片"/>

    <!-- 常规按钮 -->
    <btn :btnMsg="btnMsg" class="marginTop6" @click.native='turn'></btn>
    <!-- 底部標題 -->
    <titleFoot :titleMsg="titleFoot"></titleFoot>
  </div>
</template>

<script>
import titleImg from "../assets/imgs/title.gif";

export default {
  name: "index",
  data() {
    return {
      imgUrl: titleImg,
      btnMsg: '点击进入',
      titleFoot: "河南--郑州公安出入境"
    };
  },
  methods: {
      turn(){
          this.$router.push({name: 'webpre'})
      }
  }
};
</script>

<style>
body {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background-color: #efeff4;
}
#index {
  flex: 1;
}
.marginTop6 {
  margin-top: 6rem;
}
</style>