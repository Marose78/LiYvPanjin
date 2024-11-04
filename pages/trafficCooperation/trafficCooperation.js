// pages/trafficCooperation/trafficCooperation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities: [
      { name: '协助交通疏导', location: '市中心广场', time: '2024-11-10 09:00 - 12:00', points: 50 },
      { name: '帮助设置交通标志', location: '科技馆附近', time: '2024-11-12 14:00 - 17:00', points: 40 },
      { name: '参与交通宣传活动', location: '市图书馆', time: '2024-11-15 10:00 - 13:00', points: 30 }
    ]
  },
  signup(event) {
    const activityName = event.currentTarget.dataset.name;
    const activityIndex = event.currentTarget.dataset.index;

    wx.showToast({
      title: `成功报名参加 ${activityName}`,
      icon: 'success'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})