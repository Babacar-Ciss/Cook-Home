gsap.registerPlugin(ScrollTrigger);

let tl1 = gsap.timeline({
    scrollTrigger : {
        trigger : "#header",
        start : "2%",
        // markers : true,
        toggleActions : "play none none none"
    }
})

let tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : "#header",
        start : "40%",
        // markers : true,
        toggleActions : "play none none none"
    }
})

let tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : "#main",
        start : "15%",
        // markers : true,
        toggleActions : "play none none none"
    }
})

let tl4 = gsap.timeline({
    scrollTrigger : {
        trigger : "#main",
        start : "75%",
        // markers : true,
        toggleActions : "play none none none"
    }
})

let tRight = gsap.timeline({
    scrollTrigger : {
        trigger : "#header",
        start : "45%",
        // markers : true,
        toggleActions : "play none none none"
    }
})

let tLeft = gsap.timeline({
    scrollTrigger : {
        trigger : "#main",
        start : "25%",
        // markers : true,
        toggleActions : "play none none none"
    }
})

let tMakeChoice = gsap.timeline({
    scrollTrigger : {
        trigger : "#main",
        start : "80%",
        // markers : true,
        toggleActions : "play none none none"
    }
})



// Phase 1 header
tl1.to("#lid", { duration : 2, y : -110 }, 0);
tl1.to("#bottle", {duration : 2, y : 200 }, 0)
tl1.to("#circle-pattern", {scale : 1.5, translateY : 10, duration : 2}, 0);
tl1.to("#cta", {translateY : -120, duration : 1.5, delay : 0.5}, 0)
tl1.fromTo("#text-cta", { autoAlpha: 0, scale : 0 }, 
                        { autoAlpha : 1, duration : 1.7, scale : 1, delay : 0, easOut : Power1 }, 0)
              
// Phase 2 header
tl2.to("#lid", { duration : 2.5, translateY : () => {
                                return `${document.querySelector("#main").clientHeight * 0.38}` 
                               }, scale : 0.8 }, 0);

tl2.to("#bottle", {duration : 2, translateY : () => {
                                return `${document.querySelector("#main").clientHeight * 0.33}` 
                               }, scale : 0.8 }, 0)

// Phase 3 main
tl3.to("#lid", { duration : 4, translateY : () => {
    return `${document.querySelector("#main").clientHeight * 1.15}` 
   } }, 0);
tl3.to("#bottle", {duration : 4, translateY : () => {
    return `${document.querySelector("#main").clientHeight * 1.1 }`},translateX : -1.5  }, 0)


// Phase 4 main
tl4.to("#hero", { duration : 2, translateY : () => {
    return `${document.querySelector("#makeChoice").clientHeight * 0.40}` 
   },x : "1450px",transformOrigin : "center" , scale : 1.2, rotate : "28deg"  }, 0);


tRight.from("#tRight", {autoAlpha : 0, y : -100, duration : 2, delay : 1},
                      {autoAlpha : 1, y : 0} )

tLeft.from("#tLeft", {autoAlpha : 0, y : -100, duration : 2, delay : 1},
                      {autoAlpha : 1, y : 0} )


tLeft.from("#cta--main", {autoAlpha : 0, y : -100, duration : 2, delay : 1},
                      {autoAlpha : 1, y : 0} )

tMakeChoice.from("#makeChoice-anim", {autoAlpha : 0, y : -100, duration : 2, delay : 1},
                      {autoAlpha : 1, y : 0} )