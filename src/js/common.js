head.ready(function(){

	// detect scroll (for header)
	function fixedHeader() {
		if(!$(window).scrollTop() == 0) {
			$('.header').addClass('is-fixed');
		} else {
			$('.header').removeClass('is-fixed');
		}
	}
	fixedHeader();
	$(window).scroll(function(){
    	fixedHeader();
  	});

// // Clear placeholder
// 	(function() {
// 		$('input,textarea').focus(function(){
// 				$(this).data('placeholder',$(this).attr('placeholder'))
// 				$(this).attr('placeholder','');
// 		});
// 		$('input,textarea').blur(function(){
// 			$(this).attr('placeholder',$(this).data('placeholder'));
// 		});
// 	}());

// // ScrollTo
// 	$(function(){
// 	    $('.main-nav').onePageNav({
// 			filter: ':not(.external)',
// 			scrollThreshold: 0.25,
// 			scrollSpeed: 1200,
// 			easing: 'swing',
// 			scrollOffset: 38
// 		});
// 	});

// // js-inview
// 	$('.js-inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
// 		if (isInView) {
// 				if (visiblePartY == 'top') {
// 				// top part of element is visible
// 			} else if (visiblePartY == 'bottom') {
// 				// bottom part of element is visible
// 			} else {
// 				// whole part of element is visible
// 			}
// 		} else {
// 			// element has gone out of viewport
// 		}
// 	});

// // WOW animation
// 	new WOW().init();



// // 60fps scrolling
// 	var body = document.body,
// 	timer;
// 	window.addEventListener('scroll', function() {
// 		clearTimeout(timer);
// 		if(!body.classList.contains('disable-hover')) {
// 			body.classList.add('disable-hover')
// 		}
// 		timer = setTimeout(function(){
// 			body.classList.remove('disable-hover')
// 		}, 250);
// 	}, false);
	
	
});