const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function throttle(fn, gapTime = 1500) {
  let _lastTime = null
  // 返回新的函数
  return function() {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments) //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}
// 解析query
function getUrlByObject(o, prefix = "", urls = []) {
  if (o instanceof Array) {
    o.forEach((e, i) => {
      if (e instanceof Array || e instanceof Object) {
        urls = urls.concat(getUrlByObject(e, prefix));
      } else {
        urls.push(prefix + "=" + e);
      }
    });
  } else if (o instanceof Object) {
    for (const p in o) {
      const value = o[p];
      if (value instanceof Array || value instanceof Object) {
        urls = urls.concat(
          getUrlByObject(value, prefix ? prefix + "." + p : p)
        );
      } else {
        urls.push((prefix ? prefix + "." + p : p) + "=" + value);
      }
    }
  }
  return urls;
}
function fixOpts(options) {
  if (options.query) {
    options.url = options.url.split("?")[0];
    // 安卓上的不会对中文进行 encode 导致请求错误
    options.url += `?${getUrlByObject(options.query)
      .map(encodeURI)
      .join("&")}`;
    delete options.query;
  }
  return options;
}
export {
  fixOpts,
  throttle,
  debounce
}