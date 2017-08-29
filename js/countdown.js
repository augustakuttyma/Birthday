$( document ).ready(function() {
	(function countdown(){   
		   
		   var launch_date = new Date (Date.parse("Aug 30, 2017 03:20:00 GMT +5:30"));
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
		   if(rest<=0)
			   {
			   $('.demo').fireworks({ sound: true, opacity: 0.5, width: '100%', height: '100%' });
				  $('#birthday').slideDown( "slow" );
				  audioElement.play();
				 $('#initial').hide();
				  $('#countdown').hide();
				 // $('#24').show();
				  //clearInterval(countTimerEmailName);
			   }
		     
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
		/*var dt=new Date();
		if( dt.getMinutes()==2)
			{
			  $('.demo').fireworks({ sound: true, opacity: 0.5, width: '100%', height: '100%' });
			  $('#cards').slideDown( "slow" );
			  audioElement.play();
			  $('#initial').hide();
			  $('#countdown').hide();
			  $('#24').show();
			  clearInterval(countTimerEmailName);
			}*/
	}
	 $.fn.snow();
	  $('.body').sakura();
	
});
