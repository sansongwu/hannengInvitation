// require('../node_modules/fex-swiper/dist/swiper.css')
// const Swiper = require('../node_modules/fex-swiper/dist/swiper.umd');
// debugger
// console.log(Swiper)

const { loadingPage, pageOne, pageTwo, pageThree, pageFour, pageFive, pageSix } = require('./getDOM')
// const Rain = require('./rain')
const { changePageDuration } = require('./config');
const $ = require('jquery')
// const Transition = {
//   // 过渡动画名称，目前提供了 5 种过渡动画
//   name: 'slide' | 'rotate' | 'flip' | 'card' | 'fade',
//   // 过渡动画时长，单位为 ms
//   duration: Number,
//   // 只允许滑动方向 1: 后向，-1: 前向，0:双向禁止滑动，默认为 undefined，即不限制任何方向的滑动
//   direction: 1 | -1 | 0,
// }
const defaultTransition = {
  name: 'fade',
  duration: changePageDuration,
  direction: undefined
}

/* 有一个bug 如果某个页面设置了 transition 那么全局的transition就不会生效了 所以要给每页都设置transition */
const list = [{
  content: loadingPage,
  transition: {
    name: 'fade',
    duration: 200,
    direction: 0
  }
}, {
  content: pageOne,
  transition: Object.assign({}, defaultTransition, { direction: -1 }) // 首页不能往上翻
}, {
  content: pageTwo,
  transition: defaultTransition
}, {
  content: pageThree,
  transition: defaultTransition
}, {
  content: pageFour,
  transition: defaultTransition
}, {
  content: pageFive,
  transition: defaultTransition
}, {
  content: pageSix,
  transition: Object.assign({}, defaultTransition, { direction: 1 }) // 尾页不能往下翻
}];

/* 实例化滚动插件 */
export const swiper = new Swiper({
  container: document.querySelector('#outer-container'),
  data: list,
  transition: defaultTransition // 全局transition
});
swiper.on('swipeStart', () => {
  const currentPage = swiper.currentPage.index;

})

swiper.on('swipeChanged', () => {
  const currentPage = swiper.currentPage.index;

  /* 进入第一页后 增加雨点效果 */
  if (currentPage == 1) {
    require('./rainInstance')
  }
  // .appendChild(document.querySelector('#rain_wrapper'))
  const test = document.createElement('div')
  swiper.currentPage.children[0].appendChild(document.querySelector('#rain_wrapper'))
  swiper.currentPage.children[0].appendChild(document.querySelector('#arrow'))



  if (currentPage == 3) {

    document.querySelector('#rain_wrapper').style.display = 'block'; // 开启雨点

  }
  if (currentPage == 4) {
    document.querySelector('#rain_wrapper').style.display = 'none'; // 关闭雨点
    // document.querySelector('#light').style.display = 'block'; // 显示光 如果一开始就显示 会在开始的时候闪一下
    swiper.currentPage.children[0].appendChild(document.querySelector('#light')) // 移动光的DOM元素
  }
  if (currentPage == 5) {
    swiper.currentPage.children[0].appendChild(document.querySelector('#light')) // 移动光的DOM元素
  }
  if (currentPage == 6) {
    swiper.currentPage.children[0].appendChild(document.querySelector('#light')) // 移动光的DOM元素
  }
  /* 前3页info fadein */
  const infoTarget = document.querySelector(`#page${currentPage}_info`);
  if (infoTarget) {
    $(`#page${currentPage}_info`).animate({
      opacity: 1
    }, 800)
  }
})

