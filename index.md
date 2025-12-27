---
layout: home
title: Home
---

# About

This is the home page. It can be used for a short introduction. [Click here](cv) to see the full CV, and [here](assets/files/cv.pdf) to download a print version. The theme also ships with a blog: [click here](posts) to scroll posts from the most recent. Finally, [click here](404) to see a page that can't be found.

By default, the theme only contains these few pages in order to stay lean and flexible. However, it can be easily extended to accommodate more pages, [collections](https://jekyllrb.com/docs/collections/), [categories, and tags](https://jekyllrb.com/docs/posts/#tags-and-categories).

{% include archive.html %}


<section id="work" class="wide-section">
  <h2>Work</h2>

  <div class="work-layout">

    <!-- Timeline (left) -->
    <div class="timeline">
      <button type="button" class="timeline-item is-active" data-role="mcmaster" aria-controls="mcmaster"
  aria-selected="true">
        <span class="timeline-date">2024–2025</span>
        <span class="timeline-company">McMaster-Carr</span>
      </button>

      <button type="button" class="timeline-item" data-role="apple-2023">
        <span class="timeline-date">2022–2023</span>
        <span class="timeline-company">Apple</span>
      </button>

      <button class="timeline-item" data-role="apple-2022">
        <span class="timeline-date">Summer 2022</span>
        <span class="timeline-company">Apple</span>
      </button>
    </div>

    <!-- Details (right) -->
    <div class="work-details">

      <div class="work-detail is-visible" id="mcmaster">
        <h3>Software Engineer — McMaster-Carr</h3>
        <p class="work-meta">2024–2025 · Chicago, IL</p>

        <p class="work-skills">
          Infrastructure · Reliability · Automation
        </p>

        <ul>
          <li>Worked on infrastructure and systems projects</li>
          <li>Improved reliability and operational scalability</li>
        </ul>
      </div>

      <div class="work-detail" id="apple-2023">
        <h3>Intern — Apple</h3>
        <p class="work-meta">Summer 2023 · Sunnyvale, CA</p>

        <p class="work-skills">
          Vision Pro · Machine Learning · UX
        </p>

        <ul>
          <li>Built features for Vision Pro applications</li>
          <li>Worked at the intersection of ML and user experience</li>
        </ul>
      </div>

      <div class="work-detail" id="apple-2022">
        <h3>Software Engineering Intern — Apple</h3>
        <p class="work-meta">Summer 2022 · Sunnyvale, CA</p>

        <p class="work-skills">
            iOS · Swift · Vision Pro · UI Engineering
        </p>

        <ul>
            <li>Worked on early-stage features for Apple platforms</li>
            <li>Collaborated with designers and engineers on production code</li>
        </ul>
      </div>

    </div>
  </div>
</section>


<section id="projects" class="wide-section">
  <h2>Projects</h2>

  <!-- Category tabs -->
  <div class="project-filters" role="tablist">
    <button class="filter-btn is-active" data-filter="all" role="tab">All</button>
    <button class="filter-btn" data-filter="papers" role="tab">Papers</button>
    <button class="filter-btn" data-filter="web" role="tab">Web</button>
    <button class="filter-btn" data-filter="ml" role="tab">Machine Learning</button>
  </div>

  <!-- Project grid -->
  <div class="project-grid">

    <!-- Paper -->
    <article class="project-card" data-category="papers">
      <h3>Microglia Gene Expression Analysis</h3>
      <p class="project-desc">
        Machine learning analysis of microglial gene expression to study early life stress.
      </p>
      <div class="project-tags">
        <span>Python</span>
        <span>scikit-learn</span>
        <span>Bioinformatics</span>
      </div>
      <a
    href="https://arxiv.org/abs/XXXX.XXXXX"
    target="_blank"
    rel="noopener"
    class="paper-link">
    Read paper →
    </a>
    </article>

    <!-- Web -->
    <article class="project-card" data-category="web">
      <h3>Mindflow</h3>
      <p class="project-desc">
        A personal AI system that turns notes into structured actions.
      </p>
      <div class="project-tags">
        <span>React</span>
        <span>AWS</span>
        <span>LLMs</span>
      </div>
      <a href="https://github.com/yourusername/mindflow" target="_blank" rel="noopener">
        View on GitHub →
      </a>
    </article>

    <!-- ML -->
    <article class="project-card" data-category="ml">
      <h3>Health & Wellness Recommender</h3>
      <p class="project-desc">
        Agentic recommendation system for personalized wellness shopping.
      </p>
      <div class="project-tags">
        <span>Python</span>
        <span>AWS Bedrock</span>
        <span>ML</span>
      </div>
      <a href="https://github.com/yourusername/wellness-recommender" target="_blank" rel="noopener">
        View on GitHub →
      </a>
    </article>

  </div>
</section>

