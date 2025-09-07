// This file implements the on-scroll animations.

const animatedElements = document.querySelectorAll('.animate-on-scroll');

if (animatedElements.length > 0) {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing the element once it has been animated
        observerInstance.unobserve(entry.target);
      }
    });
  }, {
    // Trigger the animation when 30% of the element is visible
    threshold: 0.3,
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}