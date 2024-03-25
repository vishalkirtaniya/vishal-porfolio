gsap.registerPlugin(ScrollTrigger);

// default animation for the content
gsap.utils.toArray(".animate-me").forEach((logo2, index) => {
  gsap.from(logo2, {
    y: "-=20", // Start from above
    opacity: 0,
    duration: 0.3, // Animation duration
    ease: "power1.out",
    scrollTrigger: {
      trigger: logo2,
      start: "top 90%", // Trigger animation when the logo is 80% from the top
      end: "top 10%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play reverse restart reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});

// first service-card
gsap.utils.toArray(".service-card1").forEach((logo2, index) => {
  gsap.from(logo2, {
    x: "-=50", // Start from above
    opacity: 0,
    duration: 0.3, // Animation duration
    ease: "power1.out",
    scrollTrigger: {
      trigger: logo2,
      start: "top 80%", // Trigger animation when the logo is 80% from the top
      end: "top 10%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play reverse restart reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});

// 2nd service-card
gsap.utils.toArray(".service-card2").forEach((logo2, index) => {
  gsap.from(logo2, {
    x: "+=50", // Start from above
    opacity: 0,
    duration: 0.3, // Animation duration
    scrollTrigger: {
      trigger: logo2,
      start: "top 80%", // Trigger animation when the logo is 80% from the top
      end: "top 10%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play reverse restart reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});

// 3rd service-card
gsap.utils.toArray(".service-card3").forEach((logo2, index) => {
  gsap.from(logo2, {
    x: "-=50", // Start from above
    opacity: 0,
    duration: 0.3, // Animation duration
    scrollTrigger: {
      trigger: logo2,
      start: "top 80%", // Trigger animation when the logo is 80% from the top
      end: "top 10%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play reverse restart reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});

// 4th service-card
gsap.utils.toArray(".service-card4").forEach((logo2, index) => {
  gsap.from(logo2, {
    x: "+=50", // Start from above
    opacity: 0,
    duration: 0.3, // Animation duration
    scrollTrigger: {
      trigger: logo2,
      start: "top 80%", // Trigger animation when the logo is 80% from the top
      end: "top 10%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play reverse restart reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});

// 5th service-card
gsap.utils.toArray(".service-card5").forEach((logo2, index) => {
  gsap.from(logo2, {
    x: "-=50", // Start from above
    opacity: 0,
    duration: 0.3, // Animation duration
    scrollTrigger: {
      trigger: logo2,
      start: "top 80%", // Trigger animation when the logo is 80% from the top
      end: "top 10%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play reverse restart reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});
// 6th service-card
gsap.utils.toArray(".service-card6").forEach((logo2, index) => {
  gsap.from(logo2, {
    x: "+=50", // Start from above
    opacity: 0,
    duration: 0.3, // Animation duration
    scrollTrigger: {
      trigger: logo2,
      start: "top 80%", // Trigger animation when the logo is 80% from the top
      end: "top 10%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play reverse restart reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});
