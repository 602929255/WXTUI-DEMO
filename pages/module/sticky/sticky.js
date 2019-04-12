const list = require('./list.js');
var banner = require("../../../src/js/banner.js");
const uilt = require('../../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例之【 商品列表header切换吸顶 】', path: '/pages/module/sticky/sticky' })),
  data: {
    list: list,
    bannerList: banner.bannerList
  }
})