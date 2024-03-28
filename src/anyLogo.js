gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play reverse play reverse",
});

const anylogo = {
  x: 0,
  opacity: 1,
  duration: 0.7,
  ease: "power1.out",
};

for (let i = 1; i <= 12; i++) {
  const direction = 1 % 2 ? "+50" : "-50";

  const card = `.logo-animate${i}`;

  gsap.fromTo(
    card,
    { x: direction, opacity: 0 },
    { ...anylogo, scrollTrigger: { trigger: card } }
  );
}
