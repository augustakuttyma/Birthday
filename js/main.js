jQuery(function($) {
	$.fn.snow();
	  $('.body1').sakura();
	var vid = document.getElementById("myVideo");
	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
		
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	
	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});
$('.videolink').on('click',function(){vid.play()});
	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   100;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});
	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();
	
	// Progress Bar
	$('#about-us').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
			});
			$(this).unbind('inview');
		}
	});

	//Countdown
	$('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	// Portfolio Single View
	$('#portfolio').on('click','.folio-read-more',function(event){
		event.preventDefault();
		var link = $(this).data('single_url');
		var full_url = '#portfolio-single-wrap',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_top = $("#"+trgt).offset().top;

		$('html, body').animate({scrollTop:target_top}, 600);
		$('#portfolio-single').slideUp(500, function(){
			$(this).load(link,function(){
				$(this).slideDown(500);
			});
		});
	});

	// Close Portfolio Single View
	$('#portfolio-single-wrap').on('click', '.close-folio-item',function(event) {
		event.preventDefault();
		var full_url = '#portfolio',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_offset = $("#"+trgt).offset(),
		target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 600);
		$("#portfolio-single").slideUp(500);
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
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	function ezBSAlert (options) {
		var deferredObject = $.Deferred();
		var defaults = {
			type: "alert", //alert, prompt,confirm 
			modalSize: 'modal-sm', //modal-sm, modal-lg
			okButtonText: 'Ok',
			cancelButtonText: 'Cancel',
			yesButtonText: 'Yes',
			noButtonText: 'No',
			headerText: 'Answer Required',
			messageText: 'Message',
			alertType: 'default', //default, primary, success, info, warning, danger
			inputFieldType: 'text', //could ask for number,email,etc
		}
		$.extend(defaults, options);
	  
		var _show = function(){
			var headClass = "navbar-default";
			switch (defaults.alertType) {
				case "primary":
					headClass = "alert-primary";
					break;
				case "success":
					headClass = "alert-success";
					break;
				case "info":
					headClass = "alert-info";
					break;
				case "warning":
					headClass = "alert-warning";
					break;
				case "danger":
					headClass = "alert-danger";
					break;
	        }
			$('BODY').append(
				'<div id="ezAlerts" class="modal fade">' +
				'<div class="modal-dialog" class="' + defaults.modalSize + '">' +
				'<div class="modal-content">' +
				'<div id="ezAlerts-header" class="modal-header ' + headClass + '">' +
				'<button id="close-button" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
				'<h4 id="ezAlerts-title" class="modal-title">Modal title</h4>' +
				'</div>' +
				'<div id="ezAlerts-body" class="modal-body">' +
				'<div id="ezAlerts-message" ></div>' +
				'</div>' +
				'<div id="ezAlerts-footer" class="modal-footer">' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>'
			);

			$('.modal-header').css({
				'padding': '15px 15px',
				'-webkit-border-top-left-radius': '5px',
				'-webkit-border-top-right-radius': '5px',
				'-moz-border-radius-topleft': '5px',
				'-moz-border-radius-topright': '5px',
				'border-top-left-radius': '5px',
				'border-top-right-radius': '5px'
			});
	    
			$('#ezAlerts-title').text(defaults.headerText);
			$('#ezAlerts-message').html(defaults.messageText);

			var keyb = "false", backd = "static";
			var calbackParam = "";
			switch (defaults.type) {
				case 'alert':
					keyb = "true";
					backd = "true";
					$('#ezAlerts-footer').html('<button class="btn btn-' + defaults.alertType + '">' + defaults.okButtonText + '</button>').on('click', ".btn", function () {
						calbackParam = true;
						$('#ezAlerts').modal('hide');
					});
					break;
				case 'confirm':
					var btnhtml = '<button id="ezok-btn" class="btn btn-primary">' + defaults.yesButtonText + '</button>';
					if (defaults.noButtonText && defaults.noButtonText.length > 0) {
						btnhtml += '<button id="ezclose-btn" class="btn btn-default">' + defaults.noButtonText + '</button>';
					}
					$('#ezAlerts-footer').html(btnhtml).on('click', 'button', function (e) {
							if (e.target.id === 'ezok-btn') {
								calbackParam = true;
								$('#ezAlerts').modal('hide');
							} else if (e.target.id === 'ezclose-btn') {
								calbackParam = false;
								$('#ezAlerts').modal('hide');
							}
						});
					break;
				case 'prompt':
					$('#ezAlerts-message').html(defaults.messageText + '<br /><br /><div class="form-group"><input type="' + defaults.inputFieldType + '" class="form-control" id="prompt" /></div>');
					$('#ezAlerts-footer').html('<button class="btn btn-primary">' + defaults.okButtonText + '</button>').on('click', ".btn", function () {
						calbackParam = $('#prompt').val();
						$('#ezAlerts').modal('hide');
					});
					break;
			}
	   
			$('#ezAlerts').modal({ 
	          show: false, 
	          backdrop: backd, 
	          keyboard: keyb 
	        }).on('hidden.bs.modal', function (e) {
				$('#ezAlerts').remove();
				deferredObject.resolve(calbackParam);
			}).on('shown.bs.modal', function (e) {
				if ($('#prompt').length > 0) {
					$('#prompt').focus();
				}
			}).modal('show');
		}
	    
	  _show();  
	  return deferredObject.promise();    
	}





	$(document).ready(function(){
	  

	  $("#11").on("click", function(event){
		  if($('#11 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "In which place you accepted my love?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="Chettinad Hospital")
			    		{
			    		$('#11 a').attr('href','images/portfolio/11.png');
			    		$('#11 a').attr('data-lightbox','portfolio');
			    		$('#a').trigger('click');
			    		$('#11 a').removeAttr('href');
			    		$('#11 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });   
	  
	  $("#21").on("click", function(event){
		  if($('#21 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "Which juice we had after you accepted my love?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="Watermelon")
			    		{
			    		$('#21 a').attr('href','images/portfolio/21.png');
			    		$('#21 a').attr('data-lightbox','portfolio');
			    		$('#a2').trigger('click');
			    		$('#21 a').removeAttr('href');
			    		$('#21 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });
	  $("#31").on("click", function(event){
		  if($('#31 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "Our love anniversary Date(dd/mm/yyyy)?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="15/07/2012")
			    		{
			    		$('#31 a').attr('href','images/portfolio/31.png');
			    		$('#31 a').attr('data-lightbox','portfolio');
			    		$('#a3').trigger('click');
			    		$('#31 a').removeAttr('href');
			    		$('#31 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });
	  $("#41").on("click", function(event){
		  if($('#41 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "What is my bike number(last 4 digits)?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="9498")
			    		{
			    		$('#41 a').attr('href','images/portfolio/41.png');
			    		$('#41 a').attr('data-lightbox','portfolio');
			    		$('#a4').trigger('click');
			    		$('#41 a').removeAttr('href');
			    		$('#41 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });
	  $("#51").on("click", function(event){
		  if($('#51 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "Which ice cream you like?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="Blueberry")
			    		{
			    		$('#51 a').attr('href','images/portfolio/51.png');
			    		$('#51 a').attr('data-lightbox','portfolio');
			    		$('#a5').trigger('click');
			    		$('#51 a').removeAttr('href');
			    		$('#51 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });
	  $("#61").on("click", function(event){
		  if($('#61 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "In which month i proposed you first?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="August")
			    		{
			    		$('#61 a').attr('href','images/portfolio/61.png');
			    		$('#61 a').attr('data-lightbox','portfolio');
			    		$('#a6').trigger('click');
			    		$('#61 a').removeAttr('href');
			    		$('#61 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });
	  $("#71").on("click", function(event){
		  if($('#71 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "What is the shirt color i gave you?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="Brown")
			    		{
			    		$('#71 a').attr('href','images/portfolio/71.png');
			    		$('#71 a').attr('data-lightbox','portfolio');
			    		$('#a7').trigger('click');
			    		$('#71 a').removeAttr('href');
			    		$('#71 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });
	  $("#81").on("click", function(event){
		  if($('#81 a').attr('href')==undefined)
			  {
			  ezBSAlert({
			      type: "prompt",
			      messageText: "Which car you want to buy in future?",
			      alertType: "primary"
			    }).done(function (e) {
			    	if(e=="Jaquar")
			    		{
			    		$('#81 a').attr('href','images/portfolio/81.png');
			    		$('#81 a').attr('data-lightbox','portfolio');
			    		$('#a8').trigger('click');
			    		$('#81 a').removeAttr('href');
			    		$('#81 a').removeAttr('data-lightbox');
			    		}
			    	
			    	else
			    		{
			    		ezBSAlert({
			    	        messageText: "Wrong <p><img src='images/wrong.png'></img></p>",
			    	        alertType: "danger"
			    		});
			    		}
			    });
			  }
	   
	  });
	});
});

