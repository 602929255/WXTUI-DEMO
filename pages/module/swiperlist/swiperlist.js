// pages/comswiper/comswiper.js
var banner = require("../../../src/js/banner.js");
const uilt = require('../../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例之【 衔接滑动轮播(当前/总页) 】', path: '/pages/module/swiperlist/swiperlist' })),
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