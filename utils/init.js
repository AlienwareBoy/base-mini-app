import {
  wxLogin,
  Toast
} from '../utils/miniappPromise.js'
const app = getApp()
const SUCCESS_CODE = 200;
const FAILE_CODE = 500;
const check_login_page = ["pages/sharePage/sharePage"]; //需要检测登录的页面,并记录传入的query或者param
function init(count, route,that) {
  return new Promise((resolve, reject) => {
    const userInfo = wx.getStorageSync('userInfo')
    console.log('sdfsfd')
    if (check_login_page.includes(route)) {
      console.log('sdfsfd')
      // 记录检测登录页面的路由参数，如有带入参数可在stroage查看
      wx.setStorageSync('entryPage', {
        query: that.options,
        path: that.route.replace('pages', '')
      })
      //假定授权后userInfo里会带有id信息，如若没有跳入授权页面
      if (userInfo.id) {
        resolve('success')
      } else {
        if (count >= 1) return
        count++
        Toast('请先登录', 'none', 1500)
        wx.setStorageSync('isSignIn', false)
        wx.setStorageSync('count', count)
        console.error('未登录,跳转至校验页面')
        wx.reLaunch({
          url: '../component-page/component-page',
        })
        resolve('fail')
      }
    } else {
      console.info('当前路由允许游客模式')
      resolve('success')
    }
  })
}
export {
  init
}