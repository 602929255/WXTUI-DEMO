const icon = require('./icon.js');
const default_data = {
  title:'',
  content: '',
  icon: '',
  image: '',
  duration: 2,
  imgUrl: '',
  closeStyle: '',
  closeShow: false,
  lineClamp: 3,
  flagMask: false,
  textAlign: 'left',
  cancelShow: true,
  confirmColor: '#2ed39e',
  native: true,
  cancelText: '取消',
  confirmText: '确定',
  mask: true,
  visible: false,
  icon: icon,
  closeImg: icon.close,
  success: icon.success,
  error: icon.error,
  warning: icon.warning,
  loading: icon.loading,
  type: 'default', // default || success || warning || error || loading || circle
};

let timmer = null;

Component({
  externalClasses: ['rui-class'],

  options: {
    multipleSlots: true
  },
  data: default_data,
  properties: {
    ruiTitle: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached(){
      if(this.data.title === ''){
        this.setData({ title: this.data.ruiTitle})
      }
    }
  },
  methods: {
    catchMask(){
      return false;
    },
    clickMask(){
      if (this.data.flagMask){
        this.handleHide();
      }
    },
    cancel(e){
      this.handleHide();
      this.triggerEvent('canceltoast', { value: 'cancel' }, {});
    },
    confirm(e) {
      // this.handleHide();
      this.triggerEvent('confirmtoast', { value: 'confirm' }, {});
    },
    handleShow(options) {
      const { type = 'default', duration = 2 } = options;
      options.type = type;
      options.duration = duration;
      options.visible = true;

      this.setData(options);

      if (this.data.type !== 'mask' && this.data.type !== 'loading') {
        const d = this.data.duration * 1000;

        if (timmer) clearTimeout(timmer);
        if (d !== 0) {
          timmer = setTimeout(() => {
            this.handleHide();
            timmer = null;
          }, d);
        }
      }
    },

    handleHide() {
      this.setData(default_data);
    }
  }
});


