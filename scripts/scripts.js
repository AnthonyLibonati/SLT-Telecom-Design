$(document).ready(function(){




		
	$(document).ready(function() {
   $("a").click(function() {
     alert("Hello world!");
   });
 });



	$('#clickme').click(function() {
    $('div',this).toggle();
});

	



$(".hide-wrapper #clickme").click(function () {
     var parent_target = $(this).parents('.hide-wrapper');
     if ($(parent_target).hasClass('active')) {
          $(".house", parent_target).slideUp(200);
          $(parent_target).removeClass('active');
     } else {
          $(".house", parent_target).slideDown(200);
          $(parent_target).addClass('active');     }
});  

//testimonial slide show

$('#slideshow').cycle({
	fx: 'fade',
	speed: 'slow',
	timeout: 0,
	pager: '#slideNav',
	slideExpr: '.hide-wrapper'


});

});// end document ready
