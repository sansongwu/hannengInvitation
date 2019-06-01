const { getPreLoadImage } = require('./utils');
require('./scss/index.scss');


/* 设置背景 */
getPreLoadImage('./public/img/loadingbg.jpg', (img) => {
  document.querySelector('#pageLoading_bg').src = img.src;

})
/* 设置圆圈图 */
getPreLoadImage('./public/img/readyButton.png', (img) => {
  document.querySelector('#ready_button').src = img.src;

  require('./app')
  require('./prevLoadImage')
  require('./pages/pageLoading')
  require('./pages/page1')
  require('./pages/page2')
  require('./pages/page3')
  require('./pages/page4')
})


