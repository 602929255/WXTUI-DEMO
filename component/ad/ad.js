Component({
  externalClasses: ['rui-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    type: {
      type: String,
      value: 'home'
    }
  },

  methods: {
    _aderror(e){
      console.log(e)
    },
    _adload(e){
      console.log(e)
    }
  }
})
