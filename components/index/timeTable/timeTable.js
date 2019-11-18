Component({
    properties: {
        course: {
            type: Array,
            observer:'calc'
        }
    },
    data: {
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        courseArray:[
            [],[],[],[],[],[],[],[]
        ]
    },
    methods:{
        calc(){
            
        }
    },
    ready:function(){
        let that=this;
        let d=that.data.courseArray;
        that.properties.course.forEach(item=>{
            d[item.day-1].push(item);
        })
        console.log(d)
    }
});