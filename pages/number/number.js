// pages/number/number.js
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 数字输入框 】', path: '/pages/number/number' })),
  data: {
    number: 1,
    number1: 5,
    disabled1: false,
    disabled2: false
  },
  prevNum(){
    this.setData({ number: this.data.number + 1 });
  },
  nextNum(){
    this.setData({ number: this.data.number - 1 });
  },
  prevNum1() {
    this.setData({ 
      number1: this.data.number1 >= 10 ? 10 : this.data.number1 + 1 ,
      disabled1: this.data.number1 !== 0 ? false : true,
      disabled2: this.data.number1 !== 10 ? false : true
    });
  },
  nextNum1() {
    this.setData({ 
      number1: this.data.number1 <= 0 ? 0 : this.data.number1 - 1 ,
      disabled1: this.data.number1 !== 0 ? false : true,
      disabled2: this.data.number1 !== 10 ? false : true
    });
  }
})