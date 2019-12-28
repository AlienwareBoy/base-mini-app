import {
  chooseImage,
  uploadFile,
  chooseVideo,
  https,
  https_images,
  Toast,
  https_video
} from './assist.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'image'
    },
    maxNums: {
      type: Number, //限制上传的图片张数
      value: 9
    },
    api: {
      type: String,
      value: https_images
    },
    model: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    maxNums: 3, //限制上传数量
    imgList: [],
    List: [], //上传的图片列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    deleteImage(e) {
      let {
        index
      } = e.currentTarget.dataset
      this.data.imgList.splice(index, 1)
      console.log(this.data.imgList)
      this.setData({
        imgList: this.data.imgList
      })
    },
    upload(e) {
      console.log(e)
      const {
        type
      } = e.currentTarget.dataset;
      if (type === 'video') {
        this.choiceVideo()
      } else if (type === 'image') {
        this.choiceImage()
      }
    },
    choiceImage() {
      chooseImage().then(res => {
        return res.tempFilePaths
      }).then(res => {
        let resLength = res.length; //选择图片的张数
        let List = [];
        console.log(this.data.imgList.length)
        console.log(this.data.maxNums)
        if (resLength > this.data.maxNums || this.data.imgList.length + resLength > this.data.maxNums) {
          console.log('我进来了')
          wx.showToast({
            title: `最多上传${this.data.maxNums}张图片或者视频！`,
            icon: 'none'
          })
        } else {
          wx.showToast({
            title: '图片上传中...',
            icon: 'none'
          })
          for (let i = 0; i < res.length; i++) {
            List[i] = uploadFile(this.data.api, res[i])
          }
          Promise.all(List).then(res => {
            wx.hideLoading()
            let imgList = this.data.imgList;
            let list=[];
            console.log(res)
            for (let i = 0; i < res.length; i++) {
              res[i].data = res[i].data.replace(/"/g, "");
              list.push({
                type:'image',
                mediaUrl: res[i].data
              })
            }
            imgList = [...this.data.imgList, ...list];
            this.popup_bottom = this.selectComponent('#popup-bottom');
            this.popup_bottom.closePopup()
            this.setData({
              imgList
            })

            this.triggerEvent('imgList', {
              imgList,
              model: this.data.model
            })
          })
        }

      })
    },
    bigImage(e){
      const {index}=e.currentTarget.dataset;
      console.log(this.data.imgList)
      console.log(this.data.imgList[index].url)
      let imageList=this.data.imgList.filter(item=>item.type==='image').map(img=>img.url);
      console.log(imageList)
      wx.previewImage({
        current: this.data.imgList[index].url, // 当前显示图片的http链接
        urls: imageList // 需要预览的图片http链接列表
      })
    },
    choiceVideo() {
      chooseVideo().then(res => {
        console.log(res)
        return res.tempFilePath
      }).then(res => {
        let List = [];

        if ( this.data.imgList.length + 1 > this.data.maxNums) {
          console.log('我进来了')
          Toast(`最多上传${this.data.maxNums}张视频或者图片！`)
          return
        } else {
          wx.showToast({
            title: '视频上传中...',
            icon: 'none'
          })
          List[0] = uploadFile(https_video, res)
          Promise.all(List).then(res => {
            console.log(res)


            wx.hideLoading()
            let imgList = this.data.imgList;
            for (let i = 0; i < res.length; i++) {
              res[i].data = JSON.parse(res[i].data)
              
              imgList.push({
                type: 'video',
                mediaUrl: res[i].data.videoUrl
              })
            }
            console.log(imgList)
            this.setData({
              imgList
            })
            this.popup_bottom = this.selectComponent('#popup-bottom');
            this.popup_bottom.closePopup()
            this.triggerEvent('imgList', {
              imgList,
              model: this.data.model
            })
          })
        }

      })
    },
    // 限制7张，选择了5张，还剩下2张,再选择3张，
    addFile(e) {
      this.popup_bottom = this.selectComponent('#popup-bottom');
      this.popup_bottom.openPopup()
    },
  }
})