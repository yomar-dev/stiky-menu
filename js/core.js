$(document).ready(function(){
	var $menu = $('#menu');

	//Distancia del menú
	var topNav = $menu.offset().top;

	$(window).on('scroll', function(){
		//Posición del scroll
		var $scroll = $(window).scrollTop();

		if($scroll > topNav){
			$('#menu').addClass('stiky');
		}else{
			$('#menu').removeClass();
		}
		
	})
})