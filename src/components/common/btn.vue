<template>
  <div id="btn">
     <!-- 按鈕 -->
    <div class="btn">
      <button type="button">{{btnMsg}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'btn',
   data() {
    return {
    }
  },
  props: ['btnMsg']
}
</script>

<style>
.marginTop6 {
  margin-top: 6rem;
}
.btn {
  height: 2.6rem;
  padding-left: 1em;
  padding-right: 1em;
}
.btn button {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  color: #fff;
  background-color: #266ace;
  background: -webkit-linear-gradient(to right, #128ff8, #266ace);
  background: -moz-linear-gradient(to right, #128ff8, #266ace);
  background: -o-linear-gradient(to right, #128ff8, #266ace);
  background: -ms-linear-gradient(to right, #128ff8, #266ace);
  background: linear-gradient(to right, #128ff8, #266ace);
  outline: none;
}
.btn button:active {
  background-color: #266ace;
  background: -webkit-linear-gradient(to right, #266ace, #266ace);
  background: -moz-linear-gradient(to right, #266ace, #266ace);
  background: -o-linear-gradient(to right, #266ace, #266ace);
  background: -ms-linear-gradient(to right, #266ace, #266ace);
  background: linear-gradient(to right, #266ace, #266ace);
  outline: none;
}


</style>
