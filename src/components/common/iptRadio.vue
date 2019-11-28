<template>
  <!-- 文本框 -->
  <div class="iptRadio">
    <input :type="iptRadio.iptType" :id="iptRadio.iptId" :name="iptRadio.iptName" :value="iptRadio.iptVal"  :checked="iptRadio.isSel" @input='inputUpdate()'>
    <label :for="iptRadio.iptId">{{iptRadio.iptLab}}</label>
  </div>
</template>

<script>
export default {
  name: "iptRadio",
  data() {
    return {
      iptVal: this.iptRadio.iptVal
    };
  },
  props: ["iptRadio"],
  created() {
    // 子向父传值
    // this.iptVal = iptRadio.iptVal

  },
  methods: {
    inputUpdate() {
      this.$emit('input', this.iptVal);
    }
  }
};
</script>

<style>
.iptRadio {
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.iptRadio label {
  line-height: 2.6rem;
}
.iptRadio input {
  height: 1.0rem;
  width: 2.6rem;
  box-sizing: border-box;
}
</style>
