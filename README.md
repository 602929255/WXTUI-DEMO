## 博客
1. 码云博客：[Rattenking 博客](http://rattenking.gitee.io/stone/index.html)
2. CSDN博客：[Rattenking的博客](https://blog.csdn.net/m0_38082783)

## 五子棋详解
1. [微信小程序（游戏）—-五子棋（棋盘，重置，对弈篇）](https://blog.csdn.net/m0_38082783/article/details/79035553)
2. [微信小程序（游戏）—-五子棋（悔棋篇）](https://blog.csdn.net/m0_38082783/article/details/79045637)
3. [微信小程序（游戏）—-五子棋（AI篇）](https://blog.csdn.net/m0_38082783/article/details/79076928)
4. [微信小程序（游戏）—-五子棋（总结）](https://blog.csdn.net/m0_38082783/article/details/79087975)

## h5puzzle.js的说明
### 拖拽拼图游戏详解
1. [微信小程序----拼图游戏流程设计](http://rattenking.gitee.io/stone/2018/04/12/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F-%E6%8B%BC%E5%9B%BE%E6%B8%B8%E6%88%8F%E6%B5%81%E7%A8%8B%E8%AE%BE%E8%AE%A1/)
2. [微信小程序—-拖拽拼图游戏之图片分块和打乱顺序](http://rattenking.gitee.io/stone/2018/04/12/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E2%80%94-%E6%8B%96%E6%8B%BD%E6%8B%BC%E5%9B%BE%E6%B8%B8%E6%88%8F%E4%B9%8B%E5%9B%BE%E7%89%87%E5%88%86%E5%9D%97%E5%92%8C%E6%89%93%E4%B9%B1%E9%A1%BA%E5%BA%8F/)
3. [微信小程序----拖拽拼图之拖拽和切换](http://rattenking.gitee.io/stone/2018/04/12/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F-%E6%8B%96%E6%8B%BD%E6%8B%BC%E5%9B%BE%E4%B9%8B%E6%8B%96%E6%8B%BD%E5%92%8C%E5%88%87%E6%8D%A2/)
### 使用步骤
#### 1. 在当前页面对h5puzzle.js的引入
```
const Puzzle = require("./h5puzzle.js");
```
#### 2. Puzzle的使用
```
Page({
  data: {
    imgPoints: [],
    imgArr: ['../../src/images/quanyecha.jpg', '../../src/images/haidao.jpg', '../../src/images/mingren1.jpg', '../../src/images/qilongzhu1.jpg','../../src/images/quanye.jpg'],
    imgUrl: '../../src/images/quanyecha.jpg',
    levelArr: [{id: 2,text: '弱智'},{id: 3,text: '简单'},{id: 4,text: '普通'},{id: 5,text: '困难'},{id: 6,text: '变态'},{id: 7,text: '无语'},{id: 8,text: '天才'},{id: 9,text: '疯子'},{id: 10,text: '想死'},{id: 11,text: '已死'}],
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
```
#### 参数说明
> type: 拼图的矩阵数

## luck.js的说明
### 刮刮乐详解
1. [微信小程序----canvas实现刮刮乐效果](https://blog.csdn.net/m0_38082783/article/details/79458895)
### 使用步骤
#### 1. 在当前页面对luck.js的引入
```
const Luck = require("./luck.js");
```
#### 2. Luck的使用

```
Page({
  data:{
    width: '',
    height: ''
  },
  onLoad(){
    this.luck = new Luck(this,{
      canvasId: 'luck',
      width: 300,
      height: 150,
      maskColor: '#dddddd',
      size: 10,
      scale: 0.2
    });
  }
})
```
#### 参数说明

>1. canvasId: 刮刮乐canvas的canvas-id值
>2. width: 刮刮乐canvas的宽度
>3. height: 刮刮乐canvas的高度
>4. maskColor: 刮刮乐canvas的涂层颜色
>5. size: 刮去部分的半径
>6. scale: 刮去部分占整体的百分比，大于就去掉涂层

## h5lock.js的说明
### 手势锁详解
1. [微信小程序----手势锁详解](https://blog.csdn.net/m0_38082783/article/details/79446300)
2. [微信小程序----手势图案锁屏](https://blog.csdn.net/m0_38082783/article/details/79014696)

### 使用步骤
#### 1. 在当前页面对h5lock.js的引入
```
const Locker = require("./h5lock.js");
```
#### 2. Locker的使用

```
Page({
  data: {
    title: '请绘制您的图形密码'
  },
  onReady(){
    this.lock = new Locker(this,{
      id: 'canvas',
      cleColor:'rgba(0,136,204,1)',
      cleCenterColor:'rgba(0,136,204,1)',
      chooseType: 3
    });
  },
  resetPwd() {
    this.lock.updatePassword();
  }
})
```
#### 参数说明

>1. id: 手势锁canvas的canvas-id值
>2. width: 手势锁canvas的宽度
>3. height: 手势锁canvas的高度
>4. cleColor: 手势锁canvas的锁圆颜色
>5. cleCenterColor: 手势锁canvas的解锁路线颜色
>6. chooseType: 手势锁的矩阵

## TUI微信小程序DEMO
1. accordion（折叠面板）

> 采用微信小程序的view组件和WXSS配合，通过判断状态值，确定激活的状态栏实现折叠面板。
---
>折叠面板详解
>1. [微信小程序----折叠面板（MUI折叠面板）](https://blog.csdn.net/m0_38082783/article/details/78890597)

2. actionsheet（操作表）

> 采用微信小程序的原生API接口wx.showActionSheet(OBJECT)，唤醒操作列表，然后对操作列表进行配置。
---
>操作表详解
>1. [微信小程序----wx.showActionSheet(OBJECT)操作菜单（MUI操作表）](https://blog.csdn.net/m0_38082783/article/details/78970471)

3. button（按钮）

> 采用微信小程序的button原生组件实现。
---
>按钮详解
>1. [微信小程序----button组件](https://blog.csdn.net/m0_38082783/article/details/78923252)

4. cardview（卡片视图）

> 文字配合图片的一种展现形式，采用view和text组件实现。

5. checkbox（复选框）

> 采用checkbox组件实现。
---
>复选框详解
>1. [微信小程序----checkbox组件](https://blog.csdn.net/m0_38082783/article/details/78958027)

6. radio（单选框）

> 采用radio组件实现。
---
>单选框详解
>1. [微信小程序----radio组件](https://blog.csdn.net/m0_38082783/article/details/78958100)

7. date time（日期时间）

> 采用picker组件，然后自定义时间数据实现。
---
>日期时间详解
>1. [微信小程序----日期时间选择器（自定义精确到分秒或时段）（MUI日期时间）](https://blog.csdn.net/m0_38082783/article/details/78921283)

8. dialog（消息框）

> 调用微信小程序原生API接口showToast和showModal实现，当然部分不全面的，可以采用自定义样式完成。
---
>消息框详解
>1. [微信小程序----界面交互反馈API（wx.showToast(OBJECT)、wx.showModal(OBJECT)）（MUI消息框）](https://blog.csdn.net/m0_38082783/article/details/78958263)

9. gallery slider（图片轮播）

> 采用swiper组件实现图片的轮播。
---
>图片轮播详解
>1. [微信小程序----gallery slider（图片轮播）组件](https://blog.csdn.net/m0_38082783/article/details/78835082)

10. gallery table（图文表格）

> 采用微信小程序的原生组件view利用display：table样式布局。

11. grid（9宫格）

> 采用微信小程序的原生组件view利用display：table样式布局。

12. icon（图标）

> 配合阿里巴巴矢量图标库实现的外部图库引入使用。
---
>图标详解
>1. [ 微信小程序----icon组件](https://blog.csdn.net/m0_38082783/article/details/78901310)
>2. [ 微信小程序----引入外部字体库iconfont的图标](https://blog.csdn.net/m0_38082783/article/details/78873053)

13. list（列表）

> 单纯的文字列表，采用view组件实现。
---
>列表详解
>1. [微信小程序----模板（template）](https://blog.csdn.net/m0_38082783/article/details/78909416)

14. media list（图文列表）

> 采用图片浮动，剩余部分文字的样式，overflow实现。
---
>图文列表详解
>1. [微信小程序----模板（template）](https://blog.csdn.net/m0_38082783/article/details/78909416)

15. nav bar（导航栏）

> 导航栏透明渐变。
---
>导航栏详解
>1. [微信小程序----导航栏透明渐变一（MUI导航栏透明渐变）](https://blog.csdn.net/m0_38082783/article/details/78854045)
>2. [微信小程序----导航栏透明渐变二（MUI导航栏透明渐变）](https://blog.csdn.net/m0_38082783/article/details/78854603)

16. number box（数字输入框）

> 购物车商品加减样式的实现。
---
>数字输入框详解
>1. [微信小程序----MUI数字输入框](https://blog.csdn.net/m0_38082783/article/details/78981705)

17. off canvas（侧滑导航）

> 隐藏导航的滑出样式，实现原理是保持主题不动，导航滑出，同时给主题添加遮罩层。
---
>侧滑导航详解
>1. [微信小程序----侧滑菜单（Popup----左侧不动，右侧滑动）（MUI侧滑导航）](https://blog.csdn.net/m0_38082783/article/details/78842147)
>2. [微信小程序----侧滑菜单（Popup----左侧滑动，右侧不动）（MUI侧滑导航）](https://blog.csdn.net/m0_38082783/article/details/78843737)

18. picker（选择器）

> 多级联动的选择器，定义个性数据，采用picker组件进行展示。
---
>选择器详解
>1. [微信小程序----picker选择器（picker、省市区选择器）（MUI选择器）](https://blog.csdn.net/m0_38082783/article/details/78912757)

19. progress bar（进度条）

> 采用原生的progress组件，设置不同的属性，实现的炫彩效果。
---
>进度条详解
>1. [微信小程序----progress组件](https://blog.csdn.net/m0_38082783/article/details/78931275)

20. pull to refresh（下拉刷新和上拉加载更多）

> 调用onPullDownRefresh方法和onReachBottom方法实现下拉刷新和上拉加载更多。
---
>下拉刷新和上拉加载更多详解
>1. [微信小程序----列表下拉刷新上拉加载（MUI下拉刷新和上拉加载更多）](https://blog.csdn.net/m0_38082783/article/details/78968996)

21. range（滑块）

> slider组件实现滑块滑动。
---
>滑块详解
>1. [微信小程序----slider组件](https://blog.csdn.net/m0_38082783/article/details/78933362)

22. switch（开关）

> switch组件实现开关。
---
>开关详解
>1. [微信小程序----switch组件（开关选择器）](https://blog.csdn.net/m0_38082783/article/details/78939087)

23. tab bar（选项卡）

> WXSS控制样式，JS判断当前展示的项目
---
>选项卡详解
>1. [微信小程序----导航栏选项卡（MUI顶部选项卡）](https://blog.csdn.net/m0_38082783/article/details/78929436)

24. indexed list（索引列表）

> scroll-view组件配合view组件实现，主要是采用了scroll-view组件的滚动以及定位。
---
>索引列表详解
>1. [微信小程序----全国机场索引列表（MUI索引列表）](https://blog.csdn.net/m0_38082783/article/details/78865595)

25. locker（手势图案锁屏）

> 自定义插件lock，通过canvas实现手势图案锁屏。
---
>手势图案锁屏详解
>1. [微信小程序----手势锁详解](https://blog.csdn.net/m0_38082783/article/details/79446300)
>2. [微信小程序----手势图案锁屏](https://blog.csdn.net/m0_38082783/article/details/79014696)

26. image viewer（图片预览）

> 调用原生接口previewImage，实现图片的预览。
---
>图片预览详解
>1. [微信小程序----图片预览](https://blog.csdn.net/m0_38082783/article/details/79003243)

27. scroll nav （YDUI的滚动导航）

> scroll-view组件实现，布局和样式不同。
---
>YDUI的滚动导航详解
>1. [微信小程序----实现YDUI的ScrollNav组件（滚动导航）](https://blog.csdn.net/m0_38082783/article/details/79141048)

28. scroll tab （YDUI的滚动选项卡）

> scroll-view组件实现，布局和样式不同。
---
>YDUI的滚动选项卡详解
>1. [微信小程序----实现YDUI的ScrollTab（滚动选项卡）](https://blog.csdn.net/m0_38082783/article/details/79162120)

29. map （地图）

> map组件配合高德地图的接口实现，比原生接口更快。
---
>地图详解
>1. [微信小程序----高德地图开发应用（获取key）](https://blog.csdn.net/m0_38082783/article/details/79225691)
>2. [微信小程序----map路线规划](https://blog.csdn.net/m0_38082783/article/details/79230957)
>3. [微信小程序----map组件实现检索【定位位置】周边的POI](https://blog.csdn.net/m0_38082783/article/details/79280293)
>4. [微信小程序----map组件实现解析经纬度](https://blog.csdn.net/m0_38082783/article/details/79286279)
>5. [微信小程序----map组件实现（获取定位城市天气或者指定城市天气数据）](https://blog.csdn.net/m0_38082783/article/details/79286451)
>6. [微信小程序----map组件实现（高德地图API实现wx.chooseLocation（OBJECT））](https://blog.csdn.net/m0_38082783/article/details/79286677)
>7. [微信小程序----map组件实现（路线规划）](https://blog.csdn.net/m0_38082783/article/details/79287428)

30. loading （自定义加载图标）

> 自定义各种加载图标，适用于各个场景。

31. luckdraw（刮刮乐抽奖）

> 制作luck插件，实现刮刮乐抽奖。
---
>刮刮乐抽奖详解
>1. [微信小程序----canvas实现刮刮乐效果](https://blog.csdn.net/m0_38082783/article/details/79458895)

32. puzzle（拼图游戏）

> 制作puzzle插件，实现拖拽拼图游戏。
---
>拼图游戏详解
>1. [微信小程序----拼图游戏流程设计](http://rattenking.gitee.io/stone/2018/04/12/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F-%E6%8B%BC%E5%9B%BE%E6%B8%B8%E6%88%8F%E6%B5%81%E7%A8%8B%E8%AE%BE%E8%AE%A1/)
>2. [微信小程序—-拖拽拼图游戏之图片分块和打乱顺序](http://rattenking.gitee.io/stone/2018/04/12/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E2%80%94-%E6%8B%96%E6%8B%BD%E6%8B%BC%E5%9B%BE%E6%B8%B8%E6%88%8F%E4%B9%8B%E5%9B%BE%E7%89%87%E5%88%86%E5%9D%97%E5%92%8C%E6%89%93%E4%B9%B1%E9%A1%BA%E5%BA%8F/)
>3. [微信小程序----拖拽拼图之拖拽和切换](http://rattenking.gitee.io/stone/2018/04/12/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F-%E6%8B%96%E6%8B%BD%E6%8B%BC%E5%9B%BE%E4%B9%8B%E6%8B%96%E6%8B%BD%E5%92%8C%E5%88%87%E6%8D%A2/)

33. countDown (团购或者秒杀的批量倒计时)

> 利用微信小程序的变量属性，将活动结束时间提取，做批量处理渲染，实现批量倒计时。
---
>团购或者秒杀的批量倒计时详解
>1. [微信小程序----团购或秒杀的批量倒计时实现](https://blog.csdn.net/m0_38082783/article/details/79851175)
