$(".navbar__toggle").click(function(){$(this).toggleClass("active")}),$(".top-slider").swipe({swipe:function(e,l,t,i,s,a){"left"==l&&$(this).carousel("next"),"right"==l&&$(this).carousel("prev")},allowPageScroll:"vertical"});