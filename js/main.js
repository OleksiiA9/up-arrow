
    //up   
$(document).ready(function(){    
    $(".arrow .top").hide();
            $(function () {
            $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".arrow .top").css("display","block");}
        else {
            $(".arrow .top").css("display","none");}
    });
$('.arrow .top').click(function () {
    $('html, body').animate({
    scrollTop: $(".header ").offset().top
    }, 2000);
    });
    });
}); 