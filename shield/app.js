$(() => {
  /* Lightbox - Magnific Popup */
  $(".popup-with-move-anim").magnificPopup({
    type: "inline",
    fixedContentPos: false /* keep it false to avoid html tag shift with margin-right: 17px */,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 100,
    mainClass: "my-mfp-slide-bottom",
  });

  $("#first-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#nhl-data-lightbox"),
      },
      type: "inline",
    });
  });

  $("#second-circle-top").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#nhl-data-lightbox"),
      },
      type: "inline",
    });
  });

  $("#second-circle-bottom").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#nhl-data-lightbox"),
      },
      type: "inline",
    });
  });

  $("#third-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#nhl-data-lightbox"),
      },
      type: "inline",
    });
  });

  $("#fourth-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#nhl-data-lightbox"),
      },
      type: "inline",
    });
  });

  $("#fifth-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#nhl-data-lightbox"),
      },
      type: "inline",
    });
  });

  // Lightboxes

  $("#sources").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#sources-lightbox"),
      },
      type: "inline",
    });
  });

  $("#first-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#first-circle-lightbox"),
      },
      type: "inline",
    });
  });

  $("#second-circle-top").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#second-circle-top-lightbox"),
      },
      type: "inline",
    });
  });

  $("#second-circle-bottom").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#second-circle-bottom-lightbox"),
      },
      type: "inline",
    });
  });

  $("#third-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#third-circle-lightbox"),
      },
      type: "inline",
    });
  });

  $("#fourth-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#fourth-circle-lightbox"),
      },
      type: "inline",
    });
  });

  $("#fifth-circle").click(() => {
    $.magnificPopup.open({
      items: {
        src: $("#fifth-circle-lightbox"),
      },
      type: "inline",
    });
  });

  $(".interpretation-toggle").click(() => {
    var textSections = $(".text-section");
    textSections.addClass("hidden");

    var interpretationSections = $(".interpretation-section");
    interpretationSections.removeClass("hidden");

    var textToggles = $(".text-toggle");
    textToggles.removeClass("active");

    var interpretationToggles = $(".interpretation-toggle");
    interpretationToggles.addClass("active");
  });

  $(".text-toggle").click(() => {
    var textSections = $(".text-section");
    textSections.removeClass("hidden");

    var interpretationSections = $(".interpretation-section");
    interpretationSections.addClass("hidden");

    var textToggles = $(".text-toggle");
    textToggles.addClass("active");

    var interpretationToggles = $(".interpretation-toggle");
    interpretationToggles.removeClass("active");
  });
});
