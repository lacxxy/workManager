Component({
    properties: {
        dataArray: {
            type: Object
        },
    },
    data: {
        colorArray: [
            '#ABD696',
            '#01b8ee',
            '#aa8abc',
            '#84ccc9',
            '#d1bfa5'
        ],
        color: '',
    },
    methods: {
        getColor() {
            let index = parseInt(this.properties.dataArray.fromTime / 2);
            this.setData({
                color: this.data.colorArray[index]
            })
        }
    },
    ready() {
        this.getColor()
    }
})