Component({
    properties: {
        work:{
            type:Object,
            observer: 'calc'
        }
    },
    data:{
        content:[]
    },  
    methods:{
        calc(){
            let d=JSON.parse(this.properties.work.content);
            this.setData({
                content:d
            })
        }
    },
    ready: function () {
    }
});