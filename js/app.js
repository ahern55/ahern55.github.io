$(function () {
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

   var wipeAnimation = new TimelineMax()
         .fromTo("section.panel.second", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("section.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         // create scene to pin and link animation
     new ScrollMagic.Scene({
         triggerElement: "#info-sections",
         triggerHook: "onLeave",
         duration: "200%",
     })
     .setPin("#info-sections")
     .setTween(wipeAnimation)
     .addTo(controller);

	//  bind scroll to anchor links
	$(document).on("click", "a", function (e) {
		var value = $(this).attr("href");
		e.preventDefault();

        var scroll = window.innerHeight * value;

		// trigger scroll
		gsap.to(window, {duration: 2, scrollTo: {y: scroll}});

        // if (value === "0"){
        //     $("#navigation").toggleClass("hidden");
        // }

		// // if supported by the browser we can even update the URL.
		// if (window.history && window.history.pushState) {
		// 	history.pushState("", document.title, id);
		// }
	});
});