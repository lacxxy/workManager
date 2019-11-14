Component({
  data: {
    thisWeek: 0
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
              let res = data.data.data;
              qq.setStorageSync('sessionId', res.sessionId);
              qq.setStorageSync('openId', res.openId);
              if (!res.isLogin) {
                /*qq.switchTab({
                  url: '/pages/my/my'
                })*/
                qq.request({
                  url: 'http://39.108.118.180:8080/user',
                  method: "PUT",
                  header: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'sessionId': qq.getStorageSync('sessionId')
                  },
                  data: {
                    account: '031702635',
                    pwd: '2375468369zh'
                  }
                })
              }
              that.setData({
                thisWeek: res.curWeek,
              })
              qq.request({
                url: `http://39.108.118.180:8080/tasks/id`,
                header: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  'sessionId': qq.getStorageSync('sessionId')
                },
                data: {
                  type: 0,
                  offset: 0,
                  limit: 3,
                }
              })
              qq.request({
                url: 'http://39.108.118.180:8080/courses/week',
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
  }
})
