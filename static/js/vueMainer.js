// 将data单独分离分离出来
const caList = {
    effs:[
        {id: 0, name: "樱花飘落",readme: "sakura/readme.md", intro: ["樱花花瓣漫天飞舞特效,","点击演示效果,","后退网页即可推出。"], tag:"全局特效", img:"effects/sakura/cover.png", demo:"sakura/index.html"},
        {id: 1, name: "跳跳糖",readme: "particleCandy/readme.md", intro: ["粒子背景动画,","点击演示效果,","后退网页即可推出。"], tag:"全局特效", img:"effects/particleCandy/cover.png", demo:"particleCandy/index.html"},
        {id: 2, name: "窗户玻璃雨滴",readme: "drip/readme.md", intro: ["雨滴特效,","点击演示效果,","后退网页即可推出。"], tag:"全局特效", img:"static/image/effect0.png", demo:"drip/index.html"},
    ],
    readme:"",
};

const moeCa = new Vue({
    el:"#moe-ca",// 约等于 原生JS的document.querySelector("#moe");
    data: caList,
    methods:{
        toReadme(valus,event) {
            console.log(valus,event);
            this.readme = this.readFile(valus)
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
    }
})