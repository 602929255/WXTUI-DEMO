//app.js
const BaseMathod = require('./src/js/BaseMathod.js');
App({
  onLaunch(){
    // 更新版本检测下载
    BaseMathod._updateManger();
  }
})