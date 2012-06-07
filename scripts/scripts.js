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
	timeout: 7000,
	pager: '#slideNav',
	slideExpr: '.hide-wrapper'

});  
});



$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

});


$(document).ready(function() {

    

    $('a[href=#top]').click(function(){

        $('html, body').animate({scrollTop:0}, 'slow');

        return false;

    });

 

});



