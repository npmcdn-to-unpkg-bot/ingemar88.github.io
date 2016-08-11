/*$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
*/
// Вкладки bootstrap
/*// li > a data-toggle="tab" или data-toggle="pill" href="#на id из tab-pane" Включение области навигации, вкладок через JavaScript (каждая вкладка требует индивидуальной активации):

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
//Эфект угасания .tab-pane.fade Вы можете индивидуально активировать вкладку несколько способов:

$('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab a:first').tab('show') // Select first tab
$('#myTab a:last').tab('show') // Select last tab
$('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)
*/

/*// Тултипы bootstrap <a href="" data-toggle='tooltip' title='Some text' data-placement='top'>
$('#example').tooltip(options)*/

/*// Использование через <button type="button" data-toggle="modal" data-target="#myModalWindowID">Запустить модаль</button> или через
$('#myModal').modal(options)*/

/*//Dropdown <a data-toggle="dropdown" href="#">Dropdown trigger</a> <ul class="dropdown-menu"> или через
$('.dropdown-toggle').dropdown()
*/


/*//Alerts bootstrap <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
$(".alert").alert()*/


/*//Аккордеон Bootstrap  Убедитесь, что добавили класс collapse элементов для свертывания <button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#demo"> <div id="demo" class="collapse in">...</div> или через js
$('.collapse').collapse()

*/

//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$(document).ready(function() {
 	
  $(".equip__row").owlCarousel({
  	loop:true,
  	items:4,
  	margin:30,
  	responsiveClass: true,
  	responsive: {
	0: {
		items: 1
	},
	480: {
		items: 2
	},
	768: {
		items: 2
	},
	850: {
		items: 3
	},
	1200: {
		items: 4
	}
	}
  });

  $(".brands-carousel").owlCarousel({
  		loop:true,
  		items:5,
  		nav: true,
  		navText: ["<i class='icon-left-open-big'></i>","<i class='icon-right-open-big'></i>"],
  		responsive: {
  			0: {
  				items: 1
  			},
  			480: {
  				items: 2
  			},
  			768: {
  				items: 3
  			},
  			998: {
  				items: 4
  			},
  			1200: {
  				items: 5
  			}
  		}
  });

  $('.profile__item-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'profile-mfp__gallery mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
 
 $('.equip__thumbnail-svg, .owl-item .cloned .equip__thumbnail-svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
// .logo-img path {background-color: #000;}
// 
$(function(){
  $('.service .service__item-text').equalHeights(),
  $('.equip__caption-text').equalHeights(),
  $('.equip__caption-title').equalHeights(),
  $('.testimonials-thumbnail__text').equalHeights();
   });

$(".callback-form__form-select").selectize();

});
	
// Replace all SVG images with inline SVG

$(".navbar .navbar__toggle").click( function() {
  $(this).toggleClass("active");
});

$(".navbar__brand-footer").click( function() {
  $(this).toggleClass("active");
});


/*Обкатка*/
// Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	$("[href='#callback-popup']").click(function() {
		var title = $(this).data('title'); 
		var info = $(this).data('info');
		$(".callback-popup .callback-form__title").text(title);
		$(".callback-popup [type='hidden']").val(info);

	});
	$("[href='#callback-popup']").magnificPopup({
		removalDelay: 300,
		mainClass: 'callback-popup-mfp-in'
	});
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback-popup").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback-popup").serialize()
		}).done(function() {
			$(".callback-popup .callback-popup-success").addClass("active");
			setTimeout(function() {
				$(".callback-popup .callback-popup-success").removeClass("active");
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});

	$("body").append("<div class='arrow-top'><i class='icon-up-open-big'>");
	$(".arrow-top").click(function() {
			$("body, html").animate({scrollTop:0}, "slow");
	});
	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".arrow-top").addClass("active");
		} else {
			$(".arrow-top").removeClass("active");
		}
	});
	$(".header-top__scroll").click(function() {
		$("html, body").animate({
			scrollTop: $(".advert").offset().top
		}, 1000);
	});
	$(".works__item-link").magnificPopup({
	  mainClass: 'works-modal',
	  removalDelay: 100, //delay removal by X to allow out-animation
	  midClick: true 
	});

	$(".navbar__nav a").click(function(event) {
		var href = $(this).attr('href');
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $(href).offset().top
		},700);
	});