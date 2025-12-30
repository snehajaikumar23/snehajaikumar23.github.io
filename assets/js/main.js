document.addEventListener("DOMContentLoaded", () => {
  /* Particles background */
  particlesJS.load("particles-js", "assets/js/particles.json");

  /* Work timeline interaction */
  const timelineItems = document.querySelectorAll(".timeline-item");
  const workDetails = document.querySelectorAll(".work-detail");

  if (timelineItems.length && workDetails.length) {
    timelineItems.forEach((item) => {
      item.setAttribute(
        "aria-selected",
        item.classList.contains("is-active") ? "true" : "false"
      );

      item.addEventListener("click", () => {
        const targetId = item.dataset.role;

        timelineItems.forEach((i) => {
          i.classList.remove("is-active");
          i.setAttribute("aria-selected", "false");
        });

        item.classList.add("is-active");
        item.setAttribute("aria-selected", "true");

        workDetails.forEach((detail) => {
          detail.classList.toggle("is-visible", detail.id === targetId);
        });
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
      });
    });
  }

  /* Nav active section logic */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const heroHeight =
            document.getElementById("particles-js")?.offsetHeight || 0;

          // Prevent activation while hero is visible
          if (window.scrollY < heroHeight - 80) return;

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

  /* Project filtering */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        projectCards.forEach((card) => {
          const category = card.dataset.category;
          card.style.display =
            filter === "all" || category === filter ? "flex" : "none";
        });
      });
    });
  }
});
