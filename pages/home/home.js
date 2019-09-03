// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

//图片上传
  upload() {
    let that = this;
    let timestamp = new Date().getTime();
    console.log('>>>>>',timestamp)
    wx.chooseImage({
      count: 1,
      success: chooseResult =>{
          wx.showLoading({
            title: '上传中',
          })
        wx.cloud.uploadFile({
          cloudPath: timestamp+'.png', // 上传至云端的路径
          filePath: chooseResult.tempFilePaths[0], // 小程序临时文件路径
          success: res => {

            wx.hideLoading()
            console.log('上传成功',res)
            that.setData({
              imgUrl:res.fileID
            })
            that.addImgList(res.fileID  )
          },
        })
      }
    })
  },

  addImgList(imgurl){
    let that = this;
    wx.cloud.database().collection('imagelist').add({
      data: {
          name:"黄某某",
          imgUrl: imgurl,
          time:that.getNowFormatDate()
      },
      success(res){
        console.log('上传成功',res)
      },
      fail(res){
        console.log('上传失败'+res)
      }
    })
  },

  getNowFormatDate:function(){
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getDate() +1;
    var strDate = date.getDate();
    if(month >= 1 && month <= 9){
      month = '0' +month ;
    }
    if(strDate >=0 && strDate <=9){
      strDate = '' + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() +seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate;
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