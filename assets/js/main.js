document.addEventListener("DOMContentLoaded", () => {
  // Particles background
  particlesJS.load("particles-js", "assets/js/particles.json");

  //Fade-in timeline items on scroll
  const timelineItems = document.querySelectorAll(".timeline-item");

  if (timelineItems.length) {
    const timelineObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    timelineItems.forEach((item) => timelineObserver.observe(item));
  }

  // Hide nav until scroll
  const header = document.querySelector("#home header");

  if (header) {
    const revealPoint = window.innerHeight;

    const toggleHeader = () => {
      if (window.scrollY > revealPoint) {
        header.classList.add("is-visible");
      } else {
        header.classList.remove("is-visible");
      }
    };

    window.addEventListener("scroll", toggleHeader);
    toggleHeader();
  }

  // Highlight active section in nav
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }
});

