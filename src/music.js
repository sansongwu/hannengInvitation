module.exports = function(targetEl){
  var audio = targetEl

  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      audio.play();
      // audio.pause()
    }, false);
  } else {
    document.addEventListener("WeixinJSBridgeReady", function () {
      WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        audio.play();
        // audio.pause()
      });
    }, false);
  }

  return false;
}

