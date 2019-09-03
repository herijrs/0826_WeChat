// pages/sonShouye/headline/headline.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headlineData: [
      {
        id: 1,
        title: "关于2019年中秋节、“十一”国庆节放假的通知",
        author: "党政办公室",
        time: "2019-08-30",
        url: "../images/0.png"
      },
      {
        id: 2,
        title: "辽宁石油化工大学2019-2020学年第一学期校历",
        author: "教务处",
        time: "2019-08-31",
        url: "../images/1.jpg"
      },
      {
        id: 3,
        title: "迎新季｜2019级新生军训及入学教育安排",
        author: "新媒体中心",
        time: "2019-08-31",
        url: "../images/3.jpg"
      },
      {
        id: 4,
        title: "计算机与通信工程学院举行暑期社会实践启动仪式",
        author: "计算机与通信工程学院",
        time: "2019-08-31",
        url: "../images/4.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.setNavigationBarTitle({
      title: '校园头条'
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    setTimeout(function () {
      wx.stopPullDownRefresh(); //停止加载
      wx.hideNavigationBarLoading(); //隐藏加载icon
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})