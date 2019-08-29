$(document).ready(function() {

	/* Call plugins here ...*/
    $('.menu>ul>li').mouseenter(function () {
        $(this).find('.dropdown').css("display",'block');
        
    })

    $('.menu>ul>li').mouseleave(function () {
        $(this).find('.dropdown').css("display",'none');
    })
	
});