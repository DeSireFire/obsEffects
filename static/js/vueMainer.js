// 将data单独分离分离出来
const caList = {
    effs:[
        {id: 0, name: "樱花飘落", pathName:"sakura", intro: ["樱花花瓣漫天飞舞特效,","后退网页即可推出。"], tag:"全局特效"},
        {id: 1, name: "跳跳糖", pathName:"particleCandy", intro: ["粒子背景动画,","后退网页即可推出。"], tag:"全局特效"},
        {id: 2, name: "雷雨", pathName:"rain", intro: ["下雨打雷的特效,","后退网页即可推出。"], tag:"全局特效"},
        {id: 3, name: "鼠标闪电", pathName:"lightning", intro: ["伴随鼠标点击并移动,","会出现闪电效果。"], tag:"全局特效"},
        {id: 4, name: "西瓜时钟", pathName:"watermelonClock", intro: ["🍉模样的时钟,","可作为局部装饰"], tag:"局部特效"},
        {id: 5, name: "彩色樱花筒", pathName:"sakuraColor", intro: ["彩色樱花花纹动画,","全部背景装饰"], tag:"全局特效"},
        {id: 6, name: "彩跃变字", pathName:"colorfont", intro: ["彩色跳跃过渡的文字效果,","为局部装饰"], tag:"局部特效"},
        {id: 7, name: "彩色点阵时钟", pathName:"canvasClock", intro: ["点阵数字时钟,","可根据自定义设置颜色的时间装饰。"], tag:"局部特效"},
        // {id: 6, name: "玻珠陨落", pathName:"fallingball", intro: ["彩色球体重力掉落,","全部背景装饰"], tag:"全局特效"},
    ],
    readme:"",
    effectName:"",
};

const moeCa = new Vue({
    el:"#moe-ca",// 约等于 原生JS的document.querySelector("#moe");
    data: caList,
    // created:{},
    methods:{
        toReadme(name,value) {
            console.log(name,value);
            // this.effectName = name
            this.readme = this.readFile(value)
            this.effectName = name
        },
        readFile(filePath) {
            // 创建一个新的xhr对象
            let xhr = null
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest()
            } else {
                // eslint-disable-next-line
                xhr = new ActiveXObject('Microsoft.XMLHTTP')
            }
            const okStatus = document.location.protocol === 'file' ? 0 : 200
            xhr.open('GET', filePath, false)
            xhr.overrideMimeType('text/html;charset=utf-8')
            xhr.send(null)
            return xhr.status === okStatus ? xhr.responseText : null
        },
    },
})