// pages/module/toast/taost.js
const RuiToast = require('../../../component/toast/RuiToast.js');
Page({
  onLoad(){
    
  },
  toast(){
    // RuiToast.showToast({ content: 'A', type: 'circle' })
    RuiToast.showToast({ type: 'innerhtml' })
  }
})