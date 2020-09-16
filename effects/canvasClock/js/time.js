let RADIUS = 8,//定义圆半径
MarginTop = 60,//距离上面的位置
MarfinLeft = 30,//距离左边的位置
COLOR = 'rgb(255,192,203,0.8)';//球的颜色


window.onload = function() {
let canvas = document.getElementById('canvas');
canvas.width = '1024';//画布大小
canvas.height = '768';
let context = canvas.getContext('2d');

COLOR = getQueryVariable("color")

function getQueryVariable(variable){
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return('rgb(255,192,203,0.8)');
}

setInterval(function(){//定时器
    var d = new Date();
    var h = d.getHours(); 
    var m = d.getMinutes();
    var s = d.getSeconds();
    canvas.height = canvas.height;
    render(context,h,m,s);
},1000); 
}
function render(cxt,h,m,s) {//画球
renderDigit(MarfinLeft ,  MarginTop, parseInt(h/10) , cxt)
renderDigit(MarfinLeft+15*(RADIUS+1), MarginTop, parseInt(h%10), cxt)
renderDigit(MarfinLeft+30*(RADIUS+1), MarginTop, 10, cxt)
renderDigit(MarfinLeft+39*(RADIUS+1), MarginTop, parseInt(m/10) , cxt)
renderDigit(MarfinLeft+54*(RADIUS+1), MarginTop, parseInt(m%10) , cxt)
renderDigit(MarfinLeft+69*(RADIUS+1), MarginTop, 10, cxt)
renderDigit(MarfinLeft+78*(RADIUS+1), MarginTop, parseInt(s/10) , cxt)
renderDigit(MarfinLeft+93*(RADIUS+1), MarginTop, parseInt(s%10) , cxt)
}
function renderDigit(x, y, num, cxt) {//每个数字的画法
cxt.fillStyle=COLOR;
for(var i = 0; i < digit[num].length; i ++ ) {
    for(var j = 0; j < digit[i].length; j++ ) {
        if(digit[num][i][j] == 1) {
            cxt.beginPath();
            cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
            cxt.closePath();
            cxt.fill();
        }
    }
}

}