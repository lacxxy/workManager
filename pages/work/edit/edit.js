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
        id: 0
    },
    onLoad(option) {
        if (option.content) {
            let data = JSON.parse(JSON.parse(option.content));
            this.setData({
                content: data.data
            });
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
                let r = res.data.data;
                let d = [r.theme];
                let t = r.endTime.split(' ')[0];
                console.log(t)
                that.setData({
                    array: d,
                    content: r.content,
                    note: r.note,
                    date: t
                })
            }
        })
    },
    getCourse() {
        let that = this;
        qq.request({
            url: 'http://39.108.118.180:8080/courses/day',
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
            date: val.detail.value
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
    add() {
        let that = this;
        if (this.data.content != ' ') {
            this.data.contentArray.push(this.data.content);
            this.setData({
                content: ' '
            })
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
                qq.uploadFile({
                    url: 'http://39.108.118.180:8080/PhotoToText',
                    filePath: res.tempFilePaths[0],
                    name: 'photo',
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function (res) {
                        let data = JSON.parse(res.data);
                        that.setData({
                            content: data.data
                        })
                    }
                })
            })
        }
    },
    save() {
        let that = this;
        this.data.contentArray.push(this.data.content);
        let cont = that.data.contentArray.map(item => {
            return item.join('');
        });
        let d = {
            "openId": qq.getStorageSync('openId'),
            "theme": that.data.array[that.data.index],
            "content":JSON.stringify(cont),
            "note": that.data.note,
            'endTime': that.data.date,
            //'relaCourse':`${that.data.courseArray[that.data.index].courseId}-${}`
        };
        if (that.data.id !== 0) {
            d.taskId = that.data.id
        }
        qq.uploadFile({
            url: 'http://39.108.118.180:8080/tasks/task', 
            filePath:'/assets/add.png',
            name: 'file',
            header: {
                'sessionId': qq.getStorageSync('sessionId')
            },
            formData: d,
            success(res) {
                console.log(res)
            }
        })
        /*qq.request({
            url: 'http://39.108.118.180:8080/tasks/task',
            method: that.data.id == 0 ? "POST" : "PUT",
            header: {
                'content-type': this.data.id == 0 ? 'application/x-www-form-urlencoded' : 'application/json',
                'sessionId': qq.getStorageSync('sessionId')

            },
            data: this.data.id == 0 ? d : {
                "task": d
            },
            success(res) {
                if (res.data.code === 0) {
                    qq.showToast({
                        title: '保存成功',
                        duration: 2000
                    })
                }
            }
        })*/
    }
})
