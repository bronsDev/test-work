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
      yPos = - ((scrollTop - bgOffset) / speed) - $backgroundObj.data('pos'); 
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    }); 
  }); 


  $fwindow.trigger('scroll');
};

parallaxIt();

//popup-form

	function popupFormOpen() {
		$('.js-popup-form').fadeIn(300)
		$('.js-popup-form__form').animate({
			'top': '50%'
		}, 150)
		$('body').css('overflow', 'hidden');
	}
	function popupFormClose() {
		$('.js-popup-form').fadeOut(300)
		$('.js-popup-form__form').animate({
			'top': '20%'
		}, 150)
		$('body').css('overflow', 'visible');
	}
	$('.js-popup-form-open').on('click', function(e) {
		e.preventDefault();
		popupFormOpen();
		$('body').on('click', function(e) {
			if($(e.target).hasClass('js-popup-form') || $(e.target).hasClass('js-popup-form-close')) {
				popupFormClose()
			}

		})
	});
	$('.js-popup-form__send').on('click', function(e) {
		e.preventDefault();
		////ajax and validation
		
		//success
		
		$('.popup-form__show-form').fadeOut(300, function() {
			$('.popup-form__success').fadeIn(300);
		})

		
	})






//slider init

$('.examples__slider').bxSlider({
	pager: false,
});

// yaMap

    ymaps.ready(init);

        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [53.936386, 27.433336],
                zoom: 15
            }); 
            
            myPlacemark = new ymaps.Placemark([53.936386, 27.433336], {
                balloonContent: 'Ул. Вязынская, д.8 Минск, Беларусь'
            }, {
            	iconLayout: 'default#image',
		        iconImageHref: 'http://serovw.bget.ru/img/baloon.png',
		        iconImageSize: [50, 50],
		        iconOffset: [-20, -10],
		        iconImageOffset: [-3, -42]
            });
            
            myMap.geoObjects.add(myPlacemark);
    }



});
