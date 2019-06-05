const { getPreLoadImage } = require('./utils');
const { winW } = require('./screen')
require('./scss/index.scss');


Promise.all([getPreLoadImage('./public/img/loadingbg.jpg'), getPreLoadImage('./public/img/readyButton.png')]).then((res) => {
  function sleep1(ms, callback) {
      setTimeout(callback, ms)
  }
  sleep1(2000, () => {

  })
  init()
  function init () {
    document.querySelector('#pageLoading_bg').src = res[0].src;
    document.querySelector('#ready_button').src = res[1].src;
    document.querySelector('#page4_bg').src = res[0].src;
    document.querySelector('#page5_bg').src = res[0].src;
    document.querySelector('#page6_bg').src = res[0].src;
    require('./app')
    require('./prevLoadImage')
    require('./pages/pageLoading')
    require('./pages/page1')
    require('./pages/page2')
    require('./pages/page3')
    require('./pages/page4')
    /* init */
    window.onload = function () {
    }
  }

})
