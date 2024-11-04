
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchQuery: '',
    queryResult: [ { name: '队伍名称（示例）', image: '/images/product/香蕉.jpg', introduction:'队伍介绍',price:'80' },]//搜索结果

  },
  /**
   * 获取搜索框中输入的内容存储到searchQuery中
   * 后端可根据该变量在数据库中进行检索
   */
  onInput(e) {
    this.setData({
      searchQuery: e.detail.value
    });
  },

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