$(function() {
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

//popup-form

	function popupFormOpen() {
		$('.popup-form').fadeIn(300)
		$('.popup-form__form').animate({
			'top': '50%'
		}, 150)
		$('body').css('overflow', 'hidden');
	}
	function popupFormClose() {
		$('.popup-form').fadeOut(300)
		$('.popup-form__form').animate({
			'top': '20%'
		}, 150)
		$('body').css('overflow', 'visible');
	}
	$('.js-popup-form').on('click', function(e) {
		e.preventDefault();
		popupFormOpen();
		$('body').on('click', function(e) {
			if($(e.target).hasClass('popup-form') || $(e.target).hasClass('popup-form-close')) {
				popupFormClose()
			}

		})
	});

});


