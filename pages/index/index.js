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
              console.log(data.data.data.sessionId)
              qq.setStorageSync('sessionId', data.data.data.sessionId);
              qq.setStorageSync('openId', data.data.data.openId);
              qq.request({
                url: `http://39.108.118.180:8080/tasks/id`,
                header: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  'sessionId': qq.getStorageSync('sessionId')
                },
                data: {
                   type:0,
                   offset:0,
                   limit:3,
                }
              })
              qq.request({
                url:'http://39.108.118.180:8080/courses/week',
                header: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  'sessionId': qq.getStorageSync('sessionId')
                },
                data: {
                   
                }
              })
            }
          }
          
          )
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
