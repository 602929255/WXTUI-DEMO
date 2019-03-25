const list = require('../../pages/module/sticky/list.js');
const banner = require("../../src/js/banner.js");
Page({
  data: {
    scrollTop: null,
    list: list,
    bannerList: banner.bannerList
  },
  //滚动条监听
  scroll: function (e) {
    this.setData({ scrollTop: e.detail.scrollTop })
  },
})