var util = require("../../utils/util.js");
Component({
  data: {
    thisWeek: 0,
    todayCourse: [],
    course: [],
    index: 0,
    work: [

    ],
    today: {

    },
    weather: {

    }
  },
  methods: {
    sortCourse: function () {
      let that = this;
      let d = that.data.course;
      let arr = [[], [], [], [], [], [], []];
      d.forEach(item => {
        arr[item.day - 1].push(item);
      })
      that.setData({
        course: arr
      })
    },
    getDate: function () {
      let time = util.formatDate(new Date());
      let date = util.getDates(1, time);
      console.log(date[0])
      this.setData({
        today: date[0]
      })
    },
    getWhether: function () {
      let that = this;
      qq.request({
        url: 'http://wthrcdn.etouch.cn/weather_mini?city=福州',
        success: function (res) {
          let data = res.data.data;
          that.setData({
            weather: {
              city: data.city,
              high: data.forecast[0].high,
              low: data.forecast[0].low,
              type: data.forecast[0].type,
              now: data.wendu
            }
          })
        }
      })
    },
    more: function () {
      let that = this;
      that.data.index++;
      qq.request({
        url: 'http://39.108.118.180:8080/tasks/id',
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'sessionId': qq.getStorageSync('sessionId')
        },
        data: {
          type: 0,
          offset: that.data.index*3,
          limit: 3
        },
        success(res) {
          let d = res.data.data;
          let l = d.length;
          if (l == 0) { that.data.index--;}
          else {
            let arr = (that.data.work).concat(res.data.data);
            that.setData({
              work: arr
            })
          }
        }
      })
    },
  },
  ready: function () {
    var that = this;
    that.getDate();
    that.getWhether();
    let login = new Promise((resolve, reject) => {
      qq.login({
        success: resolve
      })
    });

    login.then(res => {
      if (res.code) {
        // 发起网络请求
        qq.request({
          url: 'http://39.108.118.180:8080/session',
          method: "POST",
          data: {
            code: res.code
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function (data) {
            let res = data.data.data;
            qq.setStorageSync('sessionId', res.sessionId);
            qq.setStorageSync('openId', res.openId);
            if (!res.isLogin) {
              qq.request({
                url: 'http://39.108.118.180:8080/user',
                method: "PUT",
                header: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  'sessionId': qq.getStorageSync('sessionId')
                },
                data: {
                  account: '031702635',
                  pwd: '2375468369zh'
                }
              })
            }
            that.setData({
              thisWeek: res.curWeek,
            })
            qq.request({
              url: 'http://39.108.118.180:8080/courses/week',
              header: {
                "Content-Type": "application/x-www-form-urlencoded",
                'sessionId': qq.getStorageSync('sessionId')
              },
              success: function (res) {
                let course = res.data.data;
                that.setData({
                  course: course
                });
                that.sortCourse()
              }
            })
            qq.request({
              url: 'http://39.108.118.180:8080/tasks/id',
              header: {
                "Content-Type": "application/x-www-form-urlencoded",
                'sessionId': qq.getStorageSync('sessionId')
              },
              data: {
                type: 0,
                offset: 0,
                limit: 3
              },
              success(res) {
                let d = res.data.data;
                let l = d.length;
                for (let i = 0; i < 3 - l; i++) {
                  d.push({
                    content: '请于作业模块中添加作业',
                    theme: ' '
                  });
                }
                that.setData({
                  work: res.data.data
                })
                console.log(that.data.work)
              }
            })
          }
        }

        )
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    })
  },
})
