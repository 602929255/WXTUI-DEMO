// pages/module/picker/picker.js
Page({
  data: {
    yearvalue: '2019',
    monthvalue: '2019-03',
    dayvalue: '2019-03-19',
    hourvalue: '2019-03-19 15',
    minutevalue: '2019-03-19 15:47',
    secondvalue: '2019-03-19 15:47:25',
    value: '2019-03-15 10:45:45',
    value1: '2022-08-15 10:45:23',
  },
  onShareAppMessage(opts) {
    return {
      title: 'WX-RUI小程序示例',
      path: '/pages/index/index',
      imageUrl: '../../../src/images/shareLogo.jpg'
    }
  },
  changeYear(e){
    console.log(e.detail.value)
    this.setData({ yearvalue: e.detail.value})
  },
  changeMonth(e){
    console.log(e.detail.value)
    this.setData({ monthvalue: e.detail.value})
  },
  changeDay(e){
    console.log(e.detail.value)
    this.setData({ dayvalue: e.detail.value})
  },
  changeHour(e){
    console.log(e.detail.value)
    this.setData({ hourvalue: e.detail.value})
  },
  changeMinute(e){
    console.log(e.detail.value)
    this.setData({ minutevalue: e.detail.value})
  },
  changeSecond(e){
    console.log(e.detail.value)
    this.setData({ secondvalue: e.detail.value})
  },
  changeDate0(e){
    console.log(e.detail.value)
    this.setData({ value: e.detail.value})
  },
  changeDate1(e){
    console.log(e.detail.value)
    this.setData({ value1: e.detail.value})
  }
})