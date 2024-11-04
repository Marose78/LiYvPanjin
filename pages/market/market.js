// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: ['优待产品', '优待服务'],  // 类别标题
    currentCategory: 0,  // 当前选择的类别，默认显示第一个类别
    indicatorPosition: 0,  // 小横线的位置
    productsList: [
      { name: '香蕉', image: '/images/product/香蕉.jpg', introduction:'500g',price:'80' },
      { name: '苹果', image: '/images/product/苹果.jpeg',introduction:'500g',price:'90' },
      { name: '菠菜', image: '/images/product/菠菜.jpg',introduction:'500g',price:'70' },
      { name: '香蕉', image: '/images/product/香蕉.jpg', introduction:'500g',price:'80' },
      { name: '苹果', image: '/images/product/苹果.jpeg',introduction:'500g',price:'90' },
      { name: '菠菜', image: '/images/product/菠菜.jpg',introduction:'500g',price:'70' },
      { name: '香蕉', image: '/images/product/香蕉.jpg', introduction:'500g',price:'80' },
      { name: '苹果', image: '/images/product/苹果.jpeg',introduction:'500g',price:'90' },
      { name: '菠菜', image: '/images/product/菠菜.jpg',introduction:'500g',price:'70' },
    ],
    servicesList: [
      { name: '服务A', image: '/images/pic1.png', introduction:'电影院服务',price:'70'},
      { name: '服务B', image: '/images/pic1.png',introduction:'酒店vip服务',price:'70' },
      { name: '服务C', image: '/images/pic1.png', introduction:'火车站服务',price:'80'},
      { name: '服务A', image: '/images/pic1.png', introduction:'电影院服务',price:'70'},
      { name: '服务B', image: '/images/pic1.png',introduction:'酒店vip服务',price:'70' },
      { name: '服务C', image: '/images/pic1.png', introduction:'火车站服务',price:'80'},{ name: '服务A', image: '/images/pic1.png', introduction:'电影院服务',price:'70'},
      { name: '服务B', image: '/images/pic1.png',introduction:'酒店vip服务',price:'70' },
      { name: '服务C', image: '/images/pic1.png', introduction:'火车站服务',price:'80'},
    ],

  },
  switchCategory(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentCategory: index  // 更新当前类别
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(this.data.servicesList); // 检查服务列表是否有数据

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