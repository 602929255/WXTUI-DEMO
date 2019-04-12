// pages/progress/progress.js
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 进度条 】', path: '/pages/progress/progress' })),
  data: {
    index: 10
  },
  changeTabbar(e){
    this.setData({ index: e.currentTarget.dataset.id})
  }
})