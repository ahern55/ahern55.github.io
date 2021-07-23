$(function () {
  //preloader
  $(document).ready( () => {
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

  gsap.to("#projects-intro", {
    scrollTrigger: {
      trigger: "#projects-intro",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom -50%",
      toggleClass: "active",
      ease: "power2",
    },
  });

  gsap.to("#projects-intro-image", {
    scrollTrigger: {
      trigger: "#projects-intro",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -150%",
      ease: "power2",
    },
    y: "-30%",
  });

  const projectBubbles = gsap.utils.toArray(".project-bubble");

  // Set things up
  gsap.set(projectBubbles, { autoAlpha: 0, y: 50 });

  projectBubbles.forEach((projectBubble, i) => {
    // Set up your animation
    const anim = gsap.to(projectBubble, {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      paused: true,
    });

    // Use callbacks to control the state of the animation
    ScrollTrigger.create({
      trigger: projectBubble,
      start: "top bottom",
      end: "bottom bottom",
      once: true,
      onEnter: (self) => {
        // If it's scrolled past, set the state
        // If it's scrolled to, play it
        self.progress === 1 ? anim.progress(1) : anim.play();
      },
    });
  });

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

  gsap.timeline({
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
});

Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: true,
  Thumbs: true,

  Image: {
      zoom: true,
      click: false,
      wheel: "slide",
  },

  on: {
      // Move caption inside the slide
      reveal: (f, slide) => {
          slide.$caption && slide.$content.appendChild(slide.$caption);
      },
  },
});
