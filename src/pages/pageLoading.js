const { getPreLoadImage } = require('../utils');
// import animate from "/animateplus.js";
const animate = require('animateplus').default;
const $ = require('jquery');
// debugger
console.log(animate)

/* 设置背景 */
getPreLoadImage('http://img3.imgtn.bdimg.com/it/u=3798042709,2218577982&fm=26&gp=0.jpg', (img) => {
  document.querySelector('#pageLoading_bg').src = img.src;
  aboutPercent.add(14);
})

setTimeout(() => {
  aboutPercent.add(14);
}, 2000)
// setTimeout(() => {
//   aboutPercent.add(14);
// }, 2000)
// setTimeout(() => {
//   aboutPercent.add(14);
// }, 2000)
// setTimeout(() => {
//   aboutPercent.add(14);
// }, 2000)

const circle = document.querySelector('#circle');
const circleHeight = circle.offsetHeight;


/* 百分比 */
const setPercent = () => {
  let percent = 0;
  let percentArray = [];
  let animateRun = false;
  let lastPercent = 0;
  return {
    add: (num) => {
      if (percent >= 100) {
        return
      }
      percent += num;

      /* 满足条件发送通知loading完毕 */
      if (percent >= 100) {
        loadReady()
        return
      }
      percentArray.unshift(num)
      updatePercent()
    },
    percentArray,
    animateRun,
    lastPercent
  }
}
export const aboutPercent = setPercent()

/* 加载完成 */
const loadReady = () => {
  debugger
}
/* 更新百分比 */
function updatePercent() {
  if (!aboutPercent.percentArray.length || aboutPercent.animateRun) {
    return
  }
  const lastPosition = (1 - aboutPercent.lastPercent / 100) * 100;
  const targetPosition = (1 - (aboutPercent.percentArray[0] + aboutPercent.lastPercent) / 100) * circleHeight;

  aboutPercent.animateRun = true; // 开始动画

  $('#circle').animate({
    top: targetPosition
  }, 200, function() {
    aboutPercent.percentArray.pop();
    aboutPercent.animateRun = false; // 动画结束
    aboutPercent.lastPercent = targetPosition;
    debugger
    if (aboutPercent.percentArray.length) {
      updatePercent()
    }
  })

  // circle.style.top = (1 - percent / 100) * circleHeight + 'px';
}
