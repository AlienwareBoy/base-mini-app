const app = getApp();
app.miniPage({
  data: {
    text:'这是我通过分享进入的页面'
  },
  onLoad(){
    console.log('我本应进入的页面')
  },
  onShow(){
    console.log('loginOnshow')
  }
})