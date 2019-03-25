const default_data = {
  visible: false,
  content: '',
  icon: '',
  image: '',
  duration: 2,
  mask: true,
  type: 'default', // default || success || warning || error || loading || circle
};

let timmer = null;

Component({
  externalClasses: ['rui-class'],

  data: default_data,
  methods: {
    handleShow(options) {
      const { type = 'default', duration = 2 } = options;
      options.type = type;
      options.duration = duration;
      options.visible = true;

      this.setData(options);

      if (this.data.type !== 'innerhtml') {
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
