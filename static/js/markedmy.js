jQuery(function($){
    $('.readme').click(function(){
        let mdc = $('#markdown-content').attr('data-readme');
        let pathName = $('#markdown-content').attr('data-path-name');
        console.log(pathName)
        if (mdc)
        {
            // document.getElementById('markdown-content').innerHTML = marked(mdc);
            $("#markdown-content").html(getHref(marked(mdc),pathName));
            console.log(marked(mdc));
        } else {
            $("#markdown-content").html(marked("该插件暂时为撰写说明文档."));
        }
    })
});
function getHref(content,pathName){
    // <img src="images/3.jpg" class="b" alt="3asdf">把不一样地方用(.*?)替换，如下
    // .匹配的是非空字符*匹配任意数量?拒绝贪婪，匹配任意数量的非空字符，如果不加?，就会匹配到最后
    let reg = /<img(.*?)src="(.*?)"(.*?)>/g;
    let result = content.replace(reg,'<img$1src="effects/'+pathName+'/$2"$3>')
    return result
}