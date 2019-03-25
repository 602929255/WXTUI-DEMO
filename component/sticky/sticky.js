// component/sticky/sticky.js
Component({
  externalClasses: ['rui-class'],

  options: {
    multipleSlots: true
  },
  properties: {
    scroll: {
      type: Number,
      value: 0
    }
  },

  methods: {
    getScrollTop(e){
      this.triggerEvent('stickyscroll', { current: e }, {});
    }
  }
})
