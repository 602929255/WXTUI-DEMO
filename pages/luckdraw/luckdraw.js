const Luck = require("./luck.js");
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 刮刮乐抽奖 】', path: '/pages/luckdraw/luckdraw' })),
  data:{
    width: '',
    height: ''
  },
  onLoad(){
    this.luck = new Luck(this);
  }
})