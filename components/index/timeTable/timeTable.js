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
            that.sort();
            console.log(that.data.courseArray)
        },
        sort() {
            let that=this;
            let d=that.data.courseArray;
            d.forEach(item => {
                if (item[0].fromTime != 1) {
                    item.unshift({
                        fromTime: 1,
                        toTime: 2
                    })
                }if(item[item.length-1].fromTime != 9){
                    item.push({
                        fromTime:9,
                        toTime:11,
                    })
                }
                for(let i=0;i<item.length-1;i++){
                    if(item[i+1].fromTime-item[i].toTime!=1){
                        console.log(1)
                        item.splice(i+1,0,{
                            fromTime:item[i].toTime+1,
                            toTime:item[i].toTime+2,
                        })
                    }
                }
            })
            this.setData({
                courseArray:d
            })
        }
    },
});