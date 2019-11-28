<template>
  <!-- 标题 -->
  <header>
    <img :src="iconPublic"/>
    <h2>
      {{headerTitle}}
    </h2>
  </header>
</template>

<script>
import iconPublic from "../../assets/imgs/iconPub.png";
export default {
  name: "headerTitle",
  data() {
    return {
      iconPublic: iconPublic
    };
  },
  props: ["headerTitle"]
};
</script>

<style>
header {
  height: 4.2rem;
  text-align: center;
  background-color: #266ace;
  background: -webkit-linear-gradient(to bottom right, #128ff8, #266ace);
  background: -moz-linear-gradient(to bottom right, #128ff8, #266ace);
  background: -o-linear-gradient(to bottom right, #128ff8, #266ace);
  background: -ms-linear-gradient(to bottom right, #128ff8, #266ace);
  background: linear-gradient(to bottom right, #128ff8, #266ace);
  border-bottom: 0.3rem solid #fe9d01;
}
header h2 {
  display: inline-block;
  color: #fff;
  line-height: 4.2rem;
  font-size: 1.4rem;
  font-weight: 300;
  vertical-align: top;
}
header img {
  display: inline-block;
  padding-top: 1rem;
  width: 2.2rem;
  height: 2.4rem;
}
</style>
