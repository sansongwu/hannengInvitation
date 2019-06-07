const $ = require('jquery')
const { getPreLoadImage } = require('./utils')
const { aboutPercent } = require('./pages/pageLoading')
const { winW, winH } = require('./screen');
const { light, alertnate } = require('./animate')

// function loadAudio(src, callback) {
//   var audio = new Audio(src);
//   audio.onloadedmetadata = callback;
//   audio.src = src;
// }

// var audioUrl = "./public/music_bg.mp3";//音频路径
// //调用方法
// loadAudio(audioUrl, function () {
//   $('#audio').attr("src",audioUrl);
//   aboutPercent.add(30);
// });

/* 加载logo */
getPreLoadImage('./public/img/logo.png', (img) => {
  const targetList = document.querySelectorAll('.logo')
  targetList.forEach(item => {
    item.src = img.src;
  })
  aboutPercent.add(3);
})
/* 加载背景图 */
getPreLoadImage('./public/img/page1/page.png', (img) => {
  document.querySelector('#page1_bg').src = img.src;
  document.querySelector('#pageLoading_bg2').src = img.src; // 给过度用的元素赋值src
  aboutPercent.add(3);
})

getPreLoadImage('./public/img/page2/page.jpg', (img) => {
  document.querySelector('#page2_bg').src = img.src;
  aboutPercent.add(3);
})

getPreLoadImage('./public/img/page3/page.jpg', (img) => {
  document.querySelector('#page3_bg').src = img.src;
  aboutPercent.add(3);
})


// getPreLoadImage('./public/img/page4.jpg', (img) => {
//   document.querySelector('#page4_bg').src = img.src;
//   aboutPercent.add(10);
// })
// getPreLoadImage('./public/img/page5.jpg', (img) => {
//   document.querySelector('#page5_bg').src = img.src;
//   aboutPercent.add(10);
// })
// getPreLoadImage('./public/img/page6.jpg', (img) => {
//   document.querySelector('#page6_bg').src = img.src;
//   aboutPercent.add(10);
// })


/* 加载底部圈的图 */
getPreLoadImage('./public/img/page1/bottom.png', (img) => {
  document.querySelector('#bottomImg1').src = img.src;
  aboutPercent.add(3);
})

getPreLoadImage('./public/img/page2/bottom.png', (img) => {
  document.querySelector('#bottomImg2').src = img.src;
  aboutPercent.add(3);
})

getPreLoadImage('./public/img/page3/bottom.png', (img) => {
  document.querySelector('#bottomImg3').src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/456bottom.png', (img) => {
  document.querySelector('#bottomImg4').src = img.src;
  document.querySelector('#bottomImg5').src = img.src;
  document.querySelector('#bottomImg6').src = img.src;
  aboutPercent.add(3);
})
/* 加载456 图中图 */
getPreLoadImage('./public/img/page4info.png', (img) => {
  document.querySelector('#page4_info').src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page5info.png', (img) => {
  document.querySelector('#page5_info').src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page6info.png', (img) => {
  document.querySelector('#page6_info').src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page7info.png', (img) => {
  document.querySelector('#page7_info').src = img.src;
  aboutPercent.add(3);
})
/* 456 title */
getPreLoadImage('./public/img/titleInfo.png', (img) => {
  document.querySelector('#page4_title').src = img.src;
  document.querySelector('#page5_title').src = img.src;
  document.querySelector('#page6_title').src = img.src;
  document.querySelector('#page7_title').src = img.src;
  aboutPercent.add(3);
})
/* 456 title 的光 */
getPreLoadImage('./public/img/light.png', (img) => {
  document.querySelector('#page4_title_light').src = img.src;
  document.querySelector('#page5_title_light').src = img.src;
  document.querySelector('#page6_title_light').src = img.src;
  document.querySelector('#page7_title_light').src = img.src;
  aboutPercent.add(3);
})
light('page4_title_light', 880, 0.4);
light('page5_title_light', 880, 0.4);
light('page6_title_light', 880, 0.4);
light('page7_title_light', 880, 0.4);
/* 456 背景光 */
getPreLoadImage('./public/img/bglight.png', (img) => {
  document.querySelector('#bg_light').src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/bglight2.png', (img) => {
  document.querySelector('#bg_light2').src = img.src;
  aboutPercent.add(3);
})
alertnate('#bg_light', '#bg_light2', 2000)

/* 加载细节 */
/* 前3页的 信息 */
getPreLoadImage('./public/img/page1/info.png', (img) => {
  const target = document.querySelector('#page1_info')
  target.src = img.src;
  target.style.bottom = winW/2 + winW*10/100 + 'px';
  target.style.opacity = 0;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page2/info.png', (img) => {
  const target = document.querySelector('#page2_info')
  target.src = img.src;
  target.style.bottom = winW/2 + winW*10/100 + 'px';
  target.style.opacity = 0;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page3/info.png', (img) => {
  const target = document.querySelector('#page3_info')
  target.src = img.src;
  target.style.bottom = winW/2 + winW*10/100 + 'px';
  target.style.opacity = 0;
  aboutPercent.add(3);
})
/* 加载箭头 */
getPreLoadImage('./public/img/arrow.png', (img) => {
  const target = document.querySelector('#arrow')
  target.src = img.src;
  target.style.bottom = winW/2 - winW*5/100 + 'px';
  target.style.width = winW*5/100 + 'px';
  light('arrow')
  aboutPercent.add(3);
})
/* 加载圆环 */
getPreLoadImage('./public/img/ring.png', (img) => {
  const target = document.querySelector('#ring')
  target.style.bottom = - winW/2 + 'px';
  target.src = img.src;
  aboutPercent.add(3);
})
/* 黑圈 */
getPreLoadImage('./public/img/bg_dark.png', (img) => {
  const opacity = 0.8;
  document.querySelector('#bg_dark').src = img.src;
  document.querySelector('#bg_dark2').src = img.src;
  document.querySelector('#bg_dark3').src = img.src;
  document.querySelector('#bg_dark').style.opacity = opacity;
  document.querySelector('#bg_dark2').style.opacity = opacity;
  document.querySelector('#bg_dark3').style.opacity = opacity;
  aboutPercent.add(3);
})
/* 加载文字的光 */
getPreLoadImage('./public/img/light.png', (img) => {
  const target = document.querySelector('#light')
  target.src = img.src;
  aboutPercent.add(3);
})
/* 加载第一页动效 */
getPreLoadImage('./public/img/page1/elec.png', (img) => {
  const target = document.querySelector('#page1_elec')
  target.src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page1/elec2.png', (img) => {
  const target = document.querySelector('#page1_elec2')
  target.src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page1/light.png', (img) => {
  const target = document.querySelector('#page1_light')
  target.src = img.src;
  light('page1_light', 1250, 0.4);
  aboutPercent.add(3);
})
alertnate('#page1_elec', '#page1_elec2', 100)

/* 第二页动效 */
getPreLoadImage('./public/img/page2/elec.png', (img) => {
  const target = document.querySelector('#page2_elec')
  target.src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page2/elec2.png', (img) => {
  const target = document.querySelector('#page2_elec2')
  target.src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page2/light.png', (img) => {
  const target = document.querySelector('#page2_light')
  target.src = img.src;
  light('page2_light', 1250, 0.4);
  aboutPercent.add(3);
})
alertnate('#page2_elec', '#page2_elec2', 100)

/* 第三页动效 */
getPreLoadImage('./public/img/page3/elec.png', (img) => {
  const target = document.querySelector('#page3_elec')
  target.src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page3/elec2.png', (img) => {
  const target = document.querySelector('#page3_elec2')
  target.src = img.src;
  aboutPercent.add(3);
})
getPreLoadImage('./public/img/page3/light.png', (img) => {
  const target = document.querySelector('#page3_light')
  target.src = img.src;
  light('page3_light', 1250, 0.4);
  aboutPercent.add(3);
})
alertnate('#page3_elec', '#page3_elec2', 100)

setTimeout(() => {
  aboutPercent.add(100);
}, 3000)
