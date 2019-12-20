Page({
  data: {

  },
  onLoad(e){
    let list=1;
    let slsdf =JSON.parse(e.list);
    console.log(slsdf)
    console.log(list)
  },
  toPath() {
    wx.navigateTo({
      url: '../component-page/component-page',
    })
  },
  onHide(){
    
  }
})
