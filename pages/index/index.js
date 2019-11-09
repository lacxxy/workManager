Component({
  data: {
    //itemHeight: Number,
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        console.log("???")
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  ready: function () {
    var that = this;
    qq.login({
      success(res) {
        console.log(res)
        if (res.code) {
          // 发起网络请求
          qq.request({
            url: 'http://39.108.118.180:8080/session',
            method: "POST",
            data: {
              code: res.code
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    /*qq.request({
      url: 'http://39.108.118.180:8080/course',
      method: "POST",
      data: {
        account: '031702635',
        pwd: '2375468369zh'
      },
      success: function (res) {
        console.log(res)
      }
    })*/
  }
})
