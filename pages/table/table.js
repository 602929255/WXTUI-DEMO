// pages/table/table.js
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 内部图标库和外部图标库 】', path: '/pages/table/table' })),
  data: {
    typeList: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
  },
})