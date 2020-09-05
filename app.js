//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  // 小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    // 异步调用
    wx.getUserInfo({
      // 数据被拿到之后，在进行回调的
      success:function(res){
        console.log(res);
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  // 小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log('界面显示出来：onShow');
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  // 小程序被隐藏时执行的生命周期函数
  onHide: function () {
    console.log('界面被隐藏时会执行：onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  // 小程序发生错误时被执行的生命周期函数
  onError: function (msg) {
    console.log('当小程序执行错误是执行：onError');
  },
  golbalData:{
    name: 'Ryan',
    age: 18
  }
})
