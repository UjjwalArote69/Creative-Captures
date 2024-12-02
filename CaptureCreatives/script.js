gsap.registerPlugin(ScrollTrigger);

// Sync ScrollTrigger with Lenis
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert seconds to milliseconds
});

ScrollTrigger.defaults({
  scroller: document.body, // Tell ScrollTrigger to use the default scroller
  refreshPriority: 1,      // Improve performance by refreshing animations earlier
});

// Disable lag smoothing to reduce scroll stutter
gsap.ticker.lagSmoothing(0);

// Initialize Lenis with optimized settings
const lenis = new Lenis({
  smooth: true,       // Enable smooth scrolling
  smoothTouch: true,  // Smooth scrolling for touch devices
  lerp: 0.15,          // Scrolling interpolation (lower values = smoother, higher = snappier)
  infinite: false     // Disable infinite scroll
});

// Event listener to handle scrolling with Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

ScrollTrigger.defaults({
  scroller:document.body,
  refreshPriority: 2,
});

gsap.ticker.fps(60);

function cursor() {
  const cursor = document.querySelector("#cursor");
  const links = document.querySelectorAll("a, .circle-arrow, .hero-image");

  document.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.setAttribute("data-hover", "true");
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: "rgba(0, 0, 0)",
        borderColor: "black",
        duration: 0.3,
      });
    });

    link.addEventListener("mouseleave", () => {
      cursor.removeAttribute("data-hover");
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "white",
        duration: 0.3,
      });
    });
  });

  document.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.3,
    });
  });

  document.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 1,
      duration: 0.3,
    });
  });
}
cursor();

function heroInitialLoader() {
  const navLinks = document.querySelectorAll("nav a");
  const number = document.querySelector(".number");
  const heroImage = document.querySelector(".hero-image");
  const circleArrow = document.querySelector(".circle-arrow");
  const heroText2 = document.querySelector(".hero-text2");

  gsap.from(navLinks, {
    y: -100,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(number, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(heroImage, {
    scale: 1.2,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(heroText2, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(circleArrow, {
    opacity: 0,
    rotate: 360,
    duration: 2,
    ease: "power2.out",
  });

}

heroInitialLoader();

function heroSectionAnimation() {
  const heroImage = document.querySelector(".hero-image");
  const circleArrow = document.querySelector(".circle-arrow");
  
  heroImage.addEventListener("mouseenter", function () {
    gsap.to(heroImage, {
      scale: 1.1,
      duration: 0.2,
      ease: "back.out(1.7)",
    });
  });
  
  heroImage.addEventListener("mouseleave", function () {
    gsap.to(heroImage, {
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });

  circleArrow.addEventListener("mouseenter", function () {
    gsap.to(circleArrow, {
      scale: 1.1,
      duration: 0.2,
      ease: "back.out(1.7)",
    });

    gsap.to(".circle-arrow i", {
      rotate: 360,
      duration: 1,
      ease: "power2.inOut",
    });

  });

  circleArrow.addEventListener("mouseleave", function () {
    gsap.to(circleArrow, {
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(".circle-arrow i", {
      rotate: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

}

heroSectionAnimation();

function container1() {
  const container = document.querySelector(".container");
  const containerWrapper = document.querySelector(".container-wrapper");
  const image = document.querySelector(".container-wrapper img");
  const text1 = document.querySelector(".container-text .text1");
  const text2 = document.querySelector(".container-text .text2");
  const text3 = document.querySelector(".container-text .text3");
  
  gsap.from(text1, {
    y: -150,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".container",
      start: "top 100%",
      scrub: 1,
      // markers: true,
    }
  });

  gsap.from(text2, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".container",
      // markers:true,
      start: "50px 100%",
      scrub: 1,
    }
  });
  
  gsap.from(text3, {
    y:150,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".container",
      // markers:true,
      start: "top 100%",
      scrub: 1,
    }
  });

  gsap.to(containerWrapper, {
    rotation: 0,
    duration: 2,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) ',
    scrollTrigger: {
      trigger: ".container",
      start: "-150px top",
      end: "bottom 100%",
      scrub: 1,
      // markers: true,
    }
  });
  
}

container1();

// function swipeSection1() {
//   const races = document.querySelector(".races");
//   console.log(races.offsetWidth);
  
//   function getScrollAmount() {
//     let racesWidth = races.scrollWidth;
//     return -(racesWidth - window.innerWidth);
//   }

//   const tween = gsap.to(races, {
//     x: getScrollAmount() + (-10),
//     duration: 3,
//     ease: "none",
//   });
  
//   ScrollTrigger.create({
//     trigger: ".racesWrapper",
//     // start:"top 0%",
//     end: () => `+=${getScrollAmount()  * -1}`,
//     pin: true,
//     animation: tween,
//     scrub: 1,
//     invalidateOnRefresh: true,
//     // markers: true,
//   });
  
// }

// swipeSection1();


// function swipeSection2() {
//   const races = document.querySelector(".races2");
//   console.log(races.offsetWidth);
  
//   function getScrollAmount() {
//     let racesWidth = races.scrollWidth;
//     return -(racesWidth - window.innerWidth);
//   }

//   const tween = gsap.to(races, {
//     x: getScrollAmount() + (-100),
//     duration: 3,
//     ease: "none",
//   });
  
//   ScrollTrigger.create({
//     trigger: ".racesWrapper2",
//     // start:"top 0%",
//     end: () => `+=${getScrollAmount()  * -1}`,
//     pin: true,
//     animation: tween,
//     scrub: 1,
//     invalidateOnRefresh: true,
//     // markers: true,
//   });
  
// }

// swipeSection2();

function enableHorizontalScroll(wrapperSelector, contentSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  const content = document.querySelector(contentSelector);

  gsap.to(content, {
    x: () => -(content.scrollWidth - wrapper.offsetWidth),
    ease: "power2.easeIn",
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => `+=${content.scrollWidth}`,
      pin: true,
      scrub: 3,
    },
  });
}

// Apply horizontal scroll logic to both sections
enableHorizontalScroll(".racesWrapper", ".races");
enableHorizontalScroll(".racesWrapper2", ".races2");



function videoAnimations() {
  const videos = document.querySelectorAll(".video");  // Changed from 'image' to 'video'

  // Animate video on scroll
  videos.forEach((video, index) => {
      gsap.from(video, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
              trigger: video,  // Use 'video' instead of undefined 'video'
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
          },
      });
  });

  // Hover animations for video
  const videoItems = document.querySelectorAll(".video-item");
  videoItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
          gsap.to(item.querySelector(".video"), {
              scale: 1.2,
              duration: 0.5,
              ease: "power2.out",
          });
      });

      item.addEventListener("mouseleave", () => {
          gsap.to(item.querySelector(".video"), {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
          });
      });
  });
}

videoAnimations();

function imageAnimations() {
    const image = document.querySelectorAll(".image");

    // Animate image on scroll
    image.forEach((image, index) => {
        gsap.from(image, {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: image,
                start: "top 80%",
                end: "bottom 60%",
            },
        });
    });

    // Hover animations for image
    const imageItems = document.querySelectorAll(".image-item");
    imageItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item.querySelector(".image"), {
                scale: 1.2,
                duration: 0.5,
                ease: "power2.out",
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item.querySelector(".image"), {
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        });
    });
}

imageAnimations();

function aboutMe() {
  gsap.from(".about-me-section", {
    scrollTrigger: {
        trigger: ".about-me-section",
        start: "top 80%",
        scub:1,
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
});

}

aboutMe();