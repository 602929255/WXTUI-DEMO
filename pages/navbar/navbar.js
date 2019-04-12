const list = require('../../pages/module/sticky/list.js');
const banner = require("../../src/js/banner.js");
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 导航栏 】', path: '/pages/navbar/navbar' })),
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