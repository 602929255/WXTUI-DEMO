// pages/offcanvas/offcanvas.js
var app = getApp();

const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 侧滑导航 】', path: '/pages/offcanvas/offcanvas' })),
  data: {
    nav_list: ['ES6学习之路', 'CSS特效', 'VUE实战', '微信小程序'],
    isOpen: false,
    chooseList: ''
  },
  chooseItem (e) {
    this.setData({ 
      isOpen: false,
      chooseList: e.currentTarget.dataset.text
    });
  },
  changeCanvas () {
    this.setData({ isOpen: !this.data.isOpen});
  }
})