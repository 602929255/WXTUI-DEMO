// pages/comswiper/comswiper.js
var banner = require("../../../src/js/banner.js");
Page({
  onShareAppMessage(opts) {
    return {
      title: 'WX-RUI小程序示例',
      path: '/pages/index/index',
      imageUrl: '../../../src/images/shareLogo.jpg'
    }
  },
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