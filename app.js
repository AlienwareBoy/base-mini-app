import {
  Storage
} from './utils/getStorageInfo.js'
import { miniPage } from './utils/page.js'
console.log(1)
Page = miniPage
App({
  data: {
    Storage,
    userInfo: null
  },
  onLaunch(e){
   
  }
})