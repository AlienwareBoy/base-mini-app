const LIFETIME_EVENTS = ['onLoad']
var originPage = Page
function MyPage(config) {
  let _this = this;
  this.lifetimeBackup = {}
  LIFETIME_EVENTS.forEach((event) => {
    // 备份生命周期函数
    this.lifetimeBackup[event] = config[event]
    // 临时清空
    config[event] = function () { }
  })
  config.onLoad = function (options) {
    console.log('项目初始化信息')
  }
  originPage(config)
}
const miniPage = function (config) {
  return new MyPage(config)
}
export {
  miniPage
}