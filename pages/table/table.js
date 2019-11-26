Page({
    data: {
        autoplay: false,
        interval: 5000,
        duration: 500,
        nowIndex: 0,
        course: [],
        index: 0,
        weekDay: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        weekArray: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
        nullArray: [
            { fromTime: 1, toTime: 2 },
            { fromTime: 3, toTime: 4 },
            { fromTime: 5, toTime: 6 },
            { fromTime: 7, toTime: 8 },
            { fromTime: 9, toTime: 11 },
        ],
        colorArray: [
            '#ABD696',
            '#01b8ee',
            '#aa8abc',
            '#84ccc9',
            '#d1bfa5',
            "#f58f98",
            '#faa755',
            '#a3cf62'
        ],
    },
    bindPickerChange(e) {
        let that = this;
        this.setData({
            nowIndex: e.detail.value
        })
    },
    change(e) {
        let that = this;
        let num = e.detail.current;
        this.setData({
            nowIndex: num
        })
    },
    random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    },
    onLoad() {
        let that = this;
        qq.request({
            url: 'https://xbb.fudaquan.cn:8080/courses/week',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                'sessionId': qq.getStorageSync('sessionId')
            },
            data: {
                fromWeek: 1,
                toWeek: 20
            },
            success: function (res) {
                let course = res.data.data;
                let d = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                for (let i = 1; i < 21; i++) {
                    course.forEach(item => {
                        if (item.fromWeek <= i && item.toWeek >= i) {
                            d[i - 1].push(item)
                        }
                    })

                    let arr = [[{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}]];
                    d[i - 1].forEach(item => {
                        let n = parseInt(item.fromTime / 2);
                        arr[item.day - 1][n] = item;
                        arr[item.day - 1][n].color = that.data.colorArray[that.random(0,7)];
                    })

                    d[i - 1] = arr;
                }
                let num = qq.getStorageSync('curWeek');
                that.setData({
                    course: d,
                    nowIndex: num
                })
            }
        })
    }
})