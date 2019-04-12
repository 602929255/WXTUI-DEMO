// pages/previewimage/previewimage.js
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 图片预览 】', path: '/pages/previewimage/previewimage' })),
  data: {
    previewImageArr:[]
  },
  previewImage(e){
    var self = this;
    wx.chooseImage({
      count:8,
      success(res) {
        var tempFilePaths = res.tempFilePaths;
        self.setData({ previewImageArr: tempFilePaths});
      }
    })
  },
  changePreview(e){
    var self = this;
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: self.data.previewImageArr
    })
  }
})