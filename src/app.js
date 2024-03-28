gsap.registerPlugin(ScrollTrigger);

// Set default ScrollTrigger options
ScrollTrigger.defaults({
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play reverse play reverse",
});

// Define common animation properties
const animationProps = {
  x: 0,
  opacity: 1,
  duration: 0.3,
  ease: "power1.out",
};

// Loop through service cards and apply animations
for (let i = 1; i <= 12; i++) {
  const direction = i % 2 === 0 ? "+=50" : "-=50"; // Alternating direction
  const card = `.service-card${i}`;

  gsap.fromTo(
    card,
    { x: direction, opacity: 0 },
    { ...animationProps, scrollTrigger: { trigger: card } }
  );
}
