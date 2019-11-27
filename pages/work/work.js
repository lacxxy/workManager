Page({
  data: {
    work: [],
    workArray: [],
    index: 0,
    loading: false
  },
  onLoad: function () {
    let that = this;
    that.getWork(2);
    that.getWork(1);
    that.getWork(0);
    qq.stopPullDownRefresh();
  },
  onPullDownRefresh(){
    this.onLoad()
  },
  change(e) {
    this.setData({
      index: e.detail.current
    })
  },
  more: function () {
    let that = this;
    that.setData({
      loading: true
    })
    that.data.index++;
    qq.request({
      url: 'https://xbb.fudaquan.cn:8080/tasks/id',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'sessionId': qq.getStorageSync('sessionId')
      },
      data: {
        type: 0,
        offset: that.data.index * 4,
        limit: 4
      },
      success(res) {
        let d = res.data.data;
        let l = d.length;
        if (l == 0) { that.data.index--; }
        else {
          let arr = (that.data.work).concat(res.data.data);
          that.setData({
            work: arr
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
      qq.showLoading({
        title: '加速上传中。。。',
      })
      qq.uploadFile({
        url: 'https://xbb.fudaquan.cn:8080/PhotoToText',
        filePath: res.tempFilePaths[0],
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
          qq.navigateTo({
            url: `edit/edit?content=${JSON.stringify(res.data)}`
          })
        }
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
      index:0
    })
  },
  notDone() {
    this.setData({
      index:1
    })
  },
  done() {
    this.setData({
      index:2
    })
  }
})
