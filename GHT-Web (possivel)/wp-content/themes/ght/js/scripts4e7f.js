jQuery( document ).ready(function($){

	var example = $('#menu-main-nav').superfish({
					delay:         100,
					speed:         'fast',           // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
					speedOut:      'fast'
	});

	// Slider
	var slider = $("#slider").bxSlider({
			mode: 'fade',
			responsive: true,
			controls: false,
			infiniteLoop: true,								
			pager: true,
			auto: true,
			speed: 1000,
			pause: 5000
	});
	
	// Contact Form
    var options = { 
        target:        '#result',   // target element(s) to be updated with server response 
        beforeSubmit:  showPreloader,  // pre-submit callback 
        success:       Response // post-submit callback 
    }; 	
	function Response()  {
		$("#sending").hide(); 
	} 
	function showPreloader() { 
		$("#sending").show();
	}	
	$('#contact_form').ajaxForm(options);	
	
});


