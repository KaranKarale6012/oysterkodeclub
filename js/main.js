$(document).ready(function(){
    $(window).on("scroll" , function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,             
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    $('#Open').on("click", function(){
        $("modal_container").addClass("show")
    })
   
    $('#Close').on("click", function(){
        $("modal_container").removeClass("show")
    })
})