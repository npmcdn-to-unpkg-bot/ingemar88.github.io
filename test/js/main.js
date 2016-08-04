$(document).ready(function(){var t=new Date($(".countdown").attr("date-time"));$(".countdown").countdown({until:t,format:"yowdHMS"}),$(".fancybox").fancybox(),$(".top_mnu").navigation(),$(".block").waypoint(function(t){"down"===t?$(".class").addClass("active"):"up"===t&&$(".class").removeClass("deactive")},{offset:100}),$("a.scroll").click(function(){$.scrollTo($(".div"),800,{offset:-90})});var o=$(".carousel");o.owlCarousel({items:4}),o.on("mousewheel",".owl-wrapper",function(t){t.deltaY>0?o.trigger("owl.prev"):o.trigger("owl.next"),t.preventDefault()}),$(".next_button").click(function(){o.trigger("owl.next")}),$(".prev_button").click(function(){o.trigger("owl.prev")}),$("#top").click(function(){return $("body, html").animate({scrollTop:0},800),!1}),$("form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$("form").serialize()}).done(function(){alert("Спасибо за заявку!"),setTimeout(function(){$.fancybox.close()},1e3)}),!1})}),$(".navbar__toggle").click(function(){$(this).toggleClass("active")});try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(err){}up") {
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

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
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

$(".navbar__toggle").click( function() {
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