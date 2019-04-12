// pages/comswiper/comswiper.js
var banner = require("../../../src/js/banner.js");
const uilt = require('../../../utils/util.js');

Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例之【 前后边距滑动轮播 】', path: '/pages/module/comswiper/comswiper' })),
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