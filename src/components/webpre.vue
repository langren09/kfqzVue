<template>
  <div id="webpre">
    <!-- 标题 -->
    <headerTitle :headerTitle="headerTitle"></headerTitle>
    <!-- 录入项 -->
    <form action id="webPre">
      <div class="page1" v-show="!pageShow">
        <!-- 个人基本信息 -->
        <section>
          <h4 class="tips">
            <i></i>
            {{perSecTips}}
          </h4>
          <!-- 身份证号 -->
          <ipt :iptText="iptSfzh" v-model="sfzhVal" :class="tagSfzh"></ipt>
          <!-- 姓名 -->
          <ipt :iptText="iptXm" v-model="xmVal" :class="tagXm"></ipt>
          <!-- 性別 -->
          <div class="iptRadioCon" v-show="!isShow">
            <!-- 男 -->
            <iptRadio :iptRadio="iptXb1" v-model="xb1Val"></iptRadio>
            <!-- 女 -->
            <iptRadio :iptRadio="iptXb2" v-model="xb2Val"></iptRadio>
          </div>
          <!-- 民族 -->
          <sel :selData="selMinZu" v-model="minZuVal" :class="tagMinZu"></sel>
          <!-- 出生地 -->
          <sel :selData="selCSD" v-model="CSDVal" :class="tagCSD"></sel>
          <!-- 出生日期 -->
          <ipt :iptText="iptCSRQ" v-model="CSRQVal" v-show="isShow"></ipt>
          <!-- 联系电话 -->
          <ipt :iptText="iptD_LXDH" v-model="D_LXDHVal" :class="tagD_LXDH"></ipt>
          <!-- 户口所在地 -->
          <ipt :iptText="iptXZQH" v-model="XZQHVal" :class="tagXZQH"></ipt>
        </section>
        <!-- 紧急联系人信息 -->
        <section>
          <h4 class="tips">
            <i></i>
            {{jjSecTips}}
          </h4>
          <!-- 紧急联系人姓名 -->
          <ipt :iptText="iptD_JJLXR" v-model="D_JJLXRVal" :class="tagD_JJLXR"></ipt>
          <!-- 紧急联系人联系电话 -->
          <ipt :iptText="iptD_JJLXDH" v-model="D_JJLXDHVal" :class="tagD_JJLXDH"></ipt>
        </section>
        <!-- 常规按钮 -->
        <btn :btnMsg="btnMsg" class="marginTop3" @click.native="next"></btn>
        <btn :btnMsg="btnfreshen" class="marginTop1" @click.native="refrensh"></btn>
      </div>
      <div class="page2" v-show="pageShow">
        <!-- 业务信息 -->
        <section>
          <h4 class="tips">
            <i></i>
            {{ywSecTips}}
          </h4>
          <!-- 护照 -->
          <div class="yw selHz">
            <label for="HZ" :class="{selqz: hzShow}">
              <p>前往国外</p>
              <input type="radio" name="HZ" id="HZ" v-model="hzVal" v-show="hidden" @click="fnHzSel"/>
              <img :src="imgZh" alt />
            </label>
          </div>
          <!-- 港澳通行证 -->
          <div class="yw selGa sels">
            <label for="GA" :class="{selqz: gaShow}">
              <p>前往香港、澳门</p>
              <input type="radio" name="GA" id="GA" v-show="hidden" @click="fnGaSel"/>
              <img :src="imgGa" alt />
            </label>
            <div class="qzCon" v-show="gaShow">
              <div class="qz gaqz">
                <p>往来香港签注类型</p>
                <span id="xgqz1" class="xgyw">一年一次</span>
                <span id="xgqz2" class="xgyw">一年二次</span>
                <span id="xgqz0" class="xgyw">不签注</span>
              </div>
              <div class="qz amqz">
                <p>往来澳门签注类型</p>
                <span id="amqz1" class="amyw">一年一次</span>
                <span id="amqz0" class="amyw">不签注</span>
              </div>
            </div>
          </div>
          <!-- 台湾通行证 -->
          <div class="yw selTw">
            <label for="TW" :class="{selqz: twShow}">
              <p>前往台湾</p>
              <input type="radio" name="TW" id="TW"  v-model="twVal" v-show="hidden" @click="fnTwSel"/>
              <img src alt />
            </label>
            <div class="twCon" v-show="twShow">
              <div class="qz twqz">
                <p>往来香港签注类型</p>
                <span id="twqz1" class="twyw">6月一次</span>
                <span id="twqz0" class="twyw">不签注</span>
              </div>
            </div>
          </div>
        </section>
        <!-- 取证方式 -->
        <section>
          <h4 class="tips">
            <i></i>
            {{qzSecTips}}
          </h4>
          <!-- 取证方式 -->
          <div class="iptRadioCon">
            <!-- 邮寄送达 -->
            <iptRadio :iptRadio="selyJ" v-model="yJVal" @click.native="eventYj"></iptRadio>
            <!-- 前往自取 -->
            <iptRadio :iptRadio="selZq" v-model="zQVal" @click.native="eventZq"></iptRadio>
          </div>
        </section>
        <!-- 邮寄信息 -->
        <section v-show="tagYj">
          <h4 class="tips">
            <i></i>
            {{yjSecTips}}
          </h4>
          <!-- 邮寄地址 -->
          <selAdd @updateData="getYjData"></selAdd>
          <!-- 详细地址 -->
          <ipt :iptText="iptYjaddress" v-model="yjaddressVal" :class="tagYjaddress"></ipt>
          <!-- 邮政编码 -->
          <ipt :iptText="iptM_YB" v-model="M_YBVal" :class="tagM_YB"></ipt>
          <!-- 收件人 -->
          <ipt :iptText="iptM_SJR" v-model="M_SJRVal" :class="tagM_SJR"></ipt>
          <!-- 收件电话 -->
          <ipt :iptText="iptM_DH" v-model="M_DHVal" :class="tagM_DH"></ipt>
        </section>
        <!-- 常规按钮 -->
        <btn :btnMsg="btnSubmit" class="marginTop2" @click.native="eventSubmit"></btn>
        <btn :btnMsg="btnPre" class="marginTop1" @click.native="pre"></btn>
        <!-- 计算属性绑定值 -->
        <!-- <div v-show="true">
          <p>{{selyJ}}</p>
        </div>-->
      </div>
    </form>
  </div>
</template>

<script>
import iconPublic from "../assets/imgs/iconPub.png";
import imgZh from "../assets/imgs/zh.png";
import imgGa from "../assets/imgs/ga.png";

export default {
  name: "index",
  data() {
    return {
      iconPublic: iconPublic,
      imgGa: imgGa,
      imgZh: imgZh,
      headerTitle: "开封市出入境手机预约平台",
      btnMsg: "下一页",
      btnfreshen: "刷 新",
      btnSubmit: "确认提交",
      btnPre: "上一页",
      perSecTips: "请完善您的个人基本信息",
      jjSecTips: "请完善紧急联系人信息",
      ywSecTips: "请选择您所需要办理的业务类型",
      qzSecTips: "请选择您的取证方式",
      yjSecTips: "请完善您的邮寄信息",
      pageShow: false, // 切换页面
      isShow: true, // 是否显示性别与出生日期
      hidden: false, // 隐藏选项框
      hzShow: false, // 护照显示签注  标注为选中
      gaShow: false, // 港澳显示签注 标注为选中
      twShow: false, // 台湾显示签注 标注为选中
      // 样式状态
      tagYj: false,
      tagSfzh: "",
      tagXm: "",
      tagD_LXDH: "",
      tagXZQH: "",
      tagD_JJLXR: "",
      tagD_JJLXDH: "",
      tagMinZu: "",
      tagCSD: "",
      tagYjaddress: "",
      tagM_YB: "",
      tagM_SJR: "",
      tagM_DH: "",

      sfzhVal: "",
      xmVal: "",
      xb1Val: "",
      xb2Val: "",
      minZuVal: "",
      CSDVal: "",
      CSRQVal: "",
      D_LXDHVal: "",
      D_JJLXRVal: "",
      D_JJLXDHVal: "",
      XZQHVal: "",
      yJVal: "",
      zQVal: "",
      hzVal: "",
      gaVal: ["",""],
      twVal: "",
      yjaddress0Val: "",
      yjaddressVal: "",
      // selYjData: "",
      M_YBVal: "",
      M_SJRVal: "",
      M_DHVal: "",
      iptXm: {
        iptLab: "姓名",
        iptType: "text",
        iptPlaceholder: "请输入姓名",
        iptId: "Xm",
        maxLen: "6",
        iptName: "Xm"
      },
      iptSfzh: {
        iptLab: "身份证号",
        iptType: "email",
        iptPlaceholder: "请输入身份证号",
        iptId: "Sfzmhm",
        maxLen: "18",
        iptName: "Sfzmhm"
      },
      iptCSRQ: {
        iptLab: "出生日期",
        iptType: "date",
        iptPlaceholder: "自动输入",
        iptId: "CSRQ",
        iptName: "CSRQ"
      },
      iptD_LXDH: {
        iptLab: "电话",
        iptType: "tel",
        iptPlaceholder: "请输入联系电话",
        iptId: "D_LXDH",
        maxLen: "11",
        iptName: "D_LXDH"
      },
      iptXZQH: {
        iptLab: "户口所在地",
        iptType: "text",
        iptPlaceholder: "XX省XX市XX区/县",
        iptId: "XZQH",
        maxLen: "28",
        iptName: "XZQH"
      },
      iptD_JJLXR: {
        iptLab: "紧急联系人",
        iptType: "tel",
        iptPlaceholder: "请输入联系电话",
        iptId: "D_JJLXR",
        maxLen: "6",
        iptName: "D_JJLXR"
      },
      iptD_JJLXDH: {
        iptLab: "紧急联系电话",
        iptType: "tel",
        iptPlaceholder: "请输入紧急联系人电话",
        iptId: "D_JJLXDH",
        maxLen: "11",
        iptName: "D_JJLXDH"
      },
      iptXb1: {
        iptLab: "男",
        iptType: "radio",
        iptId: "Xb1",
        iptName: "Xb",
        iptVal: "男",
        isSel: false
      },
      iptXb2: {
        iptLab: "女",
        iptType: "radio",
        iptId: "Xb2",
        iptName: "Xb",
        iptVal: "女",
        isSel: false
      },
      selyJ: {
        iptLab: "邮寄送达",
        iptType: "radio",
        iptId: "yJ",
        iptName: "mail",
        iptVal: "yJ",
        isSel: false
      },
      selZq: {
        iptLab: "前往自取",
        iptType: "radio",
        iptId: "Zq",
        iptName: "mail",
        iptVal: "Zq",
        isSel: false
      },
      selMinZu: {
        iptLab: "民族",
        iptId: "MinZu",
        iptName: "MinZu",
        list: this.$json.mzList
      },
      selCSD: {
        iptLab: "出生地",
        iptId: "CSD",
        iptName: "CSD",
        list: this.$json.csdList
      },
      iptYjaddress0: {
        iptLab: "邮寄地址",
        iptType: "text",
        iptPlaceholder: "请输入邮寄地址",
        iptId: "yjaddress0",
        maxLen: "16",
        iptName: "yjaddress0"
      },
      iptYjaddress: {
        iptLab: "详细地址",
        iptType: "text",
        iptPlaceholder: "请输入详细地址",
        iptId: "yjaddress",
        maxLen: "18",
        iptName: "yjaddress"
      },
      iptM_YB: {
        iptLab: "邮政编码",
        iptType: "tel",
        iptPlaceholder: "请输入邮政编码",
        iptId: "M_YB",
        maxLen: "6",
        iptName: "M_YB"
      },
      iptM_SJR: {
        iptLab: "收件人",
        iptType: "text",
        iptPlaceholder: "请输入收件人姓名",
        iptId: "M_SJR",
        maxLen: "6",
        iptName: "M_SJR"
      },
      iptM_DH: {
        iptLab: "收件人电话",
        iptType: "tel",
        iptPlaceholder: "请输入收件人电话",
        iptId: "M_DH",
        maxLen: "11",
        iptName: "M_DH"
      }
    };
  },
  methods: {
    // 頁面切換
    next() {
      // 判断首页信息提交
      if(this.chargePage1()) {
        console.log("提交成功")
        this.pageShow = true;
      }
      
    },
    refrensh() {
      window.location.reload(); //刷新当前页面
    },
    pre() {
      this.pageShow = false;
    },
    eventSubmit() {
      console.log("提交信息");
    },
    // 判断首页信息提交
    chargePage1() {
      let tag = true;
      // 判断性别与日期
      if((!$("#Xb1").prop('checked')&&(!$("#Xb2").prop('checked')))||(this.CSRQVal==="")) {
        tag = false;
      }
      var tagArr = [this.tagSfzh, this.tagXm, this.tagD_LXDH, this.tagXZQH, this.tagD_JJLXR, this.tagMinZu, this.tagD_JJLXDH, this.tagCSD];
      tagArr.forEach((item)=> {
        if(item!=='right'){
          tag = false;
        }
      })
      return tag
    },
    // 判断第二页信息
    chargePage2() {
      let tag = true;
      // 判断是否选中业务

    },
    // 邮寄自取
    eventYj() {
      if ($("#yJ").prop("checked")) {
        this.tagYj = true;
      }
    },
    eventZq() {
      if ($("#Zq").prop("checked")) {
        this.tagYj = false;
      }
    },
    // 业务类型选择
    fnHzSel() {
      this.hzShow = !this.hzShow;
      if(this.hzShow) {
        this.hzVal = 'HZ';
      }else {
        this.hzVal = '';
      }
    },
    fnGaSel() {
      this.gaShow = !this.gaShow;
      if(!this.gaShow) {
        this.gaVal = ["",""];
        $(".xgyw").removeClass('selQz');
        $(".amyw").removeClass('selQz');
      }
    },
    fnTwSel() {
      this.twShow = !this.twShow;
      if(!this.twShow) {
        this.twVal = '';
        $(".twyw").removeClass('selQz');
      }
    },
    getYjData(arr) {
      let arrYb = "",
      arrYjStr = "";
      arrYjStr = arr[0] + arr[1] + "";
      arrYb = arrYjStr.replace(/[^0-9]+/g, ""); //提取邮编
      arrYjStr = arrYjStr.replace(/[u4E00-u9FA5]/g, ""); //  去除中文
      arrYjStr = arrYjStr.replace(" ", ""); //  去除空格
      arrYjStr = arrYjStr.trim(); //  去除空格
      // 赋值邮编
      this.M_YBVal = arrYb;
      let M_YB = document.getElementById("M_YB");
      let yjcity = document.getElementById("yjcity");
      console.log(arrYjStr);
      $("#M_YB").val(this.M_YBVal);
    },
    /********验证函数**********/

    // 手机号验证
    isMobil(s) {
      var patrn = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
      if (!patrn.exec(s)) return false;
      return true;
    },
    // 中文输入验证
    isOnlyChinese(s) {
      var re = new RegExp("^[\\u4e00-\\u9fa5]+$", "");
      var yesorno = re.test(s);
      if (yesorno) return true;
      else return false;
    },
    //数字验证
    isNumber(oNum) {
      if (!oNum) return false;
      var strP = /^\d+(\.\d+)?$/;
      if (!strP.test(oNum)) return false;
      try {
        if (parseFloat(oNum) != oNum) return false;
      } catch (ex) {
        return false;
      }
      return true;
    },
    //邮编验证
    isMailNum(s) {
      var patrn = /^[0-9][0-9]{5}$/;
      if (!patrn.exec(s)) return false;
      return true;
    },
    //原证件号验证
    isZJH(num) {
      if (!num) return false;
      var length = num.length;
      var first = num[0];
      var other = num.substring(1, length);
      var engstr = /[a-zA-Z]/;
      var value1 = (value2 = "");

      value1 = engstr.test(first) ? first.toUpperCase() : "";

      if (value1 == "") {
        return false;
      } else {
        value2 = isNumber(other) ? other : "";
        if (value2 == "") {
          return false;
        } else {
          var value = value1 + value2;
          return value;
        }
      }
    },
    // 邮寄详细地址 字数6-100字
    isMailAdd(s) {
      var patrn = /^[\s\S]{6,100}$/;
      if (!patrn.exec(s)) return false;
      return true;
    },
    // 身份证号验证
    isSfzh(s) {
      var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
      var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      // 设置变量
      var valCodePosition;
      var tag = false;
      // 执行语句
      IdCardValidate(s);
      // 执行语句
      function IdCardValidate(idCard) {
        idCard = trim(idCard.replace(/ /g, ""));
        if (idCard.length == 15) {
          return isValidityBrithBy15IdCard(idCard);
        } else if (idCard.length == 18) {
          var a_idCard = idCard.split("");
          if (
            isValidityBrithBy18IdCard(idCard) &&
            isTrueValidateCodeBy18IdCard(a_idCard)
          ) {
            // 标注状态
            tag = true;
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      function isValidityBrithBy15IdCard(idCard15) {
        var year = idCard15.substring(6, 8);
        var month = idCard15.substring(8, 10);
        var day = idCard15.substring(10, 12);
        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));

        if (
          temp_date.getYear() != parseFloat(year) ||
          temp_date.getMonth() != parseFloat(month) - 1 ||
          temp_date.getDate() != parseFloat(day)
        ) {
          return false;
        } else {
          return true;
        }
      }
      function isTrueValidateCodeBy18IdCard(a_idCard) {
        var sum = 0;
        if (a_idCard[17].toLowerCase() == "x") {
          a_idCard[17] = 10;
        }
        for (var i = 0; i < 17; i++) {
          sum += Wi[i] * a_idCard[i];
        }
        valCodePosition = sum % 11;
        if (a_idCard[17] == ValideCode[valCodePosition]) {
          return true;
        } else {
          return false;
        }
      }
      function isValidityBrithBy18IdCard(idCard18) {
        var year = idCard18.substring(6, 10);
        var month = idCard18.substring(10, 12);
        var day = idCard18.substring(12, 14);
        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
        if (
          temp_date.getFullYear() != parseFloat(year) ||
          temp_date.getMonth() != parseFloat(month) - 1 ||
          temp_date.getDate() != parseFloat(day)
        ) {
          return false;
        } else {
          return true;
        }
      }
      function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
      }
      // 判断返回的状态是否为真
      if (tag) {
        return true;
      }
      return false;
    },
    // 通过身份证号提取出生日期与性别
    getBirSexBySfz(s) {
      //函数名切记与控件名相同造成冲突
      var birthdayValue;
      //得到此时控件值★★★
      var val = s;
      if (15 == val.length) {
        //15位身份证号码
        birthdayValue = val.charAt(6) + val.charAt(7);
        if (parseInt(birthdayValue) < 10) {
          birthdayValue = "20" + birthdayValue;
        } else {
          birthdayValue = "19" + birthdayValue;
        }
        birthdayValue =
          birthdayValue +
          "-" +
          val.charAt(8) +
          val.charAt(9) +
          "-" +
          val.charAt(10) +
          val.charAt(11);
        if (parseInt(val.charAt(14) / 2) * 2 != val.charAt(14)) {
          // sex = '男';
          // Xb1.checked=true;
          // Xb2.checked=false;
          this.iptXb1.isSel = true;
          this.iptXb2.isSel = false;
        } else {
          // sex = '女';
          // Xb1.checked=false;
          // Xb2.checked=true;
          this.iptXb1.isSel = false;
          this.iptXb2.isSel = true;
        }
        document.getElementById("CSRQ").value = birthdayValue;
        //出生日期填入
      }
      if (18 == val.length) {
        //18位身份证号码
        birthdayValue =
          val.charAt(6) +
          val.charAt(7) +
          val.charAt(8) +
          val.charAt(9) +
          "-" +
          val.charAt(10) +
          val.charAt(11) +
          "-" +
          val.charAt(12) +
          val.charAt(13);
        if (parseInt(val.charAt(16) / 2) * 2 != val.charAt(16)) {
          /*   sex = '男';*/
          // Xb1.checked=true;
          // Xb2.checked=false;
          // console.log('男')
          this.iptXb1.isSel = true;
          this.iptXb2.isSel = false;
        } else {
          /*     sex = '女';*/
          // Xb1.checked=false;
          // Xb2.checked=true;
          // console.log('女')
          this.iptXb1.isSel = false;
          this.iptXb2.isSel = true;
        }
        document.getElementById("CSRQ").value = birthdayValue;
      }
    },
    // 复选框验证
    isSel(s) {
      if (s !== "请选择") {
        return true;
      }
      return false;
    }
  },
  watch: {
    // 監聽data聲明過得數據
    sfzhVal(newVal, oldVal) {
      // 满足条件
      if (this.isSfzh(newVal)) {
        this.tagSfzh = "right";
        this.getBirSexBySfz(newVal);
      } else {
        this.tagSfzh = "error";
      }
    },
    xmVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isOnlyChinese(newVal)) {
        this.tagXm = "right";
      } else {
        this.tagXm = "error";
      }
    },
    D_LXDHVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isMobil(newVal)) {
        this.tagD_LXDH = "right";
      } else {
        this.tagD_LXDH = "error";
      }
    },
    XZQHVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isOnlyChinese(newVal)) {
        this.tagXZQH = "right";
      } else {
        this.tagXZQH = "error";
      }
    },
    D_JJLXRVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isOnlyChinese(newVal)) {
        this.tagD_JJLXR = "right";
      } else {
        this.tagD_JJLXR = "error";
      }
    },
    D_JJLXDHVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isMobil(newVal)) {
        this.tagD_JJLXDH = "right";
      } else {
        this.tagD_JJLXDH = "error";
      }
    },
    yjaddressVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isMailAdd(newVal)) {
        this.tagYjaddress = "right";
      } else {
        this.tagYjaddress = "error";
      }
    },
    M_YBVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isMailNum(newVal)) {
        this.tagM_YB = "right";
      } else {
        this.tagM_YB = "error";
      }
    },
    M_SJRVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isOnlyChinese(newVal)) {
        this.tagM_SJR = "right";
      } else {
        this.tagM_SJR = "error";
      }
    },
    M_DHVal(newVal, oldVal) {
      //
      // 满足条件
      if (this.isMobil(newVal)) {
        this.tagM_DH = "right";
      } else {
        this.tagM_DH = "error";
      }
    },
    // 选择框内容验证
    minZuVal(newVal, oldVal) {
      // 满足条件
      if (this.isSel(newVal)) {
        this.tagMinZu = "right";
      } else {
        this.tagMinZu = "error";
      }
    },
    CSDVal(newVal, oldVal) {
      // 满足条件
      if (this.isSel(newVal)) {
        this.tagCSD = "right";
      } else {
        this.tagCSD = "error";
      }
    },
    minZuVal(newVal, oldVal) {
      // 满足条件
      if (this.isSel(newVal)) {
        this.tagMinZu = "right";
      } else {
        this.tagMinZu = "error";
      }
    },
    yJVal(newVal, oldVal) {
      // 满足条件
      console.log(newVal);
    }
  },
  computed: {},
  mounted() {
    // 业务类型
    // 香港业务
    $(".xgyw").on('click',(event)=> {
      // 清除所有选项样式
      $(".xgyw").removeClass('selQz');
      var $this = $(event.target);
      $this.addClass('selQz');
      this.gaVal[0] = $this.attr('id');
    }),
    // 澳门业务
    $(".amyw").on('click',(event)=> {
      // 清除所有选项样式
      $(".amyw").removeClass('selQz');
      var $this = $(event.target);
      $this.addClass('selQz');
      this.gaVal[1] = $this.attr('id');
    }),
    // 台湾业务
    $(".twyw").on('click',(event)=> {
      // 清除所有选项样式
      $(".twyw").removeClass('selQz');
      var $this = $(event.target);
      $this.addClass('selQz');
      this.twVal = $this.attr('id');
    })
  }
};
</script>

<style>
form {
  margin-top: 1rem;
}
form section {
  color: #666;
  background-color: #fff;
  margin-bottom: 0.6rem;
}
form section h4.tips {
  position: relative;
  box-sizing: border-box;
  height: 2.4rem;
  line-height: 1rem;
  font-size: 0.8rem;
  padding: 0.7rem 1.7rem;
  border-bottom: 1px solid #ececec;
}
form section h4.tips i {
  position: absolute;
  left: 1rem;
  display: inline-block;
  width: 0.3rem;
  height: 1rem;
  background-color: #fe9d01;
}
.sel {
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
}
.marginTop1 {
  margin-top: 0.5rem;
}
.marginTop3 {
  margin-top: 3rem;
}
/* 业务类型 */
.yw {
  position: relative;
  /* height: 3.0rem; */
  box-sizing: border-box;
  background-color: #fff;
  /* border-bottom: 1px solid #ececec; */
}
.yw.sels {
  /* border: 1px solid rgb(22, 160, 133); */
  /* border-radius: 0.3rem; */
}
.yw label {
  display: block;
  height: 3rem;
  padding: 0 1rem;
  line-height: 3rem;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
}
.yw label.selqz {
  background-color: rgba(22, 160, 133, 0.4);
}
.yw .qz {
  position: relative;
  line-height: 2.6rem;
  padding: 0 1rem;
  border-bottom: 1px solid #ececec;
}
.yw .qz p {
  display: inline-block;
  line-height: 2.6rem;
  font-size: 0.6rem;
}
.yw .qz span {
  display: inline-block;
  box-sizing: border-box;
  line-height: 1.4rem;
  padding: 0.2rem 0.6rem;
  border-radius: 0.3rem;
  border: 1px solid rgb(22, 160, 133);
  color: rgb(22, 160, 133);
  margin-left: 0.5rem;
  font-size: 0.6rem;
}
/* 选中项 */
.yw .qz span.selQz {
  background-color: rgb(22, 160, 133);
  color: #fff;
}
.yw label img {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 10rem;
  margin-top: 0.6rem;
}
.selHz label img {
  width: 3rem;
}
.selGa label img {
  width: 6.2rem;
}
.yw input {
  height: 1rem;
  width: 2.6rem;
  box-sizing: border-box;
}
</style>