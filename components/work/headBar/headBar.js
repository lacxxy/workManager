Component({
    properties: {
        index:{
            type:Number,
            observe:'calc'
        }
    },
    data: {
        index: 0
    },
    ready: function () {
    },
    methods: {
        all() {
            this.triggerEvent('all');
            this.properties.index=0;
            this.setData({
                index: 0
            })
        },
        notDone() {
            this.triggerEvent('notDone');
            this.properties.index=1;
            this.setData({
                index: 1
            })
        },
        done() {
            this.triggerEvent('done');
            this.properties.index=2;
            this.setData({
                index: 2
            })
        },
        calc(){
            let that=this;
            this.setData({
                index:that.properties.index
            })
        }
    }
});