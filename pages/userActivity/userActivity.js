// pages/userActivity/userActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ongoingActivities: [{
        id: 1,
        name: '社区义务清扫',
        time: '2024-10-25',
        location: '市中心公园'
      },
      {
        id: 2,
        name: '公益捐赠活动',
        time: '2024-10-26',
        location: '社区服务中心'
      },
    ],
    doneActivities: [{
      id: 1,
      name: '环保知识讲座',
      time: '2024-10-27',
      location: '市图书馆'
    }, 
    {
      id: 2,
      name: '社区义务清扫',
      time: '2024-10-25',
      location: '市中心公园'
    },
  ]

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