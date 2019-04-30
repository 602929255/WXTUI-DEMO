到 [GitHub](https://github.com/Rattenking/WXRUI) 下载 WX-RUI 的代码，将 component 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 swiper 为例，其它组件在对应的文档页查看：
### 1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：

```
"usingComponents": {
  "rui-swiper": "../../component/swiper/swiper"
}
```

### 2. 在 wxml 中使用组件：

#### 2.1 常规滑动轮播

```
<rui-swiper   
  swiperList="{{bannerList}}"   
  indicatorDots="true"   
  autoplay="true"
></rui-swiper>
```


#### 2.2 衔接滑动轮播(循环滑动轮播)

```
<rui-swiper   
  swiperList="{{bannerList}}"   
  indicatorDots="true"   
  autoplay="true"   
  circular="true"
></rui-swiper>
```

##### 效果图1 ---- 常规滑动轮播和循环滑动轮播
![常规滑动轮播和循环滑动轮播](http://rattenking.gitee.io/stone/images/rgif/swiper1.gif)
#### 2.3 纵向滑动轮播

```
<rui-swiper   
  swiperList="{{bannerList}}"   
  indicatorDots="true"   
  autoplay="true"   
  vertical="true"
></rui-swiper>
```

#### 2.4 纵向衔接滑动轮播(纵向循环滑动轮播)

```
<rui-swiper   
  swiperList="{{bannerList}}"   
  indicatorDots="true"   
  autoplay="true"   
  circular="true"   
  vertical="true"
></rui-swiper>
```

##### 效果图2 ---- 纵向滑动轮播和纵向循环滑动轮播
![纵向滑动轮播和纵向循环滑动轮播](http://rattenking.gitee.io/stone/images/rgif/swiper2.gif)
#### 2.5 后边距滑动

```
<rui-swiper   
  swiperList="{{bannerList}}"   
  indicatorDots="true"   
  autoplay="true"   
  imgwidth="90vw"   
  circular="true"   
  next-margin="30px"
></rui-swiper>
```

#### 2.6 前后边距滑动轮播

```
<rui-swiper   
  swiperList="{{bannerList}}"   
  indicatorDots="true"   
  autoplay="true"   
  current='{{current}}'   
  isOpacity="true"   
  isScale="true"    
  imgwidth="82vw"   
  circular="true"   
  previous-margin="30px"   
  next-margin="30px"   
  rui-class="rui-banner-img"  
  bindswiperfinish='changeFun'
></rui-swiper>
```

##### 效果图3 ---- 后边距滑动和前后边距滑动轮播
![后边距滑动和前后边距滑动轮播](http://rattenking.gitee.io/stone/images/rgif/swiper3.gif)
#### 2.7 多图片滑动轮播

```
<rui-swiper   
  swiperList="{{bannerList}}"   
  circular="true"   
  autoplay="true"   
  display-multiple-items="2"   
  swiperheight="21.333vw"   
  imgheight="21.333vw"   
  imgwidth="50vw"   
  current='0'
></rui-swiper>
```

#### 2.8 文字滑动导航

```
<rui-swiper   
  type="text"   
  class='rui-active'   
  swiperList="{{navList}}"   
  display-multiple-items="4"   
  swiperheight="12vw"   
  imgheight="12vw"   
  previous-margin="10px"   
  next-margin="10px"   
  current='{{current_text}}'   
  circular="true"   
  imgwidth="calc((100vw - 20px) / 4 - 40px)"   
  bindswipertap="getIndex"
></rui-swiper>
```

##### 效果图4 ---- 多图片滑动轮播和文字滑动导航效果图
![多图片滑动轮播和文字滑动导航效果图](http://rattenking.gitee.io/stone/images/rgif/swiper4.gif)
### 参数说明

| 属性名 |  类型 | 默认值 | 说明 |
|:------:|:------:|:------:|:------:|
| swiperwidth   |   String 　　|  '' | swiper的宽度 |
| swiperheight   |   String 　　 |　'' | swiper的高度 |
| imgwidth   |   String 　　 |　'' | swiper中图片的宽度 |
| imgheight   |   String 　　 |　'' | swiper中图片的高度 |
| swiperList   |   Array 　　 |　[] | swiper的内容数组 |
| interval   |   Number 　　 |　5000 | 自动切换时间间隔 |
| duration   |   Number 　　 |　500 | 滑动动画时长 |
| displayMultipleItems   |   Number 　　 | 1 | 同时显示的滑块数量 |
| current   |   Number 　　 | 0 | 当前所在滑块的 index |
| currentItemId   |   String 　　 | '' | 当前所在滑块的 item-id ，不能与 current 被同时指定 |
| indicatorColor   |   String 　　 | '' | 指示点颜色 |
| indicatorActiveColor   |   String 　　 | '' | 当前选中的指示点颜色 |
| previousMargin   |   String 　　 | '0px' | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 |
| nextMargin   |   String 　　 | '0px' | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 |
| autoplay   |   Boolean 　　 | false | 是否自动切换 |
| circular   |   Boolean 　　 | false | 是否采用衔接滑动 |
| vertical   |   Boolean 　　 | false | 滑动方向是否为纵向 |
| indicatorDots   |   Boolean 　　 | false | 是否显示面板指示点 |
| isOpacity   |   Boolean 　　 | false | 是否设置图片透明度 |
| isScale   |   Boolean 　　 | false | 是否设置图片缩放比例 |
| skipHiddenItemLayout   |   Boolean 　　 | false | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 |

**事件说明：**

|事件名称	|  类型 | 默认值 |说明		|
|---|---|---|---|
| bindswiperchange   |   EventHandle 　　 |  | current 改变时会触发 change 事件，event.detail = {current: current} |
| bindswiperfinish   |   EventHandle 　　 |  | 动画结束时会触发 animationfinish 事件，event.detail 同上 |

### WXRUI体验二维码
![WXRUI体验码](https://img-blog.csdnimg.cn/20190220140113256.jpg)
##### 如果文章对你有帮助的话，请打开微信扫一下二维码，点击一下广告，支持一下作者！谢谢！

### 其他

[我的博客，欢迎交流！](http://rattenking.gitee.io/stone/index.html)

[我的CSDN博客，欢迎交流！](https://blog.csdn.net/m0_38082783)

[微信小程序专栏](https://blog.csdn.net/column/details/18335.html)

[前端笔记专栏](https://blog.csdn.net/column/details/18321.html)

[微信小程序实现部分高德地图功能的DEMO下载](http://download.csdn.net/download/m0_38082783/10244082)

[微信小程序实现MUI的部分效果的DEMO下载](http://download.csdn.net/download/m0_38082783/10196944)

[微信小程序实现MUI的GIT项目地址](https://github.com/Rattenking/WXTUI-DEMO)

[微信小程序实例列表](http://blog.csdn.net/m0_38082783/article/details/78853722)

[前端笔记列表](http://blog.csdn.net/m0_38082783/article/details/79208205)

[游戏列表](http://blog.csdn.net/m0_38082783/article/details/79035621)