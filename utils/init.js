import {
  Toast
} from "./miniappPromise.js";
let obj = {
  count: 1,
  user: {
    name: 'sdf'
  },
  list: [{
    a: 1
  }]
}

function init(options) {
  let count = options.count || 0;
  const {
    token
  } = wx.getStorageSync("token");
  count = parseInt(count)
  if (!token) {
    if (count >= 1) return
    count++;
    Toast("请先登录", 'none', 1500);
    console.error('未登录')
    wx.reLaunch({
      url: `../component-page/component-page?count=${count}`
    });
  } else {}
}
export {
  init
}