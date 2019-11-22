Page({
    data: {
        content: '',
        title: '',
        time: '',
        note: '',
        id: ''
    },
    onLoad(route) {
        let that = this;
        this.setData({
            id: route.id
        })
        qq.request({
            url: 'http://39.108.118.180:8080/tasks/task',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                'sessionId': qq.getStorageSync('sessionId')
            },
            data: {
                openId: qq.getStorageSync('openId'),
                taskId: that.data.id
            },
            success(res) {
                let r=res.data.data;
                that.setData({
                    title:r.theme,
                    content:r.content,
                    note:r.note,
                    time:r.endTime
                })
            }
        })
    },
    edt(){
        let that=this;
        qq.navigateTo({
            url:`/pages/work/edit/edit?id=${that.data.id}`
        })
    }
})