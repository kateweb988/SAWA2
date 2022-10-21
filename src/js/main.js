document.addEventListener("DOMContentLoaded", () => {
});
// Новые попапы
$('.n1').click(function (e) {
  e.preventDefault();
  $('#new1').arcticmodal({
  });
});
$('.n2').click(function (e) {
  e.preventDefault();
  $('#new2').arcticmodal({
  });
});
$('.n3').click(function (e) {
  e.preventDefault();
  $('#new3').arcticmodal({
  });
});
$('.n4').click(function (e) {
  e.preventDefault();
  $('#new4').arcticmodal({
  });
});
$('.n5').click(function (e) {
  e.preventDefault();
  $('#new5').arcticmodal({
  });
});
function chpok(id) {
  elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
  state = elem.style.display; //смотрим, включен ли сейчас элемент
  if (state == '') elem.style.display = 'block'; //если включен, то выключаем
  else elem.style.display = ''; //иначе - включаем
}
$(document).ready(function () {
  $('.select').each(function () {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
      class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });
});
$('.curr__slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="css/img/left-slider.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="css/img/right-slider.svg" class="svg"></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      }
    }
  ]

});
$('.curr__carousel').slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="css/img/left-slider.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="css/img/right-slider.svg" class="svg"></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      }
    }
  ]

});
$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0) {
    container.removeClass('visible');
  }
});
// Accordeon
$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }
    else {
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this).siblings('.content').slideDown(200);
    }
    return false
  });

});
$('.my').change(function () {
  if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
  else $(this).prev().text('Выберите файлы');
});
// Burger
$('.menu .button').click(function (event) {
  $(this).toggleClass('active');
  $('.burger').toggleClass('active');
  return false;
});
$('.menu-acc .button').click(function (event) {
  $(this).toggleClass('active');
  $('.burger-acc').toggleClass('active');
  return false;
});
$(document).mouseup(function (e) {
  var container = $(".burger-acc");
  if (container.has(e.target).length === 0) {
    container.removeClass('active');
  }
});
$('.articmodal-close').click(function (e) {
  $.arcticmodal('close');

});
$('.nav__login').click(function (e) {
  e.preventDefault();
  $('#popup-call').arcticmodal({
  });
});
$('.nav__btn').click(function (e) {
  e.preventDefault();
  $('#popup-call2').arcticmodal({
  });
});
$('.header__btn3').click(function (e) {
  e.preventDefault();
  $('#popup-call3').arcticmodal({
  });
});
$('.p1').click(function (e) {
  e.preventDefault();
  $('#pop1').arcticmodal({
  });
});
$('.p2').click(function (e) {
  e.preventDefault();
  $('#pop2').arcticmodal({
  });
});
$('.p3').click(function (e) {
  e.preventDefault();
  $('#pop3').arcticmodal({
  });
});
$('.p4').click(function (e) {
  e.preventDefault();
  $('#pop4').arcticmodal({
  });
});
$('.p5').click(function (e) {
  e.preventDefault();
  $('#pop5').arcticmodal({
  });
});
$('.p6').click(function (e) {
  e.preventDefault();
  $('#pop6').arcticmodal({
  });
});
$('.p7').click(function (e) {
  e.preventDefault();
  $('#popup-successful').arcticmodal({
  });
});
$('.p8').click(function (e) {
  e.preventDefault();
  $('#popup-rec').arcticmodal({
  });
});
$('.calc').click(function (e) {
  e.preventDefault();
  $('#popup-calc').arcticmodal({
  });
});
$(document).ready(function () {
  $(".drop").each(function () {
    $(".option").click(function () {
      var val = $(this).attr("data-value"),
        $drop = $(".drop"),
        prevActive = $(".drop .option.active").attr("data-value"),
        options = $(".drop .option").length;

      $drop.toggleClass("visible");
      $drop.removeClass("withBG");
      $(this).css("top");
      $drop.toggleClass("opacity");

      if ($drop.hasClass("visible")) {
        setTimeout(function () {
          $drop.addClass("withBG");
        }, 400 + options * 100);
      }
      if (val !== "placeholder" || prevActive === "placeholder") {
        $(".drop .option").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});
$(function () {

  var newSelection = "";

  $("#flavor-nav a").click(function () {

    $("#all-flavors").fadeTo(200, 0.10);

    $("#flavor-nav a").removeClass("current");
    $(this).addClass("current");

    newSelection = $(this).attr("rel");

    $(".flavor").not("." + newSelection).slideUp();
    $("." + newSelection).slideDown();

    $("#all-flavors").fadeTo(600, 1);

  });

});
jQuery('img.svg').each(function () {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function (data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});