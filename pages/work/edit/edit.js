// test.js
var util = require("../../../utils/util.js");
Page({
    data: {
        content: [],
        contentArray: [],
        courseArray: [],
        course: [],
        date: '',
        array: [
        ],
        relaCourse: '',
        index: 0,
        note: '',
        id: 0,
        formid: 0,
        show: false,
        selfCourse: ''
    },
    onShareAppMessage() {
        return {
            imageUrl: "https://xbb.fudaquan.cn:8080/images/app/logo.jpg",
        }
    },
    onLoad(option) {
        console.log(option)
        let that = this;
        if (option.content) {
            let data = JSON.parse(JSON.parse(decodeURIComponent(option.content)));
            this.setData({
                content: data.data.join('') + '\n\n'
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
                id: option.id,

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
                let d = []
                d.push(r.theme)
                console.log(d)
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
                    date: t,
                    course: [{ courseId: r.relaCourse.split('-')[0] }]
                })
                console.log(that.data)
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
                let d = res.data.data.map(item => {
                    return item.name
                })
                d.push('自定义')
                that.setData({
                    array: d,
                    courseArray: res.data.data,
                    course: res.data.data
                })
            }
        })
    },
    bindDateChange(val) {
        this.setData({
            date: `${val.detail.value}`
        })
    },
    bindCourseChange(val) {
        this.setData({
            index: val.detail.value
        })
        if (this.data.array[val.detail.value] == '自定义') {
            this.setData({
                show: true
            })
        } else {
            this.setData({
                show: false
            })
        }
    },
    noteInput(e) {
        this.setData({
            note: e.detail.value
        })
    },
    courseInput(e) {
        this.setData({
            selfCourse: e.detail.value
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
                qq.navigateTo({
                    url: `/pages/work/crop/image-cropper?src=${res.tempFilePaths[0]}&text=${encodeURIComponent(that.data.content)}`,
                })
            })
        }
    },
    save(e) {
        let that = this;
        this.setData({
            formid: e.detail.formId
        })
        var endTime = that.data.date;
        var today = qq.getStorageSync('schoolOpenDay');
        let t = util.timeMinus(endTime, today);
        this.setData({
            relaCourse: that.data.selfCourse ? null : `${this.data.course[this.data.index].courseId}-${parseInt(t / 7) + 1}-${util.getWeekday(today)}`
        })
        this.data.id == 0 ? this.creat() : this.edit();
    },
    creat() {
        let that = this;
        let cont;
        console.log(that.data.content)
        if (that.data.content.length == 1) {
            cont = that.data.content;
        } else {
            cont = that.data.content.split('\n\n');
            cont.filter(item => {
                return item != ""
            })
        }
        let d = {
            "openId": qq.getStorageSync('openId'),
            "theme": that.data.show ? that.data.selfCourse : that.data.array[that.data.index],
            "content": JSON.stringify(cont),
            "note": that.data.note,
            'endTime': `${that.data.date} ${new Date().getHours()}`,
            'formId': that.data.formid,
            'relaCourse': that.data.relaCourse
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
                console.log(res)
                let r = JSON.parse(res.data);
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
        arr = arr.filter(item => {
            return item.length != 0
        })
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
                    theme: that.data.show ? that.data.selfCourse : that.data.array[that.data.index],
                    endTime: `${that.data.date} ${new Date().getHours()}`,
                    relaCourse: that.data.relaCourse
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
