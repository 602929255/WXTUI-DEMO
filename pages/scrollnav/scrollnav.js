// pages/scrollnav/scrollnav.js
Page({
  data: {
    navList: ['今日特惠', '烟灶推荐', '净水饮水推荐', '洗碗机推荐', '电热推荐', '燃热推荐', '消毒柜推荐', '嵌入式推荐', '商用电器','活动说明'],
    status: 0,
    list:[0,1,2,3,4,5,6,7,8,9]
  },
  getStatus(e){
    this.setData({ status: e.currentTarget.dataset.index, leftValue: e.currentTarget.dataset.index * 90 - 180})
  }
})