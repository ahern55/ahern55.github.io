$(function () {
  setHeight();
  $(window).on('resize orientationchange', setHeight);

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


  var schoolAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-wrapper",
      start: "middle middle",
      markers: "false", //for debugging!
      toggleActions: "play none none reverse",
      scrub: true, //this makes it animate *with* scroll, instead of doing it all at once when trigger is reached
      pin: true //pins the header to the screen while the school words are animating
    }
  });

  schoolAnimation.fromTo(
    "#school",
    1,
    { opacity: 0 },
    { opacity: 1, ease: Linear.easeNone}  
  ); 

  var mainAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#info-sections",
      start: "middle middle",
      markers: "true", //debug
      toggleActions: "play none none reverse",
      scrub: true, 
      pin: true
    }
  });

  mainAnimation.fromTo(
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

    //make into a string
    windowHeightString = windowHeight + 'px'

    $('.edit-height').css({'height': windowHeightString});
}
