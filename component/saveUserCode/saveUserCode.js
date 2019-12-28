// component/saveUserCode/saveUserCode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showCode:true,
    itemList: [
      './image/platform introduction@2x.png',
      './image/platform introduction@2x.png',
      './image/platform introduction@2x.png',
      './image/platform introduction@2x.png'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeMask(){
      this.setData({
        showCode:false
      })
    },
    show() {
      this.setData({
        showCode: true
      })
    },
    close() {
      this.setData({
        showCode: false
      })
    }
  }
})