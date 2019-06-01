  const Rain = require('./rain')

  /* 雨点样式设置 */
  const defaultStyle = {
    width: '4px',
    height: '100px',
    backgroundColor: '#ffffff',
    zIndex: '11',
    position: 'absolute',
    opacity: '0.3',
  }
  /* 雨点运动过程设置 */
  const defaultAnimateSetting = {
    needStop: false, // 是否中间停止
    stopPosition: '300', // 在哪个位置停止
    stopTime: '2500', // 停止时间
    duration: '500' // 持续时间
  }

  const getRandom = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }



  /* 开始实例化雨点 */
  const rain1 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '4%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain2 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '10%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain3 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '15%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain4 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '18%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain5 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '25%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain6 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '45%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain7 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '58%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain8 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '77%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain9 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '80%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain10 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '88%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain11 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '92%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));

  const rain12 = new Rain(Object.assign({}, defaultStyle, {
    height: `${getRandom(30, 300)}px`,
    left: '97%'
  }), Object.assign({}, defaultAnimateSetting, {
    needStop: false, // 是否中间停止
    stopPosition: getRandom(100, 500), // 在哪个位置停止
    stopTime: getRandom(500, 2000), // 停止时间
    duration: getRandom(500, 1200) // 持续时间
  }));
