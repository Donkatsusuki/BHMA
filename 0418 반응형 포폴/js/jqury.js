// slider
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },


});

// slider 2
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// scroll bg color change
$(window).on("scroll", function () {
  const scrollY = $(window).scrollTop();
  const triggerTop = $("#con2").offset().top;

  if (scrollY > triggerTop) {
    $("body").addClass("active");
    $(".burgur").addClass("active");
    $(".top-line").addClass("active");
    $(".bot-line").addClass("active");
    $(".logo_title").attr("src", "./img/logo/logo_black.png");
  } else {
    $("body").removeClass("active");
    $(".burgur").removeClass("active");
    $(".top-line").removeClass("active");
    $(".bot-line").removeClass("active");
    $(".logo_title").attr("src", "./img/logo/logo_white.png");
  }
});

// 

$(function () {
  $(".notice> ul> li").click(function () {
    $(this).children(".text_info").slideToggle();
    $(this).siblings().children(".text_info").slideUp();
  });
});
$(function () {
  $(".notice> ul> li").click(function () {
    $(this).toggleClass("turn");

    if ($(this).hasClass("turn") === true) {
      $(this).siblings().removeClass("turn");

    }

  });
});
$(function () {
  $(".notice2> ul").hide()
});


$(function () {
  $(".more").click(function () {
    $(".notice2> ul").slideDown();
    $(".more").hide(100);
  });
});
$(function () {
  $(".hide").click(function () {
    $(".notice2> ul").slideUp();
    $(".more").show(200);
  });
});
$(function () {
  $(".notice2> ul> li").click(function () {
    $(this).stop().children(".text_info").slideToggle();
    $(this).stop().siblings().children(".text_info").slideUp();
  });
});
$(function () {
  $(".notice> ul> li").click(function () {

    $(".notice2> ul> li").stop().siblings().children(".text_info").slideUp();
  });
});
$(function () {
  $(".notice2> ul> li").click(function () {

    $(".notice> ul> li").stop().siblings().children(".text_info").slideUp();
  });
});
$(function () {
  $(".notice2> ul> li").click(function () {
    $(this).stop().toggleClass("turn");

    if ($(this).hasClass("turn") === true) {
      $(this).stop().siblings().removeClass("turn");

    }

  });
});


// hamburger
$(function () {
  $("#slide-open").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide").addClass("on");
    }
  });
  $("#slide ul li a").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide").addClass("on");
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          500
        ); //움직이는 시간 조정
        return false;
      }
    }
  });
});

AOS.init();
