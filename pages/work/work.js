Component({
  data: {
  },
  ready: function () {

  },
  methods: {
    routego() {
      /*qq.navigateTo({
        url:'photo/photo'
      })*/
      qq.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          //const tempFilePaths = res.tempFilePaths
          qq.uploadFile({
            url: 'http://39.108.118.180:8080/PhotoToText', // 仅为示例，非真实的接口地址
            filePath: res.tempFilePaths[0],
            name: 'photo',
            header: {
              "Content-Type": "multipart/form-data"
            },
            success(res) {
              console.log(res)
            },
            fail(res){
              console.log(res)
            }
          })
        }
      })
    }
  }
})
