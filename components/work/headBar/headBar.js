Component({
    properties: {

    },
    data: {
        index: 0
    },
    ready: function () {
    },
    methods: {
        all() {
            this.triggerEvent('all');
            this.setData({
                index: 0
            })
        },
        notDone() {
            this.triggerEvent('notDone');
            this.setData({
                index: 1
            })
        },
        done() {
            this.triggerEvent('done');
            this.setData({
                index: 2
            })
        }
    }
});