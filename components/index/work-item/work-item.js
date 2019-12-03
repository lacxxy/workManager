var util = require("../../../utils/util.js");
Component({
    properties: {
        myHeight: {
            type: Number,
            value: 200
        },
        workData: {
            type: Object,
            observer: 'calc'
        }
    },
    data: {
        title: '',
        minusTime: ''
    },
    methods: {
        routergo() {
            let that = this;
            if (that.properties.workData.taskId == undefined) return;
            qq.navigateTo({
                url: `detail/detail?id=${that.properties.workData.taskId}`
            })
        },
        calc() {
            let d = this.properties.workData.content;
            let that = this;
            let t = '';
            if (this.properties.workData.endTime == undefined) {
                t = 0;
            } else {
                var endTime = that.properties.workData.endTime.split(' ')[0]
                var time = util.formatDate(new Date());
                var date = util.getDates(1, time);
                var today = date[0].time;
                t = util.timeMinus(endTime, today);
                console.log(t)
            }
            d = JSON.parse(d);
            this.setData({
                title: d[0].replace(/[\r\n]/g,""),
                minusTime: t
            })
        }
    }
});