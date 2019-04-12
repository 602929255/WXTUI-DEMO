// pages/module/toast/taost.js
const RuiToast = require('../../../component/toast/RuiToast.js');
const uilt = require('../../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例之【 Modal 自定义模态框】', path: '/pages/module/toast/taost' })),
  onLoad(){
  },
  getInput(e){
    console.log(e.detail.value)
  },
  confirmtoast(e){
    RuiToast.hideToastModal(this);
  },
  canceltoast(e){
    console.log(e.detail.value)
  },
  toast1() {
    RuiToast.showToast({
      type: 'mask',
      title: '基础使用提示', 
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast2() {
    RuiToast.showToast({
      cancelShow: false,
      type: 'mask',
      title: '标题',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast3() {
    RuiToast.showToast({
      type: 'mask',
      // title: '无标题模态框',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast4() {
    RuiToast.showToast({
      type: 'mask',
      lineClamp: 10,
      title: '多行文本模态框',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast5() {
    RuiToast.showToast({
      type: 'mask',
      confirmColor: '#4e92df',
      title: '修改确认按钮颜色',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast6() {
    RuiToast.showToast({
      type: 'mask',
      cancelText: '暂不更新',
      confirmText: '立即更新',
      title: '修改按钮文本',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast7() {
    RuiToast.showToast({
      type: 'mask',
      title: '文本对齐方式',
      textAlign: 'center',
      content: 'uni-app实现了一套代码!'
    })
  },
  toast8() {
    RuiToast.showToast({
      type: 'mask',
      flagMask: true,
      title: '开启遮罩层关闭事件',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast9() {
    RuiToast.showToast({
      type: 'mask',
      closeStyle: 'right:-3vw;top:-10vw;',
      closeShow: true,
      title: '启动关闭按钮',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast10(e) {
    this.setData({ selftext:e.currentTarget.dataset.self});
    RuiToast.showToast({
      type: 'mask',
      title: '自定义文本位置内容'
    })
  },
  toast11(e) {
    this.setData({ selftext:e.currentTarget.dataset.self});
    RuiToast.showToast({
      type: 'mask',
      closeStyle: 'right:auto;top:auto;bottom:-15vw;left:50%;transform:translateX(-50%)',
      closeShow: true,
      native: false
    })
  },
  toast12() {
    RuiToast.showToast({
      type: 'default',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast13() {
    RuiToast.showToast({
      type: 'circle',
      content: '热门'
    })
  },
  toast14() {
    RuiToast.showToast({
      type: 'success',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast15() {
    RuiToast.showToast({
      type: 'error',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast16() {
    RuiToast.showToast({
      type: 'warning',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  },
  toast17() {
    RuiToast.showToast({
      type: 'loading',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
    
    // 模拟数据加载5s后关闭加载
    setTimeout(() => { RuiToast.hideToastModal(this);},5000);
  },
  toast18() {
    RuiToast.showToast({
      type: 'selfimg',
      imgUrl: '/src/images/4.jpg',
      content: 'uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、H5、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具（底部7个终端选项卡代表7个终端模拟器）!'
    })
  }
})