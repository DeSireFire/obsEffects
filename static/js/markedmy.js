jQuery(function($){
    $('.readme').click(function(){
        let mdc = $('#markdown-content').attr('data-readme');
        // document.getElementById('markdown-content').innerHTML = marked(mdc);
        $("#markdown-content").html(marked(mdc));
    })
});