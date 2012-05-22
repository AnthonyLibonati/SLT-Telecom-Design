
 $(function() {
// OPACITY OF BUTTON SET TO 0%
$(".contact_bubble").css("opacity","0");
 
// ON MOUSE OVER
$(".contact_bubble").hover(function () {
 
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 0%
$(this).stop().animate({
opacity: 0
}, "slow");
});
}); 

