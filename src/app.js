// const Swiper = require('fex-swiper');
// console.log(Swiper)
require('./scss/index.scss');

var list = [{
  content: '<h1>第 0 页</h1>'
}, {
  content: '<h1>第 1 页</h1>'
}, {
  content: '<h1>第 2 页</h1>'
}]
var swiper = new Swiper({
  container: document.querySelector('#outer-container'),
  data: list
});
