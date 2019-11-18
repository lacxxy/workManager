Component({
  data: {
    mes:{

    },
    menu: [
      {
        'title': '身份认证',
        'url': 'login/login'
      },
      {
        'title': '更换配色',
      },
      {
        'title': '功能介绍',
      },
      {
        'title': '设置',
      },
      {
        'title': '联系作者',
      },
      {
        'title': '关于我们',
      }
    ]
  },
  ready: function () {
    let that=this;
    qq.request({
      url: 'http://39.108.118.180:8080/user',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'sessionId': qq.getStorageSync('sessionId')
      },
      success:function(res){
        let data=res.data.data;
        console.log(data);
        that.setData({
          mes:data
        })
      }
    })
  }
})
