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
    $('.first h1').html('HAPPNINESS WITH FLOWERS');
    $('.first p').html('いつもの暮らしにちょっとした彩を。');
  }
  else if(bgImage.lastIndexOf("/22.jpg") >-1){
    $('.first').css('background-image', 'url(../flower/05.jpg)');
    $('.first h1').html('SAMPLE OF SAMPLE');
    $('.first p').html('この文はサンプルです。');
  }
 else if(bgImage.lastIndexOf("/05.jpg") >-1){
    $('.first').css('background-image', 'url(../flower/20.jpg)');
    $('.first h1').html('BRING A SMILE');
    $('.first p').html('花で街に笑顔を。');
  }

},3000);





});
