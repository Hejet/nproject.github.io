// Настройка выпадающего окна при посощи jQuery

$(document).ready(function () {
	$('.service-photo-title-a').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function () {
	$('.service-crea-title-a').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function () {
	$('.service-web-title-a').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});