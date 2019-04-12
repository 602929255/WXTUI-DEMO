// pages/list/list.js
const uilt = require('../../utils/util.js');
Page({
  ...(uilt.getShareInfo({ title: 'WX-RUI小程序示例【 列表 】', path: '/pages/list/list' })),
  data: {
    menu: [{ 'title': '普通列表' }, { 'title': '图文列表' }, { 'title': '右侧有箭头列表' }, { 'title': '右侧无箭头列表'}]
  }
})