Component({
    properties: {
        arr: {
            type: Object
        }
    },
    methods: {
        routergo() {
            qq.navigateTo({
                url: this.properties.arr.url
            })
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