//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: "test-b4l36",
      traceUser:true
    })
  },
  globalData: {
    userInfo: null
  }
})