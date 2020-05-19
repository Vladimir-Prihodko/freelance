"use strict";

$(document).ready(function () {
  var accordion = function accordion() {
    var $id = $(".accordion");
    var $open = $id.data("open");
    $id.find(".title").on("click", function () {
      if ($open === false) {
        $id.find(".content:visible").slideUp();

        if ($(this).hasClass("active")) {
          $(this).toggleClass("active");
        } else {
          $id.find(".title").removeClass("active");
          $(this).toggleClass("active");
        }
      } else {
        $(this).toggleClass("active");
      }

      $(this).next(".content").not(":animated").slideToggle();
    });
  };

  accordion();
});
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.btn-up').fadeIn();
    } else {
      $('.btn-up').fadeOut();
    }
  });
  $('.btn-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1500);
  });
});
$(document).ready(function () {
  //burger
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active'); // $('.js-mask').fadeOut('active');

        $('.js-burger-menu').removeClass('active');
        $('.main').removeClass('opacity');
        $('body').removeClass('overflow');
        $('html').removeClass('overflow');
      } else {
        $(this).addClass('active'); // $('.js-mask').fadeIn('active');

        $('.js-burger-menu').addClass('active');
        $('.main').addClass('opacity');
        $('body').addClass('overflow');
        $('html').addClass('overflow');
      }
    });
  }
});
$(document).ready(function () {
  $('.network').click(function () {
    $('.js-modal-step1').fadeIn();
    $('.js-mask').fadeIn();
  });
  $('.js-step2').click(function () {
    $('.js-modal-step1').fadeOut();
    $('.js-modal-step2').fadeIn();
  });
  $('.lk-form__basket-btn').click(function () {
    $('.js-modal-step2').fadeOut();
    $('.js-modal-step3').fadeIn();
  }); //open methods

  $('.js-method-btn ').click(function () {
    $('.methods').slideDown();
  }); //sign-in

  $('.js-sign-in').click(function () {
    $('.js-modal-login').fadeIn();
    $('.js-mask').fadeIn();
  }); //registration

  $('.js-reg-open').click(function () {
    $('.js-modal-reg').fadeIn();
    $('.js-modal-login').fadeOut();
    $('.js-mask').fadeIn();
  });
  $('.js-mask').click(function () {
    $('.modal').fadeOut();
    $(this).fadeOut();
  });
});
$(document).ready(function () {
  //select 
  $('.js-select').click(function () {
    $(this).toggleClass('active');
    $('.js-select-list').slideToggle();
  });
  $('.js-select-list li').click(function () {
    var selected = $(this).text();
    $('.js-select-text').text(selected);
  }); //close custom select

  $(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".js-select");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.js-select-list').slideUp();
      }
    });
  });

  if ($(window).width() < 768) {
    //select service
    $('.js-serv-select').click(function () {
      $(this).toggleClass('active');
      $('.js-serv-list').slideToggle();
    });
    $('.js-serv-list li').click(function () {
      var selectedServ = $(this).text();
      $('.js-serv-text').text(selectedServ);
    }); //close custom select

    $(function ($) {
      $(document).mouseup(function (e) {
        var div = $(".js-serv-select");

        if (!div.is(e.target) && div.has(e.target).length === 0) {
          div.removeClass('active');
          $('.js-serv-list').slideUp();
        }
      });
    });
  }

  ;
});
$(document).ready(function () {
  //service-nav
  $('.service-nav li').click(function () {
    $('.service-nav li').removeClass('active');
    $(this).addClass('active');
  });
});
$(document).ready(function () {
  $('.js-feedback-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    // autoplay: true
    responsive: [{
      breakpoint: 1024,
      settings: {
        vertical: false,
        slidesToShow: 1,
        centerMode: false
      }
    }]
  });
});
$(document).ready(function () {
  //tabs
  $(function () {
    $("ul.js-tab-btn").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tab-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
});
$(document).ready(function () {
  //scroll to top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('.btn-up').fadeIn();
      } else {
        $('.btn-up').fadeOut();
      }
    });
    $('.btn-up').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1500);
    });
  }); //animation

  $(window).scroll(function () {
    $('.mov').each(function () {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + 600) {
        $(this).addClass('anim');
      }
    });
  });
});