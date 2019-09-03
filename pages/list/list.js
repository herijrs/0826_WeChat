// pages/list/list.js

  var db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[
    ],
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    imageWidth: wx.getSystemInfoSync().windowWidth,

    allTitle: [
      { id: 0, title: '首页' },
      { id: 1, title: '物品' },
      { id: 2, title: '发布' },
      { id: 3, title: '我的' }
    ],
    currentIndex: 0, //当前选中标题的下标
    scrollLeft: 0, //tab滚动条的位置
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getImageList();
    this.setData({
      msgList: [
        {
          url: "url", title: "关于2019年中秋节、“十一”国庆节放假的通知！"
        },
        {
          url: "url", title: "辽宁石油化工大学2019-2020学年第一学期校历"
        },
        { 
          url: "url", title: "迎新季｜2019级新生军训及入学教育安排" 
        },
        {
          url: "url", title: "计算机与通信工程学院举行暑期社会实践启动仪式"
        },
        {
          url: "url", title: "床前明月光，疑是地上霜"
        }]
    });
  },
  getImageList(){
    let that = this
    db.collection('imagelist')
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res)
          that.setData({
            datalist:res.data
          })
        }
      })
  },

  add(){
    wx.navigateTo({
      url: '../home/home',
    })
  },
  
   //搜索功能
  bindSearchBook() {
    wx.navigateTo({
      url: '../search-book/search-book',
    })
  },

  //删除测试
  remove(){
    db.collection('imagelist').doc('').remove({
      success: function (res) {
        console.log('删除成功'+res.data)
      }
      });
  },
  
  //点击切换标题
  changeTitle(event) {
    let index = event.target.dataset.current;//当前点击标题的index
    this.setData({
      currentIndex: index
    })
  },

  //滑动切换内容
  changeContent(event) {
    let current = event.detail.current;
    let singleNavWidth = wx.getSystemInfoSync().windowWidth / 5;
    this.setData({
      currentIndex: current,
      scrollLeft: (current - 2) * singleNavWidth
    });
  }
  

})