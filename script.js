$(function(){

  $(window).scroll(function (){
    $('.container').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
    });
});


setInterval(function(){
 
  var bgImage = $('.first').css('backgroundImage');

  if(bgImage.lastIndexOf("/20.jpg") >-1){
    $('.first').css('background-image', 'url(../flower/22.jpg)');
    $('.first h1').html('敬う');
    $('.first p').html('ー大切な人への”変わらぬ”想いー');
  }
  else if(bgImage.lastIndexOf("/22.jpg") >-1){
    $('.first').css('background-image', 'url(../flower/05.jpg)');
    $('.first h1').html('彩る');
    $('.first p').html('ー花を愛でる心の余裕ー');
  }
 else if(bgImage.lastIndexOf("/05.jpg") >-1){
    $('.first').css('background-image', 'url(../flower/20.jpg)');
    $('.first h1').html('祝う');
    $('.first p').html('ー大切な人を大切に扱う生き方ー');
  }
},3000);


$('.menu-icon').click(function(){
  $('.menu').toggle();
});




});
