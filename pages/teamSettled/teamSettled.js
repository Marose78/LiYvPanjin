// pages/teamSettled/teamSettled.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamCategory: ['事业单位', '社区', '企业'],
    teamName: "", //存储用户输入的组织名称
    teamIntro:'',//用户输入的组织简介
    imageUrl: ''//队伍图片url
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value//选择器选择的值
    })
  },
  onNameInput(event) {
    this.setData({
      teamName: event.detail.value // 获取名字输入框的值并存储
    });
  },
  onIntroInput(event) {
    this.setData({
      teamIntro: event.detail.value // 获取简介输入框的值并存储
    });
  },
  onSubmit() {
    const selectedCategory = this.data.teamCategory[this.data.index]; // 获取选择器选中的值
    const inputValue = this.data.name; // 输入的组织名称
    console.log('选择的组织类型:', selectedCategory);
    console.log('输入的名称:', inputValue);
  },
  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'], 
      sourceType: ['album', 'camera'], // 来源可以是相册或相机
      success: (res) => {
        const tempFilePaths = res.tempFiles.map(file => file.tempFilePath);
        this.uploadImage(tempFilePaths[0]);
      }
    });
  },
  uploadImage(filePath) {
    wx.uploadFile({
      url: 'https://upload', // 替换为服务器的上传接口
      filePath: filePath,
      name: 'file', // 后端接收的文件名
      formData: {
        user: 'test' // 可以传递其他参数
      },
      success: (res) => {
        const data = JSON.parse(res.data);
        // 服务器返回字段 'url'，包含图片的访问链接
        this.setData({
          imageUrl: data.url
        });
        wx.showToast({
          title: '上传成功',
          icon: 'success'
        });
      },
      fail: (error) => {
        console.error('上传失败', error);
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        });
      }
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