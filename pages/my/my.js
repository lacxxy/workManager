Page({
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
        'url':'/pages/my/about/about'
      }
    ]
  },
  onPullDownRefresh(){
    this.onLoad();
    qq.stopPullDownRefresh();
  },
  onLoad: function () {
    let that=this;
    qq.request({
      url: 'https://xbb.fudaquan.cn:8080/user',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'sessionId': qq.getStorageSync('sessionId')
      },
      success:function(res){
        let data=res.data.data;
        that.setData({
          mes:data
        })
      }
    })
  }
})
