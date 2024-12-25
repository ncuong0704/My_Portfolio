$("#fullpage").fullpage({
  autoScrolling: false,
  licenseKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
  fitToSection: false,
  fitToSectionDelay: 100,
  scrollingSpeed: 300,
  menu: "#menu",
  anchors: ["home", "about", "skills", "education", "experience", "project", "contact"],
});

if ($(".home").length) {
  if ($(".home .home__slide").length > 1) {
    $(".home").slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
    });
    setTimeout(() => {
      if ($(".home__slide.slick-current").length) {
        $(".home__slide.slick-current").addClass("mark");
        $(".home__slide.slick-current").find(".home__body").addClass("active");
      }
    }, 300);
    $(".home").on("afterChange", function (event, slick, currentSlide, nextSlide) {
      $(".home__slide.mark").find(".home__body").removeClass("active");
      $(".home__slide.mark").removeClass("mark");

      $(".home__slide.slick-current").addClass("mark");
      $(".home__slide.slick-current").find(".home__body").addClass("active");
    });
  } else {
    if ($(".home__slide").length) {
      setTimeout(() => {
        $(".home__slide").find(".home__body").addClass("active");
      }, 300);
    }
  }
}

if ($(".education__top").length) {
  $(".education__top").click(function (e) {
    e.preventDefault();
    if ($(this).parents(".education__item").hasClass("active")) {
      $(this).parents(".education__item").toggleClass("active");
      $(this).parents(".education__item").find(".education__body").slideToggle();
    } else {
      if ($(".education__item.active").length) {
        $(".education__item.active").find(".education__body").slideUp();
        $(".education__item.active").removeClass("active");
      }
      $(this).parents(".education__item").toggleClass("active");
      $(this).parents(".education__item").find(".education__body").slideToggle();
    }
  });
}

if ($(".project__tab").length) {
  $(".project__tab").each(function (inx, item) {
    $(item).click(function (e) {
      e.preventDefault();
      if (!$(this).hasClass("active")) {
        if ($(".project__tab.active").length) {
          $(".project__tab.active").removeClass("active");
          $(".project__display.active").removeClass("active");
        }
        $(this).addClass("active");
        $(".project__display").eq(inx).addClass("active");
      }
    });
  });
}
