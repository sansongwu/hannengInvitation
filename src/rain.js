const $ = require('jquery');

module.exports = class Rain {
  constructor(styleData, animateData) {
    this.style = styleData || {
      width: '5px',
      height: '100px',
      backgroundColor: '#ffffff',
      zIndex: '11',
      position: 'absolute',
      opacity: '0.3',
    };
    this.animateData = animateData || {
      needStop: true, // 是否中间停止
      stopPosition: '300', // 在哪个位置停止
      stopTime: '2500', // 停止时间
      duration: '500' // 持续时间
    }
    this.winH = document.documentElement.clientHeight;
    this.div = null;
    this.init();
  }
  static hideAll() {
    const result = this
    this.hide()
  }
  init() {
    this.createWrapperDOM()
    this.createDOM()
    this.run()
    console.log(Rain.display)
  }
  /* TODO  为了方便展示 隐藏 所有雨点 暂时这么写 */
  createWrapperDOM() {
    if (document.querySelector('#rain_wrapper')) {
      return
    }
    this.wrapper = document.createElement('div');
    this.wrapper.id = 'rain_wrapper';
    this.wrapper.style.position = 'absolute';
    this.wrapper.style.top = '0';
    this.wrapper.style.left = '0';
    this.wrapper.style.width = '100%';
    this.wrapper.style.height = '100%';
    this.wrapper.style.zIndex = '2';

    document.querySelector('#outer-container').appendChild(this.wrapper)
  }
  /* 生成div元素 */
  createDOM() {
    this.div = document.createElement('div');
    for (let key in this.style) {
      this.div.style[key] = this.style[key]
    }
    document.querySelector('#rain_wrapper').appendChild(this.div)
  }
  run() {
    const needStop = this.animateData.needStop;
    this.div.style.top = `-${this.style.height}`; // 恢复到起始位置
    if (needStop) {
      /* 用总路程 和 停止位置  分割持续时间 */
      const totalDistance = this.winH + this.div.offsetHeight;
      const time1 = Math.floor((this.div.offsetHeight + Number(this.animateData.stopPosition)) / totalDistance * this.animateData.duration);
      const time2 = this.animateData.duration - time1;
      $(this.div).animate({
        top: this.animateData.stopPosition
      }, time1, () => {
        setTimeout(() => {
          $(this.div).animate({
            top: this.winH
          }, time2, () => {
            this.run();
          })
        }, this.animateData.stopTime)
      });
    } else {
      $(this.div).animate({
        top: this.winH
      }, this.animateData.duration, () => {
        this.run()
      });
    }
  }
  hide() {
    this.div.style.display = 'none';
  }
  show() {
    this.div.style.display = 'block';
  }
}


