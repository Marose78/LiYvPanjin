// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    autoplay2:false,
    interval: 4000,
    duration: 500,
    indicatorDots: true,
    indicatorDots2:false,
    circular: true,
    imgUrls: [
      '/images/pic1.png',
      '/images/pic2.jpg',
      '/images/pic3.jpg'
    ],
    newsList: [{
        id: 1,
        image: '/images/pic1.png',
        title: ' 创建文明单位，建设温馨美好家园。'
      },
      {
        id: 2,
        image: '/images/pic1.png',
        title: '举全区之力，聚万众之心，打好创建全国文明城市攻坚战。'
      },
      {
        id: 3,
        image: '/images/pic2.jpg',
        title: '增强文明意识，提高自身素质'
      },
      {
        id: 4,
        image: '/images/pic1.png',
        title: '自我创建，争做文明。'
      },
      {
        id: 5,
        image: '/images/pic3.jpg',
        title: '建文明单位是大家心愿，创美好生活有你我奉献。'
      },
      {
        id: 6,
        image: '/images/pic1.png',
        title: ' 我为创建添砖瓦，文明惠及千万家。'
      },
      {
        id: 7,
        image: '/images/pic3.jpg',
        title: '增强文明尊老爱幼、男女平等、夫妻和睦、勤俭持家、邻里团结意识，提高自身素质'
      },
      {
        id: 8,
        image: '/images/pic1.png',
        title: '举全区之力，聚万众之心，打好创建全国文明城市攻坚战。勤俭持家、邻里团结意识，提高自身素'
      }
    ],
    leftColumn: [],
    rightColumn: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.splitColumns();
  },
  /**
   * 将民生报道数据分为两部分，分别对应瀑布流的左右两列
   */
  splitColumns() {
    const leftColumn = [];
    const rightColumn = [];
    this.data.newsList.forEach((item, index) => {
      if (index % 2 === 0) {
        leftColumn.push(item);
      } else {
        rightColumn.push(item);
      }
    });
    this.setData({
      leftColumn,
      rightColumn
    });
  },
  /**
   * 获取民生报道列表
   */
  getList: function () {
    app.http('v1/home/getHotList', {
        page: this.data.page
      })
      .then(res => {
        if (res.code == 200 && res.data.list.length > 0) {
          this.data.page++
          let list = this.data.list
          for (let i = 0; i < res.data.list.length; i++) {
            list.push(res.data.list[i])
          }
          this.setData({
            list: list,
            page: this.data.page
          })
          console.log(this.data)
        }
      })
  },


  goToNewsDetail: function(event) {
    const newsId = event.currentTarget.dataset.id; // 获取新闻 ID
    wx.navigateTo({
      url: '/pages/news-detail/news-detail?id=${newsId}' // 跳转到新闻详情页面
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