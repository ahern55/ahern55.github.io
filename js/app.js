$(function () {
  //preloader
  $(window).on("load", function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $(".spinner-wrapper");
      setTimeout(function () {
        preloader.fadeOut(preloaderFadeOutTime);
      }, preloaderFadeOutTime);
    }
    hidePreloader();
  });

  var schoolAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-wrapper",
      start: "middle middle",
      markers: false, //for debugging!
      toggleActions: "play none none reverse",
      // scrub: true, //this makes it animate *with* scroll, instead of doing it all at once when trigger is reached
      // pin: true //pins the header to the screen while the school words are animating
    },
  });

  schoolAnimation.fromTo(
    "#school",
    1,
    { opacity: 0 },
    { opacity: 1, ease: Linear.easeNone }
  );

  var mainAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#info-sections",
      start: "middle middle",
      markers: false, //debug
      toggleActions: "play none none reverse",
      scrub: true,
      pin: true,
      end: "+=2000",
    },
  });

  mainAnimation
    .fromTo(
      "#socials-wrapper",
      5,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone }
    ) // fades in
    .fromTo(
      ".panel.second",
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

  var footerStallAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#thank-you",
      start: "middle middle",
      markers: false, //for debugging!
      toggleActions: "play none none reverse",
      scrub: true, //this makes it animate *with* scroll, instead of doing it all at once when trigger is reached
      pin: true, //pins the header to the screen while the school words are animating
      end: "+=500",
    },
  });

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
