// component/input-item/input-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    },
  },
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getValue(e) {
      let item = this.data.item;
      const {
        model,
        index
      } = e.currentTarget.dataset;
      item[model] = e.detail.value;
      this.triggerEvent('value', {
        model,
        value: e.detail.value,
        item,
        index
      })
    },
  }
})