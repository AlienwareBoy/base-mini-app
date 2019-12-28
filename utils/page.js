import {
  Toast
} from './miniappPromise.js'
import {
  init,
} from './init.js'
const LIFETIME_EVENTS = ['onLoad']
const ONHIDEN_EVENTS = ['onHide']
var originPage = Page

function getAddress() {
  wx.getLocation({
    type: 'wgs84',
    success(res) {
      wx.setStorageSync('position', {
        lat: res.latitude,
        lon: res.longitude
      })
    }
  })
}

function MyPage(config) {
  let _this = this;
  this.lifetimeBackup = {}
  LIFETIME_EVENTS.forEach((event) => {
    // 备份生命周期函数
    this.lifetimeBackup[event] = config[event]
    // 临时清空
    config[event] = function() {}
  })
  config.onLoad = function(options) {
      let that = this;
      getAddress();
      init(0, that.route, that).then(res => {
        console.log(that, '当前页面路由栈')
        LIFETIME_EVENTS.forEach((event) => {
          _this.lifetimeBackup[event].call(that, that.options)
          // 执行完后，恢复过来
          config[event] = _this.lifetimeBackup[event]
        })

      }).catch(err => {})
    },
    config.onHide = function() {
      let userInfo = wx.getStorageSync('userInfo');
      if (!userInfo.name) {
        console.log('我进来了')
        wx.setStorageSync('count', 0)
        // wx.reLaunch({
        //   url: '../index/index',
        // })
      }
    }
  originPage(config)
}
const miniPage = function(config) {
  return new MyPage(config)
}
export {
  miniPage
}