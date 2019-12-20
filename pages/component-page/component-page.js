import {
  Toast
} from '../../utils/miniappPromise.js'
Page({
  data: {

  },
  onLoad(e) {
    console.log(e, '-eee')
  },
  processQuery(query) {
    let queryStr = '';
    let count = 0;
    for (let i in query) {
      if (query[i] instanceof Object) {
        let arrStr = JSON.stringify(query[i])
        if (count > 0) {
          queryStr += `&${i}=${arrStr}`
        } else {
          queryStr += `?${i}=${arrStr}`
        }
      } else {
        if (count > 0) {
          queryStr += `&${i}=${query[i]}`
        } else {
          queryStr += `?${i}=${query[i]}`
        }
      }
      count++;
    }
    console.log(queryStr)
    return queryStr
  },
  getUserInfo(e) {
    let userInfo = e.detail.userInfo;
    let entryPage = wx.getStorageSync('entryPage');
    let query = this.processQuery(entryPage.query)
    console.log(entryPage)
    userInfo.id = 1;
    wx.setStorageSync('userInfo', userInfo)
    Toast('登录成功').then(res => {
      wx.reLaunch({
        url: `..${entryPage.path}${query}`,
      })
    })
  }
})