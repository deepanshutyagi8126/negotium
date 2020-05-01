$(window).scroll(function () {
   
  if ($(window).scrollTop() >= 1) {
      $('.header').addClass('fixedHeader');
  } else {
      $('.header').removeClass('fixedHeader');
  }
});

$(document).ready(function(){
    $(".serviceClick").click(function(){
        $(".serviceDrop").slideToggle();
    });
    document.addEventListener("mousedown",function(event){
    if(event.target.closest(".serviceClick , .serviceDrop"))
       return;
    $('.serviceDrop').slideUp();
});
    
});
$(document).ready(function(){
    $(".UtilitiesClick").click(function(){
        $(".utilityDrop").slideToggle();
    });
    
});
    document.addEventListener("mousedown",function(event){
    if(event.target.closest(".UtilitiesClick , .utilityDrop"))
       return;
    $('.utilityDrop').slideUp();
});

$(document).ready(function(){
    $("a .message").click(function(){
        $(".messageOpen ,.messageDown").slideToggle(500);
    });
    
});
$(document).ready(function(){
   $(document).on('click', '.closed', function(){
        $(".messageOpen, .messageDown").hide();
    });
    
});

$(document).ready(function(){
    $(".headerMiddle ul li a").click(function(){
        $(".headerMiddle ul li a").removeClass("Active");
        $(this).addClass("Active");
    });
});

$(document).ready(function(){
    $(".serviceDrop ul li a").click(function(){
        $(".serviceDrop ul li a").removeClass("subActive");
        $(this).addClass("subActive");
    });
});
$(document).ready(function(){
    $(".utilityDrop ul li a").click(function(){
        $(".utilityDrop ul li a").removeClass("subActive");
        $(this).addClass("subActive");
    });
});

$(document).ready(function(){
     $(document).on('click', '.minuss', function(){
        $(this).parents('.messageOpen').removeClass('messageOpen').addClass('messageDown')
        $(this).removeClass('fa-minus minuss').addClass('fa-plus pluss')
    });
    $(document).on('click', '.pluss', function(){
        $(this).parents('.messageDown').removeClass('messageDown').addClass('messageOpen')
        $(this).removeClass('fa-plus pluss').addClass('fa-minus minuss')
    });
});

$(document).ready(function(){
    $(document).on('click','.contactRadio .radio label', function(){
//       $(".contactRadio .radio label").removeClass("radioChange");
        $(this).addClass("radioChange");
    });
});

$('.prolftSlick').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
});

  // hamburger 

  var forEach = function (t, o, r) {
      if ("[object Object]" === Object.prototype.toString.call(t))
          for (var c in t)
              Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
      else
          for (var e = 0, l = t.length; l > e; e++)
              o.call(r, t[e], e, t)
  };

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
      forEach(hamburgers, function (hamburger) {
          hamburger.addEventListener("click", function () {
              this.classList.toggle("is-active");
          }, false);
      });
  }

  $('.hamburger').click(function () {

      if ($(this).hasClass('is-active')) {
          $('#mySidenav').css('left', '0px');
      } else {
          $('#mySidenav').css('left', '-250px');
      }
  });

// hamburger end

$(document).ready(function(){
    $(document).on('click' ,'.ultiClick' ,function(){
        $(".oinnerAll1").slideToggle(500);
          $(".oinnerAll2 ,.oinnerAll3 ,.oinnerAll4").hide();
    });
});
$(document).ready(function(){
    $(document).on('click' ,'.moneyOpen' ,function(){
        $(".oinnerAll2").slideToggle(500);
          $(".oinnerAll1, .oinnerAll3 ,.oinnerAll4").hide();
    });
});
$(document).ready(function(){
    $(document).on('click' ,'.voiceOpen' ,function(){
        $(".oinnerAll3").slideToggle(500);
           $(".oinnerAll1, .oinnerAll2 ,.oinnerAll4").hide();
    });
});
$(document).ready(function(){
    $(document).on('click' ,'.pointSale' ,function(){
        $(".oinnerAll4").slideToggle(500);
           $(".oinnerAll1, .oinnerAll3 , .oinnerAll2").hide();
    });
});

$(document).ready(function(){
    $(".sidenav ul li a").click(function(){
        $(".sidenav ul li a").removeClass("sideActive");
        $(this).addClass("sideActive");
    });
});


$(document).ready(function(){
    $(".oInnerAll .ourInner a").click(function(){
        $(".oInnerAll .ourInner a").removeClass("ImgShow");
        $(this).addClass("ImgShow");
    });
});
$(document).ready(function(){
    $(".oInnerAll .ourInner a").click(function(){
        $(".oInnerAll .ourInner a").parent(".ourInner").removeClass("ourInnerColor");
        $(this).parent(".ourInner").addClass("ourInnerColor");
    });
});
