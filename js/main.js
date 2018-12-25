jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});

		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});


	//Scroll function back-to-top
	 scroll();
	function scroll(){
	  //Scroll function
	  	$(".scroll").click(function(event){
	  		event.preventDefault();
	  		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	  	});

	    //back to top button function
	   $('body').prepend('<a href="#header" class="back-to-top scroll" aria-label="back-to-top"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>');

	    $(window).scroll(function(){
	      if($(window).scrollTop() > 400){
	        $('a.back-to-top').fadeIn("fast");
	      }else{
	        $('a.back-to-top').fadeOut("fast");
	      }
	    })

	    $('a.back-to-top').click(function(){
	      $('html,body').animate({
	        scrollTop: 0
	      }, 1000);
	      return false;
	    });

	}//End of Scroll() function


});
