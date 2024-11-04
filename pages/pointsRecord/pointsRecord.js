// pages/pointsRecord/pointsRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    points: 100, // 用户的当前积分余额,具体数值从服务器读取并刷新
    records: []
  },
  redeem(event) {
    const pointsRequired = event.currentTarget.dataset.points;
    const productName = event.currentTarget.dataset.name;

    if (this.data.points >= pointsRequired) {
      this.setData({
        points: this.data.points - pointsRequired
      });
      wx.showToast({
        title: `成功兑换 ${productName}`,
        icon: 'success'
      });
    } else {
      wx.showToast({
        title: '积分不足',
        icon: 'none'
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      records: [
        { time: '2024-11-01 10:00', description: '参加活动A', points: 100 },
        { time: '2024-11-02 12:30', description: '兑换商品X', points: -200 },
        { time: '2024-11-03 14:45', description: '参加活动B', points: 50 },
        { time: '2024-11-04 16:15', description: '兑换商品Y', points: -150 }
      ]
    });
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