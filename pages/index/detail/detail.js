Page({
    data: {
        content: '',
        title: '',
        contArray: [],
        time: '',
        note: '',
        id: ''
    },
    onShareAppMessage() {
        return {
            imageUrl: "https://xbb.fudaquan.cn:8080/images/app/logo.jpg",
        }
    },
    onLoad(route) {
        let that = this;
        this.setData({
            id: route.id
        })
        qq.request({
            url: 'https://xbb.fudaquan.cn:8080/tasks/task',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                'sessionId': qq.getStorageSync('sessionId')
            },
            data: {
                openId: qq.getStorageSync('openId'),
                taskId: that.data.id
            },
            success(res) {
                let r = res.data.data;
                let c = '';
                let contArray = JSON.parse(r.content);
                for (let i = 0; i < contArray.length; i++) {
                    c += contArray[i];
                    c += '\n\n';
                }
                that.setData({
                    title: r.theme,
                    content: c,
                    note: r.note || '',
                    time: r.endTime.split(' ')[0],
                    contArray: contArray
                })
            }
        })
    },
    edt() {
        let that = this;
        qq.navigateTo({
            url: `/pages/work/edit/edit?id=${that.data.id}`
        })
    },
    rmv() {
        let that = this;
        qq.request({
            url: `https://xbb.fudaquan.cn:8080/tasks/task?openId=${qq.getStorageSync('openId')}&taskId=${that.data.id}`,
            method: "DELETE",
            header: {
                "content-type": "application/x-www-form-urlencoded",
                'sessionId': qq.getStorageSync('sessionId')
            },
            success(res) {
                if (res.data.code == 0) {
                    qq.showToast({
                        title: '成功删除'
                    });
                    qq.reLaunch({
                        url: '/pages/work/work'
                    })
                } else {
                    qq.showToast({
                        title: data.taskId
                    });
                    qq.navigateBack()
                }
            }
        })
    },
    done() {
        let that = this;
        qq.request({
            url: 'https://xbb.fudaquan.cn:8080/tasks/task',
            header: {
                'sessionId': qq.getStorageSync('sessionId'),
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "PUT",
            data: {
                task: JSON.stringify({
                    openId: qq.getStorageSync('openId'),
                    taskId: that.data.id,
                    type: 2
                })
            },
            success(res) {
                console.log(res)
                if (res.data.code == 0) {
                    qq.showToast({
                        title: '成功'
                    });
                }
            }
        })
    }
})