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
	

});