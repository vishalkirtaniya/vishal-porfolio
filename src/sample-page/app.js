gsap.registerPlugin(ScrollTrigger);

gsap.to(".images", {
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: ".images",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});
