Component({
    properties: {
        myHeight:{
            type:Number,
            value:200
        },
        workData:{
            type:Object,
            observer:'calc'
        }
    },
    data:{
        title:''
    },
    methods:{
        routergo(){
            let that=this;
            if(that.properties.workData.taskId==undefined)return;
            qq.navigateTo({
                url:`detail/detail?id=${that.properties.workData.taskId}`
            })
        },
        calc(){
            let d=this.properties.workData.content;
            d=JSON.parse(d);
            console.log(d)
            this.setData({
                title:d[0]
            })
        }
    }
});