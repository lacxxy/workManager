Component({
    properties: {
        arr: {
            type: Object
        }
    },
    methods: {
        routergo() {
            if (this.properties.arr.url == 'color') {
                qq.showActionSheet({
                    itemList: ['亮色主题', '暗色主题'],
                    success(res) {
                        if (res.tapIndex == 0) {
                            qq.setTabBarStyle({
                                color: "#000000",
                                selectedColor: "#ff4c4d",
                                borderStyle: "black",
                                backgroundColor: "#ffffff",
                            })
                        }
                        if (res.tapIndex == 1) {
                            qq.setTabBarStyle({
                                color: '#FFFFFF',
                                selectedColor: '#FF0000',
                                backgroundColor: '#000000',
                                borderStyle: 'white'
                            })
                        }
                    },
                    fail(res) {
                        console.log(res.errMsg)
                    }
                })
            } else if (this.properties.arr.url == 'clear') {
                qq.clearStorage({
                    success() {
                        qq.showToast({
                            title: '成功',
                            icon: 'success',
                            duration: 2000
                        })
                    },
                    fail() {
                        qq.showToast({
                            title: '失败',
                            icon: 'fail',
                            duration: 2000
                        })
                    }
                })
            }
            else {
                qq.navigateTo({
                    url: this.properties.arr.url
                })
            }
        }
    },
    ready: function () {
        qq.getSetting({
            success(res) {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    qq.getUserInfo({
                        success(res) {
                            console.log(res.userInfo)
                        }
                    })
                }
            }
        })
    }
});