<template>
  <!-- 文本框 -->
  <div class="ipt">
    <label :for="iptText.iptId">{{iptText.iptLab}}</label>
    <input :type="iptText.iptType" :id="iptText.iptId" :name="iptText.iptName" :maxlength="iptText.maxLen" :placeholder="iptText.iptPlaceholder" @input='$emit("input", $event.target.value)'>
  </div>
</template>

<script>
export default {
  name: "ipt",
  data() {
    return {
      // iptVal: ''
    };
  },
  props: ["iptText"],
  created() {
    // 子向父传值

  },
  methods: {
    
  }
};
</script>

<style>
.ipt {
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
}
.ipt label {
  display: inline-block;
  line-height: 2.6rem;
  width: 25%;
}
.ipt input {
  width: 73%;
  box-sizing: border-box;
  height: 2.5rem;
  padding: 0 0.3rem;
  outline: none;
}
/* 判斷輸入是否有誤 */
.ipt.error input {
  color: red;
}
.ipt.right input {
  color: rgb(22, 160, 133);
}
</style>
