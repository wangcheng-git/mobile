//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    popup_input_show: false
  },
  onLoad: function () {

  },
  showPopup: function() {
    this.setData({
      popup_input_show: true
    })
  },
  callback: function (res) {
    console.log(res.detail)
  }
})
