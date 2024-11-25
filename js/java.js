
$(function(){

        // going up

        $(".up").css({
          display:"none"

        });
        $(window).scroll(function(){

              let scrollWindow = $(this).scrollTop();

              if(scrollWindow >= 630)
              {

                    $(".up").css({
                      display:"block"

                    });

              } else {
                $(".up").css({
                  display:"none"

                });
              };

        });

        $(".up").click(function () {

              $("html, body").animate({

                  scrollTop:  $("header").offset().top

              }, 2500);



        });

        // change header height

        $("header").height($(window).height());;

        $(window).resize(function(){

              $("header").height($(window).height());

        });

        //scroll smooth from header to featutes

        $("header .arrow i").click(function () {


              $("html, body").animate({

                  scrollTop:  $(".features").offset().top

              }, 3000);


        });

        $(".feat").click(function () {

              $("html, body").animate({

                  scrollTop:  $(".features").offset().top

              }, 2000);

        });

        $(".subs").click(function () {

              $("html, body").animate({

                  scrollTop:  $(".subscribe").offset().top

              }, 2000);

        });

        $(".work").click(function () {

              $("html, body").animate({

                  scrollTop:  $(".our-work").offset().top

              }, 2000);

        });

        $(".testi").click(function () {

              $("html, body").animate({

                  scrollTop:  $(".testimonials").offset().top

              }, 2000);

        });

        $(".hire").click(function () {

              $("html, body").animate({

                  scrollTop:  $(".our-team").offset().top

              }, 2000);

        });

        $(".conta").click(function () {

              $("html, body").animate({

                  scrollTop:  $(".contact").offset().top

              }, 2000);

        });

        // show images

        $(".our-work .show").click (function () {

              $(".our-work .hidden").slideDown(1000);

        });

        $(".our-work .hide").click (function () {

              $(".our-work .hidden").slideUp(1000);

        });

        // check testimonials

        let right  = $(".testimonials .fa-chevron-right"),
            left   = $(".testimonials .fa-chevron-left");

        function checkClients() {

            if($(".testimonials .client:first").hasClass("active")){

                  left.fadeOut(50);

            } else {

                  left.fadeIn(50);

            }

            if($(".testimonials .client:last").hasClass("active")){

                  right.fadeOut(50);

            } else {

                  right.fadeIn(50);

            }

        }

        checkClients();

        $(".testimonials  i").click(function(){

              if ($(this).hasClass("fa-chevron-right")){

                    $(".testimonials .active").fadeOut(1000, function (){

                            $(this).removeClass("active").next(".testimonials .client").addClass("active").fadeIn(1000);

                              checkClients();

                    });

              } else {

                $(".testimonials .active").fadeOut(1000, function (){

                        $(this).removeClass("active").prev(".testimonials .client").addClass("active").fadeIn(1000);

                          checkClients();

                        });

                };

        });

        // show menu
        $(".fa-bars").click(function () {

          $(this).parent().toggleClass("open");

          if ($(".links").hasClass("open")){

              $(".links i ul").fadeIn(1000);

            } else {

                  $(".links i ul").fadeOut(1000)

            }

        });

        // closs menu click eny where
        //
        // $(window).click(function(){
        //
        //       console.log("yes");
        //
        // })
        //


});

// loading

$(window).ready(function(){

    $(".loading .animate").fadeOut(5000, function(){

          $(this).parent().fadeOut(2000, function(){

             $(this).parent().css("overflow","auto")
          });

    });

});





















//
