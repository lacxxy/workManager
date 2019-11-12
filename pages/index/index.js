Component({
  data: {
    //itemHeight: Number,
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
            success: function (data) {
              console.log(data.header['Set-Cookie'])
              qq.setStorageSync('openid', data.data.data);
              qq.request({
                url:'http://39.108.118.180:8080/tasks/task',
                header: {
              "Content-Type": "application/x-www-form-urlencoded",
              'sessionId':c
            },
                data:{
                  openId:7844,
                  taskId:7844
                 /* type:4,
                  offset:0,
                  limit:3,*/
                }
              })        
            }
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
