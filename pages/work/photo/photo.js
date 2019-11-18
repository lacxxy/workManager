Page({
    data: {
        src:''
    },
    takePhoto() {
        const ctx = qq.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                console.log(res)
                this.setData({
                    src: res.tempImagePath
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    }
})