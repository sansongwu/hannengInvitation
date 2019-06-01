const { getPreLoadImage } = require('../utils');
// import animate from "/animateplus.js";
const $ = require('jquery');
const { swiper } = require('../app')
const { winW, winH } = require('../screen');
// debugger



const circle = document.querySelector('#circle');
const circleContainer = document.querySelector('#circle_container')
const circleHeight = circle.offsetHeight;
const circleTop = circleContainer.offsetTop;
let loadingReady = false;


/* 百分比 */
const setPercent = () => {
  let percent = 0;
  let percentArray = [];
  let animateRun = false;
  let lastPercent = 0;
  let _ready = false;
  let canStart = false // loading的背景和圈加载完 才可以出现loading效果
  return {
    add: (num) => {
      percent += num;
      /* 满足条件发送通知loading完毕 */
      if (_ready) {
        return
      }
      percentArray.unshift(percent)
      updatePercent()
    },
    percentArray,
    animateRun,
    _ready
  }
}
export const aboutPercent = setPercent()

/* 加载完成 */
const loadReady = () => {
  loadingReady = true;
  document.querySelector('#ready_button').style.display = 'block'; // 显示黑圈图
  /* 点击跳转页面 */
  circleContainer.addEventListener('touchstart', () => {
    const top = `${winH}`
    $('#circle_container').animate({
      top: top,
      width: '100%',
      height: winW
    }, 200, function() {
      swiper.swipeNext()
    })
    $('#pageLoading_bg2').animate({
      opacity: 1
    }, 200)
  })
}
/* 更新百分比 */
function updatePercent() {
  if (!aboutPercent.percentArray.length || aboutPercent.animateRun) {
    return
  }
  const targetPercent = aboutPercent.percentArray[aboutPercent.percentArray.length - 1]
  const targetPosition = targetPercent >= 100 ? 0 : (1 - targetPercent / 100) * circleHeight;
  aboutPercent.animateRun = true; // 开始动画

  $('#circle').animate({
    top: (targetPosition + 'px')
  }, 200, function() {
    if (targetPercent >= 100) { // 终止
      aboutPercent._ready = true;
      loadReady()
      return
    }
    aboutPercent.percentArray.pop();
    aboutPercent.animateRun = false; // 动画结束
    if (aboutPercent.percentArray.length) {
      updatePercent()
    }
  })

  // circle.style.top = (1 - percent / 100) * circleHeight + 'px';
}
