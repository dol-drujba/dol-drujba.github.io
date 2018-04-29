// Анимация при загрузке страницы
jQuery('.loadreveal').addClass('reveal');
jQuery('#loadscreen').stop().animate( { opacity: 0 }, 200, function() {
	jQuery('body').removeClass('loading');
	jQuery(this).hide();
});

$(document).ready(function($) {

	// -- Отображение Menu и Filter в мобильной версии
	$('#Menu').on('click', function(event) {
		event.preventDefault();

		$('.SideBar .Menu').slideToggle(300);		
		if ($('.SideBar .Filter').is(":hidden")) { }
		else { $('.SideBar .Filter').slideToggle(300); }
        
	});

	$('#Filter').on('click', function(event) {
		event.preventDefault();

		$('.SideBar .Filter').slideToggle(300);
        if ($('.SideBar .Menu').is(":hidden")) { }
		else { $('.SideBar .Menu').slideToggle(300); }
	});

	// -- Работа с Gallery (Isotope.js)
	var $Gallery = jQuery('.Gallery');
	if ( $Gallery.length > 0 ) {

		$Gallery.each( function(index, element) {
			var $Items = $(element).find('.Item');
		
			// set masonry layout
			$(element).isotope({
				masonry: { columnWidth: $(element).find('.Item')[0] },
				itemSelector: '.Item'
			});
			$(element).isotope('layout');
				
			// Фильтрация (One / Two / Three)
			jQuery('.Gallery-Filter li a').on('click', function(){
				jQuery('.Gallery-Filter li a').removeClass('Active');
				jQuery(this).addClass('Active');
				var selector = jQuery(this).attr('data-filter');
				$Gallery.isotope({ filter: selector });
				return false;
			});

			// Фильтрация (One / Two / Three) - Мобильное меню
			jQuery('#Period li a').on('click', function(){
				jQuery('#Period li a').removeClass('Active');
				jQuery(this).addClass('Active');
				var selector = jQuery(this).attr('data-filter');
				$Gallery.isotope({ filter: selector });
				return false;
			});

			// Изменение количества столбцов
			jQuery('.Gallery-Sizing .Button').on('click', function(){
				jQuery('.Gallery-Sizing .Button').removeClass('Active');
				jQuery(this).toggleClass('Active');

				$Items.removeClass('column-3');
				$Items.removeClass('column-4');
				$Items.removeClass('column-5');
				$Items.toggleClass(jQuery(this).closest('a').attr('class'));
				$Gallery.isotope('layout');
			});
		
		});
	}

	// -- Работа с модальными окнами (Magnific-Popup.js / Magnific-Popup.css)
	jQuery('.Gallery').magnificPopup({
		delegate: 'a.popup',
	  type: 'image',
	  tLoading: 'Загрузка изображения #%curr% ...',
	  gallery: {
	  	enabled: true,
	  	tPrev: 'Назад',
	  	tNext: 'Вперёд',
	  	tCounter: 'Изображение %curr% из %total%'
	  },
	  image: {
	  	cursor: 'mfp-zoom-out-cur',
	  	tError: 'Не удалось загрузить изображение!',
	  	titleSrc: 'alt'

	  	/*
	  	markup: '<div class="mfp-figure">' +
        				'<div class="mfp-close"></div>' +
        				'<div class="mfp-img"></div>' +
        				'<div class="mfp-bottom-bar">' +
          				'<div class="mfp-title"></div>' +
          				'<div class="mfp-counter"></div>' +
        				'</div>' +
      				'</div>'
      */
      				
	  },
	  mainClass: 'mfp-with-zoom',
	  zoom: {
	    enabled: true,
	    duration: 300,
	    easing: 'ease-in-out',
	    opener: function(openerElement) {
	      return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  }
	});

	// -- Smooth Move ----------------------------------------
	$(document).ready(function() {
    $(".Smooth-Move").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'), 
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1200);
  	});
	});
});