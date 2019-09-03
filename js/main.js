$(document).ready(function() {

	// Выпадающее меню
    $('.menu>ul>li').mouseenter(function () {
        $(this).find('.dropdown').slideDown('slow')        
    })

    $('.menu>ul>li').mouseleave(function () {
        $(this).find('.dropdown').slideUp('slow')
    })

    // Мобильная навигация
	jQuery('.menu').meanmenu();

    //OwlCarousel
    $(".owl-carousel").owlCarousel({
        items:1
    });
});