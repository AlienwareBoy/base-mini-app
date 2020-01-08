Page({
  data:{

  },
  onLoad(e){
    console.log(e)
  },
  toPath() {
    wx.navigateTo({
      url: '../component-page/component-page',
    })
  },
})