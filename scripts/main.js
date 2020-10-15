$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuBtn.on('click', function() {
    mMenu.toggleClass('active');
    $('body').toggleClass("no-scroll");
  });

tab.on("click", function () {
  tab.removeClass("active");
$(this).toggleClass("active");
let activeTabContent = $(this).attr('data-target');
$(".tabs-content").removeClass("visible");
$(activeTabContent).toggleClass("visible");
});

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 25,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      slidesOffsetAfter: 50,
      navigation: {
        nextEl: ".button-next",
      },
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
});