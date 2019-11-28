<template>
  <!-- 选择框 -->
  <div class="sel">
    <label :for="selData.iptId">{{selData.iptLab}}</label>
    <select :name="selData.iptId" :id="selData.iptId" @input='$emit("input", $event.target.value)'>
      <option value='请选择' class="selTips">请选择</option>  
      <option v-for="(item, index) in list" :key="index" :value="item">{{item}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: "sel",
  data() {
    return {
      list: this.selData.list
    };
  },
  props: ["selData"],
  created() {
    // 子向父传值
  },
  methods: {}
};
</script>

<style>
.sel {
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
}
.sel option.selTips{
  color: #ccc;
}
.sel label {
  display: inline-block;
  line-height: 2.6rem;
  width: 25%;
}
.sel select {
  width: 73%;
  box-sizing: border-box;
  height: 2.5rem;
  padding: 0 0.3rem;
  outline: none;
  border: none;
  color: #666;
}
/* 判斷輸入是否有誤 */
.sel.error select {
  color: red;
}
.sel.right select {
  color: rgb(22, 160, 133);
}
</style>
