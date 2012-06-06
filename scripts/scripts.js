$(document).ready(function(){
	$("img.contactBubble").css("opacity", 0);

	$("img.contactBubble").hover(function(){
		$(this).stop().fadeTo("slow", 1.0); 
	},function(){
   		$(this).stop().fadeTo("slow", 0.0); 
	});
});




$(document).ready(function() {
	$('#clickme').click(function() {
    $('div',this).toggle();
});
});



$(document).ready(function() {
$(".hide-wrapper #clickme").click(function () {
     var parent_target = $(this).parents('.hide-wrapper');
     if ($(parent_target).hasClass('active')) {
          $(".house", parent_target).slideUp(200);
          $(parent_target).removeClass('active');
     } else {
          $(".house", parent_target).slideDown(200);
          $(parent_target).addClass('active');     }
});  
});

//testimonial slide show
$(document).ready(function() {
$('#slideshow').cycle({
	fx: 'fade',
	speed: 'slow',
	timeout: 5000,
	pager: '#slideNav',
	slideExpr: '.hide-wrapper'

});  
});



