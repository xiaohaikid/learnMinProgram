// pages/detail/detail.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 1.获取首页的页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    console.log(pages);
    
  },
})