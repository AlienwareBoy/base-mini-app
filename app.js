import {
  Storage
} from './utils/getStorageInfo.js'
import { miniPage } from './utils/page.js'
Page = miniPage
App({
  data: {
    Storage,
    userInfo: null
  },
  onLaunch(e){
   
  },
  globalData:{
    isLogin:false
  }
})