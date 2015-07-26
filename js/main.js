
$(function() {

smoothScroll.init();

//paralax
function parallaxIt() {


  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }); 


  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    $fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed); 
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    }); 
  }); 


  $fwindow.trigger('scroll');
};

parallaxIt();

});


