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
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
        }
      })
    }
  }
})
