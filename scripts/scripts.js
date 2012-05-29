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





  
$(function(){

$('.controls li').click(function() {
   
      //get the class of whatever is clicked on
   var my_value=  $(this).attr('class'); 
      //hide all slides that don't have initial class
 $('#slide_wrap .slide').removeClass('show');
      //find the relating class within the slides
 
      //add show to the relating class that was clicked on
	$('#slide_wrap .'+my_value).addClass('show'); 
//alert(target_slide);
         
       
          
          

    
          
    });

});



	$('#clickme').click(function() {
    $('span',this).toggle();
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
