<template>
  <div id="titleFoot">
     <!-- 底栏标题 -->
    <footer>
      <span class="ico-police"></span>
      <p>{{titleMsg}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'titleFoot',
   data() {
    return {
    }
  },
  props: ['titleMsg']
}
</script>

<style>
footer {
  width: 100%;
  height: 2rem;
  position: absolute;
  bottom: 1rem;
  font-size: 0.6rem;
  text-align: center;
}
footer .ico-police {
  display: inline-block;
  width: 20px;
  height: 100%;
  background: url("data:image/png;base64,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")
    center center no-repeat;
  -webkit-background-size: 17px auto;
  background-size: 17px auto;
}
footer p {
  display: inline-block;
  height: 100%;
  line-height: 2rem;
  vertical-align: top;
}
</style>
