Component({
  data: {
    account: '',
    pwd: ''
  },
  methods: {
    userNameInput: function (e) {
      this.setData({
        account: e.detail.value
      })
    },
    pwdInput: function (e) {
      this.setData({
        pwd: e.detail.value
      })
    },
    login() {
      let that = this;
      qq.request({
        url: 'https://xbb.fudaquan.cn:8080/user',
        method: "PUT",
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'sessionId': qq.getStorageSync('sessionId')
        },
        data: that.data,
        success: function (res) {
          let code = res.data.code;
          if (code != 0) {
            qq.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }
          else {
            qq.showToast({
              title: '认证成功',
              duration: 2000
            })
            qq.navigateBack()
          }
        }
      })
    }
  }
})
