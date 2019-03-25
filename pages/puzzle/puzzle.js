const Puzzle = require("./h5puzzle.js");
Page({
  data: {
    imgPoints: [],
    imgArr: [
      'https://rattenking.gitee.io/stone/images/wx/images/quanyecha.jpg', 
      'https://rattenking.gitee.io/stone/images/wx/images/haidao.jpg', 
      'https://rattenking.gitee.io/stone/images/wx/images/mingren1.jpg', 
      'https://rattenking.gitee.io/stone/images/wx/images/qilongzhu1.jpg',
      'https://rattenking.gitee.io/stone/images/wx/images/quanye.jpg'
    ],
    imgUrl: 'https://rattenking.gitee.io/stone/images/wx/images/quanyecha.jpg',
    levelArr: [
      {
        id: 2,
        text: '弱智'
      },
      {
        id: 3,
        text: '简单'
      },
      {
        id: 4,
        text: '普通'
      },
      {
        id: 5,
        text: '困难'
      },
      {
        id: 6,
        text: '变态'
      }
    ],
    WIDTH: 0,
    HEIGHT: 0,
    width: 0,
    height: 0,
    status: false,
    trans: 0,
    currentX: 0,
    currentY: 0,
    currentPX: 0,
    currentPY: 0,
    type0: 4
  },
  onReady(){
    let _this = this;
    
    new Puzzle(this);
  },
  getType(e){
    this.setData({
      trans: -this.data.WIDTH,
      type0: e.currentTarget.dataset.type
    })
    this.puzzle = new Puzzle(this, {
      type: e.currentTarget.dataset.type
    })
  },
  getUrl(e){
    this.setData({
      trans: -this.data.WIDTH * 2,
      imgUrl: e.currentTarget.dataset.url
    })
  }
})