//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    movies: [
      { url:'http://www.yidyi.net/mobile/static/images/video_bg.png?v=201806121058'},
      { url: 'http://www.yidyi.net/mobile/static/banner/1.png' },
      { url: 'http://www.yidyi.net/mobile/static/banner/2.png' },
      { url: 'http://www.yidyi.net/mobile/static/banner/3.png' },
      { url: 'http://www.yidyi.net/mobile/static/banner/4.png' }
    ] ,

    movie: [

      { url: 'http://www.yidyi.net/Upload/adspic/2018-06-08/5b1a3121d3b73.jpg' },
      { url: 'http://www.yidyi.net/Upload/adspic/2018-06-08/5b19fc2b7bfa4.jpg' },
      { url: 'http://www.yidyi.net/Upload/adspic/2018-06-08/5b19f8901c9c3.jpg' },
      { url: 'http://www.yidyi.net/Upload/adspic/2018-06-08/5b1a00137bfa4.jpg' },
      { url: 'http://www.yidyi.net/Upload/adspic/2018-06-08/5b1a2f4c52041.jpg' },
      { url: 'http://www.yidyi.net/Upload/adspic/2018-06-08/5b1a3209243d5.jpg' },
      { url: 'http://www.yidyi.net/Upload/adspic/2018-06-08/5b19f93fe2f97.jpg' },
     
    ],
    
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },

  //事件处理函数
  bindViewTaps: function() {
    console.log('++++++++');
    wx.redirectTo({
      url: '../logs/logs'
    })
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  
})
