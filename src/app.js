// require('../node_modules/fex-swiper/dist/swiper.css')
// const Swiper = require('../node_modules/fex-swiper/dist/swiper.umd');
// debugger
// console.log(Swiper)
require('./scss/index.scss');
const { loadingPage, pageOne, pageTwo, pageThree } = require('./getDOM')

// const Transition = {
//   // 过渡动画名称，目前提供了 5 种过渡动画
//   name: 'slide' | 'rotate' | 'flip' | 'card' | 'fade',
//   // 过渡动画时长，单位为 ms
//   duration: Number,
//   // 只允许滑动方向 1: 后向，-1: 前向，0:双向禁止滑动，默认为 undefined，即不限制任何方向的滑动
//   direction: 1 | -1 | 0,
// }
const defaultTransition = {
  name: 'slide',
  duration: 200,
  direction: undefined
}

/* 有一个bug 如果某个页面设置了 transition 那么全局的transition就不会生效了 所以要给每页都设置transition */
const list = [{
  content: loadingPage,
  transition: {
    name: 'fade',
    duration: 100,
    direction: 0
  }
}, {
  content: pageOne,
  transition: Object.assign({}, defaultTransition, {direction: -1}) // 首页不能往上翻
}, {
  content: pageTwo,
  transition: defaultTransition
}, {
  content: pageThree,
  transition: Object.assign({}, defaultTransition, {direction: 1}) // 尾页不能往下翻
}];

const swiper = new Swiper({
  container: document.querySelector('#outer-container'),
  data: list,
  transition: defaultTransition // 全局transition
});

/* 延迟测试 */
// setTimeout(() => {
//   swiper.swipeNext()
// }, 2000)

require('./pages/pageLoading')

