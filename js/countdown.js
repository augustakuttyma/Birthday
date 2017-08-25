$( document ).ready(function() {
	(function countdown(){   
		   
		   var launch_date = new Date (Date.parse("Sep 07, 2017 00:00:00 GMT +1"));
		   var now = new Date();
		   var days; var hours; var minutes; var seconds; var rest;
			
		   seconds = rest = Math.floor(((launch_date.getTime() - now.getTime()) / 1000));

		   days = zero (Math.floor(seconds / 86400));
		   seconds -= days * 86400;
					
		   hours = zero (Math.floor(seconds / 3600));
		   seconds -= hours * 3600;

		   minutes = zero (Math.floor(seconds / 60));
		   seconds -= minutes * 60;

		   seconds = zero (Math.floor(seconds));
		    
		   function zero(n){
		      return (n < 10 ? '0' : false) + n;  
		   }
		  
		   rest <= 0 ? days = hours = minutes = seconds = '00' : setTimeout(countdown, 1000);
		     
		   document.getElementById('countdown').innerHTML =
		      '<li ><div><span style="color:#fdd10a">' + days +'</span>day' + (days > 1 ? 's' : '') +'</div></li>'
		      +'<li><div><span style="color:#fe32fd">' + hours +'</span>hour' + (hours > 1 ? 's' : '') +'</div></li>'
		      +'<li><div><span style="color:#f11b19">' + minutes +'</span>minute' + (minutes > 1 ? 's' : '') +'</div></li>'
		      +'<li><div><span style="color:#5da31f">' + seconds +'</span>second' + (seconds > 1 ? 's' : '') +'</div></li>';
		})();
	 var audioElement = document.createElement('audio');
	    audioElement.setAttribute('src', 'audio/1_song.mp3');
	    
	$('a[rel=popover]').popover().click(function(e) {
		  e.preventDefault();
		  var open = $(this).attr('data-easein');
		  if (open == 'shake') {
		    $(this).next().velocity('callout.' + open);
		  } else if (open == 'pulse') {
		    $(this).next().velocity('callout.' + open);
		  } else if (open == 'tada') {
		    $(this).next().velocity('callout.' + open);
		  } else if (open == 'flash') {
		    $(this).next().velocity('callout.' + open);
		  } else if (open == 'bounce') {
		    $(this).next().velocity('callout.' + open);
		  } else if (open == 'swing') {
		    $(this).next().velocity('callout.' + open);
		  } else {
		    $(this).next().velocity('transition.' + open);
		  }

		});

		// add the animation to the modal
		$(".modal").each(function(index) {
		  $(this).on('show.bs.modal', function(e) {
		    var open = $(this).attr('data-easein');
		    if (open == 'shake') {
		      $('.modal-dialog').velocity('callout.' + open);
		    } else if (open == 'pulse') {
		      $('.modal-dialog').velocity('callout.' + open);
		    } else if (open == 'tada') {
		      $('.modal-dialog').velocity('callout.' + open);
		    } else if (open == 'flash') {
		      $('.modal-dialog').velocity('callout.' + open);
		    } else if (open == 'bounce') {
		      $('.modal-dialog').velocity('callout.' + open);
		    } else if (open == 'swing') {
		      $('.modal-dialog').velocity('callout.' + open);
		    } else {
		      $('.modal-dialog').velocity('transition.' + open);
		    }

		  });
		});

		$(".tiptext").mouseover(function() {
		    $(this).children(".description").show();
		}).mouseout(function() {
		    $(this).children(".description").hide();
		});
	var countTimerEmailName = setInterval(
            function ()
            {
            showFire();    
            }, 500);  
	function showFire()
	{
		var dt=new Date();
		if( dt.getMinutes()==2)
			{
			  $('.demo').fireworks({ sound: true, opacity: 0.5, width: '100%', height: '100%' });
			  $('#cards').slideDown( "slow" );
			  audioElement.play();
			  $('#initial').hide();
			  $('#countdown').hide();
			  $('#24').show();
			  clearInterval(countTimerEmailName);
			}
	}
	var Countdown = {
			  
			  // Backbone-like structure
			  $el: $('.countdown'),
			  
			  // Params
			  countdown_interval: null,
			  total_seconds     : 0,
			  
			  // Initialize the countdown  
			  init: function() {
				  $.fn.snow();
				  $('body').sakura();
				 
				  var date1 = new Date();    
				    var date2 = new Date("2017/09/07 00:00:00");
				    //Customise date2 for your required future time

				    var diff = (date2 - date1)/1000;
				    var diff = Math.abs(Math.floor(diff));

				    var days = Math.floor(diff/(24*60*60));
				    var leftSec = diff - days * 24*60*60;

				    var hrs = Math.floor(leftSec/(60*60));
				    var leftSec = leftSec - hrs * 60*60;

				    var min = Math.floor(leftSec/(60));
				    var leftSec = leftSec - min * 60;
			    $(".hours").attr("data-init-value",hrs);
			    $(".min").attr("data-init-value",min);
			    $(".sec").attr("data-init-value",leftSec);
			    // DOM
					this.$ = {
			    	hours  : this.$el.find('.bloc-time.hours .figure'),
			    	minutes: this.$el.find('.bloc-time.min .figure'),
			    	seconds: this.$el.find('.bloc-time.sec .figure')
			   	};

			    // Init countdown values
			    this.values = {
				      hours  : this.$.hours.parent().attr('data-init-value'),
			        minutes: this.$.minutes.parent().attr('data-init-value'),
			        seconds: this.$.seconds.parent().attr('data-init-value'),
			    };
			    
			    // Initialize total seconds
			    this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

			    // Animate countdown to the end 
			    this.count();    
			  },
			  
			  count: function() {
			    
			    var that    = this,
			        $hour_1 = this.$.hours.eq(0),
			        $hour_2 = this.$.hours.eq(1),
			        $min_1  = this.$.minutes.eq(0),
			        $min_2  = this.$.minutes.eq(1),
			        $sec_1  = this.$.seconds.eq(0),
			        $sec_2  = this.$.seconds.eq(1);
			    
			        this.countdown_interval = setInterval(function() {

			        if(that.total_seconds > 0) {

			            --that.values.seconds;              

			            if(that.values.minutes >= 0 && that.values.seconds < 0) {

			                that.values.seconds = 59;
			                --that.values.minutes;
			            }

			            if(that.values.hours >= 0 && that.values.minutes < 0) {

			                that.values.minutes = 59;
			                --that.values.hours;
			            }

			            // Update DOM values
			            // Hours
			            that.checkHour(that.values.hours, $hour_1, $hour_2);

			            // Minutes
			            that.checkHour(that.values.minutes, $min_1, $min_2);

			            // Seconds
			            that.checkHour(that.values.seconds, $sec_1, $sec_2);

			            --that.total_seconds;
			        }
			        else {
			            clearInterval(that.countdown_interval);
			        }
			    }, 1000);    
			  },
			  
			  animateFigure: function($el, value) {
			    
			     var that         = this,
					     $top         = $el.find('.top'),
			         $bottom      = $el.find('.bottom'),
			         $back_top    = $el.find('.top-back'),
			         $back_bottom = $el.find('.bottom-back');

			    // Before we begin, change the back value
			    $back_top.find('span').html(value);

			    // Also change the back bottom value
			    $back_bottom.find('span').html(value);

			    // Then animate
			    TweenMax.to($top, 0.8, {
			        rotationX           : '-180deg',
			        transformPerspective: 300,
				      ease                : Quart.easeOut,
			        onComplete          : function() {

			            $top.html(value);

			            $bottom.html(value);

			            TweenMax.set($top, { rotationX: 0 });
			        }
			    });

			    TweenMax.to($back_top, 0.8, { 
			        rotationX           : 0,
			        transformPerspective: 300,
				      ease                : Quart.easeOut, 
			        clearProps          : 'all' 
			    });    
			  },
			  
			  checkHour: function(value, $el_1, $el_2) {
			    
			    var val_1       = value.toString().charAt(0),
			        val_2       = value.toString().charAt(1),
			        fig_1_value = $el_1.find('.top').html(),
			        fig_2_value = $el_2.find('.top').html();

			    if(value >= 10) {

			        // Animate only if the figure has changed
			        if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
			        if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
			    }
			    else {

			        // If we are under 10, replace first figure with 0
			        if(fig_1_value !== '0') this.animateFigure($el_1, 0);
			        if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
			    }    
			  }
			};

			// Let's go !
			Countdown.init();
});
