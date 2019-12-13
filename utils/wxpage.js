// utils/wx.js
const LIFETIME_EVENTS = ['onLoad', 'onShow', 'onReady']
// var initial = require('./initial')
var originPage = Page

function initial(callback) {
  this.userData = getUserData()
  wx.getLocation({
    type: 'wgs84',
    success(res) {
      callback()
    }
  })
}

function MyPage(config) {
  LIFETIME_EVENTS.forEach((event) => {
    // 备份生命周期函数
    this.lifetimeBackup[event] = config[event]
    // 临时清空
    config[event] = function() {}
  })
  config.onLoad = function(options) {
    initial(() => {
      // 依次执行生命周期函数
      LIFETIME_EVENTS.forEach((event) => {
        this.lifetimeBackup[event].call(this, options)
        // 执行完后，恢复过来
        config[event] = this.lifetimeBackup[event]
      })
    })
  }
  // ...
  originPage(config)

}
function page(config) {
  return new MyPage(config)
}