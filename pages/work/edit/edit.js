// test.js
var util = require("../../../utils/util.js");
Page({
    data: {
        content: [],
        contentArray: [],
        courseArray: [],
        date: '',
        array: [
        ],
        index: 0,
        note: '',
        id: 0,
        formid:0
    },
    onLoad(option) {
        let that = this;
        if (option.content) {
            let data = JSON.parse(JSON.parse(option.content));
            this.setData({
                content: data.data.join('')+'\n\n'
            });
            console.log(option.content)
            let time = util.formatDate(new Date());
            let date = util.getDates(1, time)[0].time;
            date = date.replace(/\//g, '-');
            this.setData({
                date: date
            })
            this.getCourse();
        } else if (option.id) {
            this.setData({
                id: option.id
            })
            this.getData()
        }
    },
    getData() {
        let that = this;
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
                let d = [r.theme];
                let t = r.endTime.split(' ')[0];
                let c = '';
                let contArray = JSON.parse(r.content);
                for (let i = 0; i < contArray.length; i++) {
                    c += contArray[i];
                    c += '\n\n';
                }
                that.setData({
                    array: d,
                    content: c,
                    note: r.note,
                    date: t
                })
            }
        })
    },
    getCourse() {
        let that = this;
        qq.request({
            url: 'https://xbb.fudaquan.cn:8080/courses/day',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                'sessionId': qq.getStorageSync('sessionId')
            },
            success(res) {
                console.log(res.data.data)
                let d = res.data.data.map(item => {
                    return item.name
                })
                that.setData({
                    array: d,
                    courseArray: res.data.data
                })
            }
        })
    },
    bindDateChange(val) {
        this.setData({
            date: `${val.detail.value} ${new Date().getHours()}`
        })
    },
    bindCourseChange(val) {
        this.setData({
            index: val.detail.value
        })
    },
    noteInput(e) {
        this.setData({
            note: e.detail.value
        })
    },
    contentInput(e) {
        this.setData({
            content: e.detail.value
        })
    },
    add() {
        let that = this;
        if (this.data.content != ' ') {
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
                qq.showLoading({
                    title: '加速上传中。。。',
                })
                qq.uploadFile({
                    url: 'https://xbb.fudaquan.cn:8080/PhotoToText',
                    filePath: res.tempFilePaths[0],
                    name: 'photo',
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function (res) {
                        qq.hideLoading()
                        let data = JSON.parse(res.data).data;
                        data = data.join('');
                        data += "\n\n";
                        let d = that.data.content + data;
                        console.log(d)
                        that.setData({
                            content: d
                        })
                    }
                })
            })
        }
    },
    save(e) {
        this.setData({
            formid:e.detail.formId
        })
        this.data.id == 0 ? this.creat() : this.edit();
    },
    creat() {
        let that = this;
        let cont;
        //this.data.contentArray.push(this.data.content);
        console.log(that.data.content)
        if (that.data.content.length == 1) {
            cont = that.data.content;
        } else {
            cont = that.data.content.split('\n\n');
        }
        let d = {
            "openId": qq.getStorageSync('openId'),
            "theme": that.data.array[that.data.index],
            "content": JSON.stringify(cont),
            "note": that.data.note,
            'endTime': that.data.date,
            'formId':that.data.formid
            //'relaCourse':`${that.data.courseArray[that.data.index].courseId}-${}`
        };
        if (that.data.id !== 0) {
            d.taskId = that.data.id
        }
        qq.uploadFile({
            url: 'https://xbb.fudaquan.cn:8080/tasks/task',
            filePath: '/assets/add.png',
            name: 'file',
            header: {
                'sessionId': qq.getStorageSync('sessionId')
            },
            formData: d,
            success(res) {
                let r=JSON.parse(res.data);
                console.log(r)
                if (r.code == 0) {
                    qq.showToast({
                        title: '成功'
                    });
                    qq.navigateBack()
                }
            }
        })
    },
    edit() {
        let that = this;
        let arr = that.data.content.split('\n\n');

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
                    content: JSON.stringify(arr),
                    note: that.data.note,
                    theme: that.data.array[that.data.index],
                    endTime: that.data.date,
                })
            },
            success(res) {
                console.log(res)
                if (res.data.code == 0) {
                    qq.showToast({
                        title: '成功'
                    });
                    qq.navigateBack()
                }
            }
        })
    }
})
