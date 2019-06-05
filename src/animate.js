const $ = require('jquery');

export const dark = function (id, time = 800) {
  $('#'+id+'').animate({
    opacity: 1
  }, time, function () {
    light(id)
  })
}

export const light = function (id, time = 800, opacity = 0) {
  $('#'+id+'').animate({
    opacity: opacity
  }, time, function () {
    $('#'+id+'').animate({
      opacity: 1
    }, time, function () {
      light(id, time, opacity)
    })
  })
}

export const alertnate = (tar1, tar2, time = 1000) => {
  const target1 = document.querySelector(tar1)
  const target2 = document.querySelector(tar2)
  target1.style.display = 'none';
  target2.style.display = 'block';
  setTimeout(() => {
    target1.style.display = 'block';
    target2.style.display = 'none';
    setTimeout(() => {
      alertnate(tar1, tar2, time);
    }, time)
  }, time)
}

