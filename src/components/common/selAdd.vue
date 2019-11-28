<template>
  <!-- 选择框 -->
  <div class="selYj">
    <p>邮寄地址</p>
    <select :class="tagProvince" name="yjprovince" id="yjprovince" @input="fnProVal($event.target.value)">
      <option v-for="(item, index) in proList" :key="index" :value="item">{{item}}</option>
    </select>
    <select :class="tagCity" name="yjcity" id="yjcity" @input="fnCityVal($event.target.value)">
      <option selected>--XX市--</option>
      <option v-for="(item, index) in cityList" :key="index" :value="item">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "selAdd",
  data() {
    return {
      province: "",
      city: "",
      selProVal: "",
      selCityVal: "",
      proList: [],
      cityList: [],
      tagProvince: '',
      tagCity: ''
    };
  },
  props: [],
  watch: {
    // 监听发生变化即传值
    selProVal(newVal, oldVal) {
      console.log(newVal)
      // 满足条件 改变样式
      if (newVal!=="--XX省--") {
        this.tagProvince = "right";
      } else {
        this.tagProvince = "error";
      }
      // 省市选择满足条件进行跳转
      // 判断是否市级列表是否在首项，是的话不发送信息
      if(this.selProVal&&this.selCityVal&&(this.selProVal!=="--XX省--")&&(this.selCityVal!=="--XX市--")&&($('#yjcity').prop('selectedIndex')!==0)){
        console.log(22,$('#yjcity').prop('selectedIndex'));
        this.$emit("updateData", [this.selProVal, this.selCityVal])
      }
    },
    selCityVal(newVal, oldVal) {
      console.log(22)
      // 满足条件 改变样式
      if (newVal!=="--XX市--") {
        this.tagCity = "right";
      } else {
        this.tagCity = "error";
      }
      // 省市选择满足条件进行跳转
      if(this.selProVal&&this.selCityVal&&(this.selProVal!=="--XX省--")&&(this.selCityVal!=="--XX市--")&&($('#yjcity').prop('selectedIndex')!==0)){
        this.$emit("updateData", [this.selProVal, this.selCityVal])
      }
    },
  },
  mounted() {
    // 初始化省级列表
    this.initPro(this.$areaList);
  },
  methods: {
    initPro(arr) {
      let proList = [];
      arr.forEach((item)=> {
        proList.push(item.loca); 
      })
      this.proList = proList;
    },
    fnCityList(pro, arr) {
      // 刷新option
      // 设置每次选中省级后市级到顶部
      $('#yjcity').prop('selectedIndex', 0)
      arr.forEach((item)=> {
        if(item.loca === pro) {
          this.cityList = item.locacity.split('|')
        }
      })     
    },
    fnProVal(e) {
      this.selProVal = e;
      // 赋值运算 初始化市级列表
      this.fnCityList(e, this.$areaList);
    },
    fnCityVal(e) {
      this.selCityVal = e;
    }
  }
};
</script>

<style>
/* 邮寄地址 */
.selYj {
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
}
.selYj > p {
  display: inline-block;
  width: 25%;
}
.selYj select {
  box-sizing: border-box;
  height: 2.5rem;
  padding: 0 0.3rem;
  outline: none;
  border: none;
  color: #666;
}
.selYj select {
  display: inline-block;
  width: 35%;
}
.selYj option.selTips {
  color: #ccc;
}
/* 判斷輸入是否有誤 */
.selYj select.error {
  color: red;
}
.selYj select.right {
  color: rgb(22, 160, 133);
}
</style>
