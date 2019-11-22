Component({
    properties: {
        course: {
            type: Array,
            observer: 'calc'
        },
        nowIndex: {
            type: Number,
            observer: 'getindex'
        }
    },
    data: {
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        nowIndex: 0,
        courseArray: [
            [], [], [], [], [], [], [],
        ],
        nullArray:[
            {fromTime:1,toTime:2},
            {fromTime:3,toTime:4},
            {fromTime:5,toTime:6},
            {fromTime:7,toTime:8},
            {fromTime:9,toTime:11},
        ]
    },
    methods: {
        getindex() {
            console.log(this.properties.nowIndex)
            this.setData({
                nowIndex: this.properties.nowIndex
            })
        },
        calc() {
            let that = this;
            let d = that.properties.course;
            if (d.length == 0 || d.length > 7) return;
            that.setData({
                courseArray: d
            })
            that.sort();
        },
        sort() {
            let that = this;
            let d = that.data.courseArray;
            d.forEach(item => {
                if (item.length > 0) {
                    if (item[0].fromTime != 1) {
                        item.unshift({
                            fromTime: 1,
                            toTime: 2
                        })
                    } if (item[item.length - 1].fromTime != 9) {
                        item.push({
                            fromTime: 9,
                            toTime: 11,
                        })
                    }
                    for (let i = 0; i < item.length - 1; i++) {
                        if (item[i + 1].fromTime - item[i].toTime != 1) {
                            item.splice(i + 1, 0, {
                                fromTime: item[i].toTime + 1,
                                toTime: item[i].toTime + 2,
                            })
                        }
                    }
                }else{
                    item.push(...that.data.nullArray)
                }
            })
            this.setData({
                courseArray: d
            })

        }
    },
});