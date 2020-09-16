jQuery(function($){
    $('.readme').click(function(){
        let mdc = $('#markdown-content').attr('data-readme');
        console.log(mdc);
        if (mdc)
        {
            // document.getElementById('markdown-content').innerHTML = marked(mdc);
            $("#markdown-content").html(marked(mdc));
        } else {
            $("#markdown-content").html(marked("该插件暂时为撰写说明文档."));
        }
    })
});