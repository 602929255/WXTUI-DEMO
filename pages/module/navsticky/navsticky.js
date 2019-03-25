const list = require('../sticky/list.js');
const banner = require("../../../src/js/banner.js");
const BaseMathod = require('../../../src/js/BaseMathod.js');
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
    bannerList: banner.bannerList,
    current: 0,
    navcur: 0,
    curNodes: 0,
    navlist: ['VUE实战','VUE基础','ES6基础','CSS基础']
  },
  changeFun(e) {
    this.setData({ current: e.detail.current })
  },
  getNavIndex(e){
    let index = e.currentTarget.dataset.index;
    if (this.data.navcur == index) return false;
    this.setData({ navcur: index, curNodes: this.data.tops[index].top - 55})
  },
  getScrollTop(e){
    let scrollTop = e.detail.current.detail.scrollTop;
    let navcur = parseInt(this.data.navcur);
    let min = this.data.tops[navcur].top;
    let max = this.data.tops[navcur + 1] ? this.data.tops[navcur + 1].top : this.data.tops[navcur].top;
    if (max -56 < scrollTop && navcur < this.data.tops.length - 1){
      navcur++
    } else if(min - 56 > scrollTop && navcur > 0) {
      navcur--
    }
    this.setData({ navcur: navcur})
  },
  onReady(){
    BaseMathod._getNodesInfo(this, '.rui-goods-nodes');
  }
})