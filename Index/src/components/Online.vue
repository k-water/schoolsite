<template>
  <div class="wrap">
    <div id="rightArrow" @click="show()">
      <a href="javascript:;" title="在线咨询">在线咨询</a>
    </div>
    <div id="floatDivBoxs">
      <div class="floatDtt">申老师</div>
      <div class="floatShadow">
        <ul class="floatDqq">
          <li style="padding-left:0px;">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=352403875&site=qq&menu=yes">
              <div style="width: 39px; height: 44px; float: left">
                <img src="https://oc1gyfe6q.qnssl.com/17-5-15/59871916-file_1494779743969_47e6.png" width="39" align="absmiddle">
              </div>
              <span style="color: #000; padding: 5px 0 0 10px">352403875</span>
            </a>
          </li>
        </ul>
        <div class="floatDtxt">联系电话</div>
        <div class="floatDtel">
          <span>15717481021</span>
        </div>
        <div style="text-align:center;padding:10px;background:#EBEBEB;"><img src="https://oc1gyfe6q.qnssl.com/17-5-17/12922047-file_1495034016202_77a4.png" width="100%">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let flag = 0
export default {
  data() {
    return {

    }
  },
  methods: {
    show() {
      const floatDivBoxs = document.getElementById('floatDivBoxs')
      const rightArrow = document.getElementById('rightArrow')
      if(flag == 1) {
        floatDivBoxs.style.right = '-175px'
        rightArrow.style.right = '-5px'
        flag = 0
      }else {
        floatDivBoxs.style.right = '0px'
        rightArrow.style.right = '170px'
        flag = 1
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#floatDivBoxs {
  width: 170px;
  background: #fff;
  position: fixed;
  top: 100px;
  right: -175px;
  z-index: 999;
}

#floatDivBoxs .floatDtt {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #f08326;
  color: #fff;
  font-size: 18px;
  text-indent: 22px;
  position: relative;
}

#floatDivBoxs .floatDqq {
  padding: 0 14px;
}

#floatDivBoxs .floatDqq li {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  border-bottom: 1px solid #e3e3e3;
  padding: 0 0 0 50px;
}

#floatDivBoxs .floatDtxt {
  font-size: 18px;
  color: #333;
  padding: 12px 14px;
}

#floatDivBoxs .floatDtel {
  padding: 0 0 15px 10px;
}

#floatDivBoxs .floatDtel span {
  font-size: 16px;
  color: #f00;
  text-align: center;
}

#floatDivBoxs .floatDtel img {
  display: block;
}

#floatDivBoxs .floatDbg {
  width: 100%;
  height: 20px;
  background: url(https://oc1gyfe6q.qnssl.com/17-5-15/11451879-file_1494778898756_4337.jpg) no-repeat;
  box-shadow: -2px 0 3px rgba(0, 0, 0, 0.25);
}

.floatShadow {
  background: #fff;
  box-shadow: -2px 0 3px rgba(0, 0, 0, 0.25);
}

#rightArrow {
  width: 40px;
  position: fixed;
  background: #fb0;
  top: 100px;
  right: 0px;
  z-index: 999;
}

#rightArrow a {
  display: block;
  color: rgb(255, 255, 255);
  font-size: 16px;
  text-align: center;
  font-family: 微软雅黑;
  padding: 10px;
}
</style>
