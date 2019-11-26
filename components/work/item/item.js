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
            d.forEach(item=>{
                item.replace(/[\r\n]/g,"")
            });
            this.setData({
                content:d
            })
        },
        routergo(){
            let that=this;
            if(that.properties.work.taskId==undefined)return;
            qq.navigateTo({
                url:`/pages/index/detail/detail?id=${that.properties.work.taskId}`
            })
        },
    },
    ready: function () {
    }
});