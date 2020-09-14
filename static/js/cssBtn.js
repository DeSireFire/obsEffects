jQuery(function($){
  $('.readme').click(function(){
    var buttonId = $(this).attr('data-modal-effect');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })

  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });
});