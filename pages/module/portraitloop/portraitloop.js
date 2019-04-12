// pages/comswiper/comswiper.js
var banner = require("../../../src/js/banner.js");
const uilt = require('../../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例之【 纵向衔接滑动轮播(纵向循环) 】', path: '/pages/module/portraitloop/portraitloop' })),
  data: {
    current: 0,
    bannerList: banner.bannerList
  },
  changeFun(e) {
    this.setData({ current: e.detail.current })
  },
  getIndex(e) {
    this.setData({ current_text: e.detail.index })
  }
})