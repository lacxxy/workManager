Component({
  data: {
    work: []
  },
  ready: function () {
    let that = this;
    qq.request({
      url: 'http://39.108.118.180:8080/tasks/id',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'sessionId': qq.getStorageSync('sessionId')
      },
      data: {
        type: 0,
        offset: 0,
        limit: 4
      },
      success(res) {
        let d = res.data.data;
        let l = d.length;
        for (let i = l; i < 4; i++) {
          d.push({
            theme: '暂无',
            content: '[]',
          })
        }
        that.setData({
          work: d
        })
      }
    })
  },
  methods: {
    getDate() {
      qq.request({
        url: 'http://39.108.118.180:8080/tasks/day',
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'sessionId': qq.getStorageSync('sessionId')
        },
        data: {
          type: 0,
          offset: 0,
          limit: 4
        },
        success(res) {
          console.log(1)
          let d = res.data.data;
          let l = d.length;
          for (let i = 0; i < l; i++) {
            d.push({
              theme: '暂无',
              content: [],
            })
          }
          console.log(d)
          that.setData({
            work: d
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
        qq.uploadFile({
          url: 'http://39.108.118.180:8080/PhotoToText',
          filePath: res.tempFilePaths[0],
          name: 'photo',
          header: {
            "Content-Type": "multipart/form-data",
            'sessionId': qq.getStorageSync('sessionId')
          },
          success: function (res) {
            console.log(JSON.stringify(res.data))
            let d = res.data;
            qq.navigateTo({
              url: `edit/edit?content=${JSON.stringify(res.data)}`
            })
          }
        })
      })
    }
  }
})
