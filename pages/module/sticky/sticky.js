const list = require('./list.js');
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
    list: list,
    bannerList: banner.bannerList
  }
})