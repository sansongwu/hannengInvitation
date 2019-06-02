const { getPreLoadImage } = require('./utils')
const { aboutPercent } = require('./pages/pageLoading')
const { winW, winH } = require('./screen');
const { light } = require('./animate')

/* 加载背景图 */
getPreLoadImage('./public/img/page1.jpg', (img) => {
  document.querySelector('#page1_bg').src = img.src;
  document.querySelector('#pageLoading_bg2').src = img.src; // 给过度用的元素赋值src
  aboutPercent.add(10);
})

getPreLoadImage('./public/img/page2.jpg', (img) => {
  document.querySelector('#page2_bg').src = img.src;
  aboutPercent.add(10);
})

getPreLoadImage('./public/img/page3.jpg', (img) => {
  document.querySelector('#page3_bg').src = img.src;
  aboutPercent.add(10);
})

getPreLoadImage('./public/img/page4.jpg', (img) => {
  document.querySelector('#page4_bg').src = img.src;
  aboutPercent.add(10);
})
getPreLoadImage('./public/img/page5.jpg', (img) => {
  document.querySelector('#page5_bg').src = img.src;
  aboutPercent.add(10);
})
getPreLoadImage('./public/img/page6.jpg', (img) => {
  document.querySelector('#page6_bg').src = img.src;
  aboutPercent.add(10);
})

/* 加载底部圈的图 */
getPreLoadImage('./public/img/page1bottom.png', (img) => {
  document.querySelector('#bottomImg1').src = img.src;
  aboutPercent.add(10);
})

getPreLoadImage('./public/img/page2bottom.png', (img) => {
  document.querySelector('#bottomImg2').src = img.src;
  aboutPercent.add(10);
})

getPreLoadImage('./public/img/page3bottom.png', (img) => {
  document.querySelector('#bottomImg3').src = img.src;
  aboutPercent.add(20);
})


/* 加载细节 */
/* 前3页的 信息 */
getPreLoadImage('./public/img/page1info.png', (img) => {
  const target = document.querySelector('#page1_info')
  target.src = img.src;
  target.style.bottom = winW/2 + winW*10/100 + 'px';
  target.style.opacity = 0;
})
getPreLoadImage('./public/img/page2info.png', (img) => {
  const target = document.querySelector('#page2_info')
  target.src = img.src;
  target.style.bottom = winW/2 + winW*10/100 + 'px';
  target.style.opacity = 0;
})
getPreLoadImage('./public/img/page3info.png', (img) => {
  const target = document.querySelector('#page3_info')
  target.src = img.src;
  target.style.bottom = winW/2 + winW*10/100 + 'px';
  target.style.opacity = 0;
})
/* 加载箭头 */
getPreLoadImage('./public/img/arrow.png', (img) => {
  const target = document.querySelector('#arrow')
  target.src = img.src;
  target.style.bottom = winW/2 - winW*5/100 + 'px';
  target.style.width = winW*5/100 + 'px';
  light('arrow')
})
/* 加载光 */
getPreLoadImage('./public/img/light.png', (img) => {
  const target = document.querySelector('#light')
  target.src = img.src;
  // target.style.top = winH*50/100 + 'px';
  // light('arrow')
})


setTimeout(() => {
  aboutPercent.add(100);
}, 10000)
