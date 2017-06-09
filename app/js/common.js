$(document).scroll (function () {
	$(document).scrollTop () > ($('.header__wrapper').height () - 90) ? $('.header__nav').addClass ('header__nav_fixed') : $('.header__nav').removeClass ('header__nav_fixed');
});

var home = $('#nav__button__home_scroll');
var about = $('#nav__button__about_scroll');
var sirvices = $('#nav__button__sirvices_scroll');
var gallery = $('#nav__button__gallery_scroll');
var pricing = $('#nav__button__contact_scroll');

$(home).click (function () {
	var offsetHome = $('.header').offset().top;
	$('body').scrollTop(offsetHome);
});

$(about).click (function () {
	var offsetAbout = $('.story').offset().top;
	$('body').scrollTop(offsetAbout - 50);
});

$(sirvices).click (function () {
	var offsetSirvices = $('.services').offset().top;
	$('body').scrollTop(offsetSirvices - 50);
});

$(gallery).click (function () {
	var offsetGallery = $('.testimonial').offset().top;
	$('body').scrollTop(offsetGallery - 50);
});

$(pricing).click (function () {
	var offsetContact = $('.pricing').offset().top;
	$('body').scrollTop(offsetContact - 50);
});


