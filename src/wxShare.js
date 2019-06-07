var shareParam = {
  title: "让万物发电-“汉”动生活", // 待修改
  desc: "汉能2019 CES亚洲电子消费展", // 待修改
  pyq: "让万物发电-“汉”动生活", // 待修改
  link: window.location.href,
  logo: "" // 待修改：分享卡片显示的缩略图URL
};

wx.ready(function () {

  iniShare(shareParam);
})

wx.error(function (res) {
  console.log(res)
});

function iniShare(data) {
  var shareData = {
    title: data.title,
    desc: data.desc,
    link: data.link,
    imgUrl: data.logo,
    success: function (res) {}
  };
  wx.onMenuShareAppMessage(shareData);
  var shareData = {
    title: data.pyq,
    link: data.link,
    imgUrl: data.logo,
    success: function (res) {}
  };
  wx.onMenuShareTimeline(shareData);
}

iniShare(shareParam);
