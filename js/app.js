$(function () {
  setHeight();
  // $(window).on('resize orientationchange', setHeight);
  var controller = new ScrollMagic.Controller();

  // new ScrollMagic.Scene(
  //     {triggerElement: "#info-sections",
  //     triggerHook: 1,
  //     duration: 100,
  //     offset: -43
  //     })
  //     .setClassToggle("#navigation", "hidden") // add class toggle
  //     .addIndicators() // add indicators (requires plugin)
  //     .addTo(controller);

  // new ScrollMagic.Scene(
  //     {triggerElement: "#info-sections",
  //     triggerHook: 0,
  //     duration: 100,
  //     offset: 0,
  //     })
  //     .setClassToggle("#logo-wrapper", "hidden") // add class toggle
  //     .addIndicators() // add indicators (requires plugin)
  //     .addTo(controller)
  //     .reverse(true);

  var schoolAnimation = new TimelineMax().fromTo(
    "#school",
    1,
    { opacity: 0 },
    { opacity: 1, ease: Linear.easeNone }
  ); // fades in
  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#header-wrapper",
    triggerHook: "onLeave",
    duration: "100%",
  })
    .setPin("#header-wrapper")
    .setTween(schoolAnimation)
    .addTo(controller);

  var animation = new TimelineMax()
    .fromTo(
      "#socials-wrapper",
      10,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone }
    ) // fades in
    .fromTo(
      "section.panel.second",
      10,
      { x: "100%" },
      { x: "0%", ease: Linear.easeNone }
    ) // in from right
    .fromTo(
      "#resume",
      5,
      { opacity: 1 },
      { opacity: 0, ease: Linear.easeNone }
    ); // fades out
  //.fromTo("#timeline", 10, {y: "0%"}, {y: "-100%", ease: Linear.easeNone}) //timeline scroll
  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#info-sections",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin("#info-sections")
    .setTween(animation)
    .addTo(controller);

  //  bind scroll to anchor links
  $(document).on("click", ".nav-link", function (e) {
    var value = $(this).attr("href");
    e.preventDefault();

    var scroll = window.innerHeight * value;

    // trigger scroll
    gsap.to(window, { duration: 2, scrollTo: { y: scroll } });

    // if (value === "0"){
    //     $("#navigation").toggleClass("hidden");
    // }

    // // if supported by the browser we can even update the URL.
    // if (window.history && window.history.pushState) {
    // 	history.pushState("", document.title, id);
    // }
  });

  $(document).on("click", "#resume-button", function (e) {
    window.open("resources/resume.pdf", "_blank");
  });
});

function setHeight() {
    windowHeight = $(window).height();
    windowWidth = $(window).width();

    if (windowWidth < 1000) {
      windowHeight *= 1.05;
    }
    
    //make into a string
    windowHeightString = windowHeight + 'px'

    $('.edit-height').css({'height': windowHeightString});
}
