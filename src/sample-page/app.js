gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".images",
  {
    x: -500,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".images",
      start: "top 80%",
      end: "top 30%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    },
  }
);
// heading animation
const textElements = document.querySelectorAll(".heading1");

textElements.forEach((textElement) => {
  gsap.fromTo(
    textElement,
    {
      opacity: 0,
      y: 50, // Start position outside the viewport
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3, // Animation duration

      scrollTrigger: {
        trigger: textElement, // Element to trigger the animation
        start: "top 90%", // Animation starts when top of the text element hits bottom of the viewport
        end: "top 3%", // Animation ends when bottom of the text element hits top of the viewport
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    }
  );
});

// pining code
const textPin = document.querySelectorAll(".square");
const pinEndPoint = document.querySelector(".square2");

textPin.forEach((textPin) => {
  gsap.fromTo(
    textPin,
    { y: -30 },
    {
      y: 0,
      scrollTrigger: {
        trigger: textPin,
        start: "top",
        endTrigger: pinEndPoint,
        end: "bottom 10%",
        pin: textPin,
        pinSpacing: false,
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    }
  );
});

// gsap.to(".square", {
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 10%",
//     end: () => "+=" + document.querySelector(".square2").offsetTop,
//     toggleActions: "play reverse play reverse",
//     pin: ".square",
//     pinSpacing: true,
//     markers: true,
//   },
// });
