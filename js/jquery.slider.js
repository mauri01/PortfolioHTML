$(function(){

	jQuery.fn.slider=function(options){
		//configuracion inicial time: tiempo
		var settings = jQuery.extend({
			time : 3000

		}, options);

		//declaracion de la funcion
		this.each(function(){
			var $slider = $(this);
			var n = $(this).children().size();
			var i = 0;

			//repetir la fc cada n tiempo
			setInterval(function(){
				i= (i + 1)% n;
				$slider.children().hide();
				$slider.children().eq(i).fadeIn();

			}, settings.time);
		});
	}

});