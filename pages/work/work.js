Page({
  data: {
    work: [],
    workArray: [],
    index: 0,
    arrIndex: [0, 0, 0],
    loading: false
  },
  onShareAppMessage() {
    return {
      imageUrl: "https://xbb.fudaquan.cn:8080/images/app/logo.jpg",
    }
  },
  onLoad: function () {
    qq.showLoading({
      title: '加载中...'
    })
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    this.setData({
      arrIndex: [0, 0, 0]
    })
    let that = this;
    that.getWork(2);
    that.getWork(1);
    that.getWork(0);
    qq.stopPullDownRefresh();
    qq.hideLoading()
  },
  f5() {
    this.onLoad();
  },
  onPullDownRefresh() {
    this.onLoad()
  },
  test(e) {
    console.log(e)
  },
  change(e) {
    this.setData({
      index: e.detail.current,
    })
  },
  more: function () {
    let that = this;
    that.setData({
      loading: true
    })
    that.data.arrIndex[that.data.index]++;
    qq.request({
      url: 'https://xbb.fudaquan.cn:8080/tasks/id',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'sessionId': qq.getStorageSync('sessionId')
      },
      data: {
        type: that.data.index,
        offset: that.data.arrIndex[that.data.index] * 4,
        limit: 4
      },
      success(res) {
        let d = res.data.data;
        let l = d.length;
        if (l == 0) { that.data.arrIndex[that.data.index]++; }
        else {
          let arr = that.data.workArray;
          arr[that.data.index] = arr[that.data.index].concat(res.data.data)
          that.setData({
            workArray: arr,
          })
        }
        that.setData({
          loading: false
        })
      }
    })
  },

  routego() {
    let chooseImage = new Promise((resolve, reject) => {
      qq.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          resolve(res);
        }
      })
    })
    chooseImage.then(res => {
      qq.navigateTo({
        url: `crop/image-cropper?src=${res.tempFilePaths[0]}`,
      })
    })
  },
  getWork(type) {
    let that = this;
    qq.request({
      url: 'https://xbb.fudaquan.cn:8080/tasks/id',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'sessionId': qq.getStorageSync('sessionId')
      },
      data: {
        type: 0,
        offset: 0,
        limit: 4,
        type: type
      },
      success(res) {
        let d = res.data.data;
        let workArray = that.data.workArray;
        workArray[type] = d;
        that.setData({
          work: d,
          workArray: workArray
        })
      }
    })
  },
  allWork() {
    this.setData({
      index: 0
    })
  },
  notDone() {
    this.setData({
      index: 1
    })
  },
  done() {
    this.setData({
      index: 2
    })
  }
})
