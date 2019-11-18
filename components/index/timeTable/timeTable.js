Component({
    properties: {
        course: {
            type: Array,
            observer: 'calc'
        }
    },
    data: {
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        courseArray: [
            [], [], [], [], [], [], [],
        ]
    },
    methods: {
        calc() {
            let that = this;
            let d = that.properties.course;
            if (d.length == 0 || d.length > 7) return;
            that.setData({
                courseArray: d
            })
            that.sort()
        },
        sort() {
            let that=this;
            that.data.courseArray.forEach(item => {
                if (item[0].fromTime != 1) {
                    item.unshift({
                        fromTime: 1,
                        toTime: 2
                    })
                }
            })
        }
    },
});