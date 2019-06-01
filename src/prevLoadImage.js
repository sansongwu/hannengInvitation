const { getPreLoadImage } = require('./utils')
const { aboutPercent } = require('./pages/pageLoading')

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
getPreLoadImage('./public/img/page5.png', (img) => {
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

getPreLoadImage('./public/img/page4bottom.png', (img) => {
  document.querySelector('#bottomImg4').src = img.src;
  aboutPercent.add(10);
})

setTimeout(() => {
  aboutPercent.add(100);
}, 10000)
