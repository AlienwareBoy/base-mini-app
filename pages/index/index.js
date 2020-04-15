Page({
  data:{

  },
  onLoad(e){
    console.log(this.$global)
  },
  toPath() {
    wx.navigateTo({
      url: '../component-page/component-page',
    })
  },
})