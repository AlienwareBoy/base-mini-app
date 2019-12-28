// component/step/step.js
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
    stepList: [{
      description: '我是很长的描述真的很长的描述我是很长的描述真的很长的描述我是很长的描述真的很长的描述我是很长的描述真的很长的描述我是很长的描述真的很长的描述我是很长的描述真的很长的描述我是很长的描述真的很长的描述我是很长的描述真的很长的描述',
      createTime: '1577504795164',
      title: '我是标题'
    }, {
      description: '我是很长的描述真的很长的描述',
      createTime: '1577440908074',
      title: '我是标题'
    }]
  },
  options: {
    styleIsolation: 'shared'
  },
  getTime(time) {
    let getGoodsTime = new Date(time);
    let getTimeStr = `${getGoodsTime.getFullYear()}年${getGoodsTime.getMonth() + 1}月${getGoodsTime.getDate()}日  ${getGoodsTime.getHours()}:${getGoodsTime.getMinutes()}:${getGoodsTime.getSeconds()}`
    return getTimeStr
  },
  sortKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x > y ? -1 : x < y ? 1 : 0;
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})