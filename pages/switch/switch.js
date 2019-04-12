// pages/switch/switch.js
const uilt = require('../../utils/util.js');

var pageObj = {
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 开关 】', path: '/pages/switch/switch' })),
  data: {
    isChecked1: false,
    isChecked2: true,
    isChecked3: false,
    isChecked4: true,
    isChecked5: false,
    isChecked6: true
  }
};

for (var i = 0; i < 7; ++i) {
  (function (i) {
    pageObj['changeSwitch' + i] = function (e) {
      var changedData = {};
      changedData['isChecked' + i] = !this.data['isChecked' + i];
      this.setData(changedData);
    }
  })(i)
}
Page(pageObj);