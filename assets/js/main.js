document.addEventListener(
  "DOMContentLoaded",
  () => {
    /* Particles background */
    particlesJS.load("particles-js", "assets/js/particles.json", function () {
      console.log("particles.js loaded");
    });

    /* Hide nav until scroll */
    const header = document.querySelector("#home header");

    if (header) {
      const revealPoint = window.innerHeight * 0.5;

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

    /* Highlight active section */
    const sections = document.querySelectorAll("[id]");
    const navLinks = document.querySelectorAll(".site-nav a");

    if (sections.length && navLinks.length) {
      const observer = new IntersectionObserver(
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

      sections.forEach((section) => observer.observe(section));
    }
  },
  false
);
