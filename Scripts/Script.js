// Загрузка страницы
jQuery('.loadreveal').addClass('reveal');
jQuery('#loadscreen').stop().animate( { opacity: 0 }, 200, function() {
	jQuery('body').removeClass('loading');
	jQuery(this).hide();
});

// Отображение меню в мобильной версии
$(document).ready(function($) {
	$('.SideBar .Button').on('click', function(event) {
		event.preventDefault();
		$('.SideBar .Menu').slideToggle(300);
	});
});