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
            //console.log(this.properties.dataArray)
            let index = 0//parseInt(this.properties.dataArray.fromTime / 2);
            this.setData({
                color: this.data.colorArray[index]
            })
        }
    },
    ready() {
        this.getColor()
    }
})