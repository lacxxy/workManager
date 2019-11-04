Component({
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
  }
})
