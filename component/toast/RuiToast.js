class RuiToast{
  constructor(){}
  getCtx(selector){
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const componentCtx = ctx.selectComponent(selector);
    if (!componentCtx) {
      console.error('无法找到对应的组件，请按文档说明使用组件');
      return null;
    }
    return componentCtx;
  }
  showToast(options){
    const { selector = '#toast' } = options;
    const ctx = this.getCtx(selector);

    ctx.handleShow(options);
  }
  hideToast(selector = '#toast'){
    const ctx = this.getCtx(selector);
  }
  hideToastModal(page,selector = "#toast"){
    const ctx = page.selectComponent(selector);
    ctx.handleHide();
  }
}
module.exports = new RuiToast();