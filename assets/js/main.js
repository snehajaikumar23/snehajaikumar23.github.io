document.addEventListener("DOMContentLoaded", () => {
  //Particles background
  particlesJS.load("particles-js", "assets/js/particles.json");

  //Work timeline interaction
  const timelineItems = document.querySelectorAll(".timeline-item");
  const workDetails = document.querySelectorAll(".work-detail");

  if (timelineItems.length && workDetails.length) {
    timelineItems.forEach((item) => {
      // Initialize aria state
      item.setAttribute(
        "aria-selected",
        item.classList.contains("is-active") ? "true" : "false"
      );

      // Click interaction
      item.addEventListener("click", () => {
        const targetId = item.dataset.role;

        timelineItems.forEach((i) => {
          i.classList.remove("is-active");
          i.setAttribute("aria-selected", "false");
        });

        item.classList.add("is-active");
        item.setAttribute("aria-selected", "true");

        workDetails.forEach((detail) => {
          detail.classList.toggle(
            "is-visible",
            detail.id === targetId
          );
        });
      });

      // Keyboard accessibility
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
      });
    });
  }

  //Hide nav until scroll
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

  //Highlight active section in nav
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
