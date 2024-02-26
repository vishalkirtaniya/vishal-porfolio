// main.js (or any other JS file)

const animateElements = document.querySelectorAll(".animate-me");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1, // Adjust this threshold as needed
};

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Calculate the position relative to the viewport
      const distanceFromTop = entry.boundingClientRect.top;
      const distanceFromBottom = entry.boundingClientRect.bottom;

      // Check if the element is visible from either top or bottom
      const isVisible = distanceFromTop > -800 || distanceFromBottom > 600; // Adjust the threshold

      if (isVisible) {
        entry.target.style.transitionDelay = "0s"; // No delay
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      } else {
        // Apply a delay before animation starts
        entry.target.style.transitionDelay = "0.5s"; // Adjust the delay as needed
      }
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

animateElements.forEach((element) => {
  observer.observe(element);
});
