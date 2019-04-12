// pages/swiper/swiper.js
var banner = require("../../src/js/banner.js");
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 图片轮播 】', path: '/pages/swiper/swiper' })),
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
    banner_url: banner.bannerList
  },
  autoplaySwiper(e){
    this.setData({ autoplay: !this.data.autoplay});
  }
})