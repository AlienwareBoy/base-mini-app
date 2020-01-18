[TOC]
# 小程序应用一览表

## 授权

**重点讲解Strage里的几个值**

1. entryPage是指在新用户的情况下,记录带入小程序端的参数,如对象在授权可自行在分享页面判断
2. count是防止页面无限次跳转,是对此写法的一种拦截
3. isSignIn是指可以允许游客模式的页面，如页面无需授权，可允许游客模式，则不会强制跳转授权页面，如果在此页面有操作需要授权，可依据该值判断，新用户为false,老用户为true

## 关于特定页面触发初始化操作,如埋点,获取地图等无需交互就可以触发的微信api

1. 设定一个数组,在微信开发者者工具复制粘贴当前页面路径,在init函数里进行初始化操作
```javascript
const check_login_page = ["pages/sharePage/sharePage","pages/index/index"];

if (check_login_page.includes(route)) {
  //表示指定页面 执行特定操作
}
```

## miniappPromise

1. 对于常用api的 promise化，懒得再写了

##  utils 

1. 对于常用工具类的存放

## component 

1. 对于常用组件的封装,如canvas  img和video的上传，popup,step等


## style

1. 对于项目的样式规范，包含margin,padding,font-size font-color background等

## api

1. 对于ajax的封装



# 最后的总结

小程序我认为没有什么太难的地方了，将近大半年的时间，包括优化和一些代码架构方面的问题 也得到了 解决比如长列表以及一些狗血的api的操作，自己心中也有了底，现在再做小程序基本也得不到太大的提升。准备深入Vue，虽然很享受vue-admin这些github上成熟的项目，但是还是想自己造一个 加深理解
