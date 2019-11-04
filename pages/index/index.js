Component({
  data: {
    itemHeight: Number,
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        console.log("???")
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  ready: function () {
    var that = this;
    var query = qq.createSelectorQuery();
    query.select('.work').boundingClientRect(function (res) {
      console.log(res);
      that.setData({
        itemHeight: res.height / 3.5
      })
      console.log(that.data)
    }).exec();
  }
})
