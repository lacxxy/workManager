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
        'url':'color'
      },
      {
        'title': '功能介绍',
        'url':'/pages/my/func/func'
      },
      {
        'title': '清除缓存',
        'url':'clear'
      },
      {
        'title': '分享',
        'url':'share'
      },
      {
        'title': '关于我们',
        'url':'about'
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
