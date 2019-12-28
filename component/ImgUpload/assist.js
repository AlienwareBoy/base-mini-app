let https_images = 'http://logisticsback.chinacloudsites.cn/api/v1/blob' //上传图片
let https_video = 'http://logisticsback.chinacloudsites.cn/api/v1/blob/video' //测试

///frameurl 是第一帧图片  viedeo 是url  des 是描述

// 上传图片
function chooseImage() {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      success: (res) => {
        resolve(res)
      },
    })
  })
}
function Toast(title, icon = 'none', duration = 1000) {
  return new Promise(function (resolve, reject) {
    wx.showToast({
      title: title,
      icon: icon,
      duration: duration,
      success: function (result) {
        resolve(result);
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}
function chooseVideo() {
  return new Promise((resolve, reject) => {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        resolve(res)
      }
    })
  })
}

function uploadFile(api, res) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: api,
      filePath: res,
      name: 'file',
      success(res) {
        resolve(res)
      }
    })
  })
}

export {
  Toast,
  chooseImage,
  uploadFile,
  chooseVideo,
  https_images,
  https_video
}