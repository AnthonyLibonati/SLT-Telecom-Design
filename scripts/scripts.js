$(document).ready(function(){



 $(function() {
// OPACITY OF BUTTON SET TO 0%
$(".contact_bubble").css("opacity","0");
 
// ON MOUSE OVER
$(".contact_bubble").hover(function () {
 
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "200");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 0%
$(this).stop().animate({
opacity: 0
}, "200");
});
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

});// end document ready
