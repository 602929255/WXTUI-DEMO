// component/index-list/index-list.js
Component({
  externalClasses: ['rui-class'],

  options: {
    multipleSlots: true
  },
  properties: {
    list:{
      type: Array,
      value: []
    },
    position: {
      type: String,
      value: 'right'
    }
  },
  data: {
    code: ''
  },
  methods: {
    getClickValue(e){
      // console.log(e.currentTarget.dataset.code)
      this.setData({ code: e.currentTarget.dataset.code})
      this.triggerEvent('toasttap', { code: e.currentTarget.dataset.code }, {});
    }
  }
})
