Component({
    data: {
        selected: 0,
        selectedColor: "red",
        list: [{
            pagePath: "/pages/index/index",
            text: "首页",
            iconPath: "../assets/index.png",
            selectedIconPath: "../assets/index-active.png"
        },
        {
            pagePath: "/pages/index/index",
            iconPath: "../assets/add.png",
            selectedIconPath: "../assets/add.png"
        },
        {
            pagePath: "/pages/logs/logs",
            text: "我的",
            iconPath: "../assets/my.png",
            selectedIconPath: "../assets/my-active.png"
        }]
    },
    attached() {
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            qq.switchTab({ url })
            let index;
            switch(url){
                case '/pages/index/index':index=0;break;
                case '/pages/logs/logs':index=2;break;
            }
            this.setData({
                selected: index
            })
        }
    }
})