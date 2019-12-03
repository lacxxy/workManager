Page({
  data: {
    src: '',
    width: 250,//宽度
    height: 250,//高度
    max_height: 650,
    max_width:650,
    oldText: ''
  },
  onLoad: function (options) {

    if (options.text) {
      this.setData({
        oldText: decodeURIComponent(options.text)
      })
    }
    //获取到image-cropper对象
    this.cropper = this.selectComponent("#image-cropper");
    //开始裁剪
    this.setData({
      src: options.src,
      max_width:qq.getSystemInfoSync().windowWidth
    });
  },
  cropperload(e) {
  },
  loadimage(e) {
    wx.hideLoading();
    //重置图片角度、缩放、位置
    this.cropper.imgReset();
  },
  clickcut(e) {
    //点击裁剪框阅览图片
    qq.previewImage({
      current: e.detail.url, // 当前显示图片的http链接
      urls: [e.detail.url] // 需要预览的图片http链接列表
    })
  },
  submit() {
    let that = this;
    this.cropper.getImg((obj) => {
      // 这里就是想要截取的图片传给后台的虚拟路
      qq.showLoading({
        title: '加速上传中。。。',
      })
      qq.uploadFile({
        url: 'https://xbb.fudaquan.cn:8080/PhotoToText',
        filePath: obj.url,
        name: 'photo',
        header: {
          "Content-Type": "multipart/form-data",
          'sessionId': qq.getStorageSync('sessionId')
        },
        success: function (res) {
          qq.hideLoading();
          if (JSON.parse(res.data).code == -1) {
            qq.showToast({
              title: "网络问题，请重试。。。"
            });
            return;
          }
          let d = res.data;
          if (that.data.oldText != '') {
            let data = JSON.parse(res.data).data;
            data = data.join('');
            data += '\n\n';
            let d = that.data.oldText + data;
            let pages = getCurrentPages();
            let prevPage = pages[pages.length - 2];
            prevPage.setData({
              content: d
            })
            console.log(prevPage.data)
            qq.navigateBack()
          }
          else {
            qq.navigateBack()
            qq.navigateTo({
              url: `/pages/work/edit/edit?content=${encodeURIComponent(JSON.stringify(res.data))}`
            })
          }
        }
      })
    })
  }
})