// pages/tabbar/tabbar.js
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 底部选项卡 】', path: '/pages/tabbar/tabbar' })),
  data: {
    index: 0
  },
  changeTabbar(e){
    this.setData({ index: e.currentTarget.dataset.id})
  }
})