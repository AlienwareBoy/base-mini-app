import {
  init,
} from './init.js'
import {
  wxLogin
} from './miniappPromise.js'
let wxPage = Page

function miniPage(config) {
  let mini_life=config.onLoad
  config.onLoad = function(options) {
    // 初始化判断
    init(options)
    mini_life.call(this, options)
  }
  wxPage(config)
}

export {
  miniPage
}