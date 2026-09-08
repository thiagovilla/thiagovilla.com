# Project Guidelines & Development Rules

## 1. Core Architecture & Styling Philosophy

- **NO Tailwind CSS or Utility Frameworks**:
  - Do not install, import, or introduce Tailwind CSS, Bootstrap, or any atomic/utility CSS frameworks.
  - All styles must reside in standard CSS stylesheets located in `src/styles/` (e.g., `main.css`, `index.css`, `projects.css`, `blog.css`, `faqs.css`).

- **Top-Level Selectors & Cascading Markup**:
  - Structure all CSS rules starting from a top-level page/section ID (e.g., `#hero`, `#projects`, `#contact`, `#proj-list`, `#faqs-hp`) or a semantic top-level component class (e.g., `.project-card`, `.faq-accordion`).
  - Rely on fixed, semantic HTML tags and direct hierarchy/child selectors (e.g., `#contact form > fieldset`, `.project-card > header > h2`, `.project-card footer button`) rather than inventing separate CSS classes for every nested element.

- **Design Tokens**:
  - Always use existing CSS custom properties defined in `src/styles/main.css` for colors, typography scale, and spacing:
    - Colors: `var(--color-primary)`, `var(--color-secondary)`, `var(--color-accent)`, `var(--color-light)`, `var(--color-medium)`, `var(--color-dark)`
    - Spacing: `var(--space-xs)`, `var(--space-sm)`, `var(--space-md)`, `var(--space-lg)`, `var(--space-xl)`, `var(--space-2xl)`, `var(--space-3xl)`
    - Typography: `var(--font-size-caption)`, `var(--font-size-small)`, `var(--font-size-body)`, `var(--font-size-h3)`, `var(--font-size-h2)`, `var(--font-size-h1)`

- **No Inline Styles**:
  - Avoid inline `style={{ ... }}` in React components unless values are dynamically computed at runtime.

---

## 2. Visual Style & Button Specifications

- **NO Rounded Corners**:
  - All buttons, badges, cards, containers, input fields, and accordions must have sharp corners (`border-radius: 0;`).
  - Never add rounded corners (`border-radius: 4px`, `8px`, `9999px`, etc.) to interactive elements, cards, or containers.

- **Top-Right Orange Triangle Accent**:
  - Buttons and primary interactive elements must feature a small top-right orange triangle accent pointing upwards.
  - Standard implementation pattern:

```css
/* Base Button Styling */
.pure-button,
button.btn-accent,
a.btn-accent {
    border-radius: 0;
    position: relative;
    overflow: hidden;
}

/* Top-right triangle accent */
.pure-button::after,
button.btn-accent::after,
a.btn-accent::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-color: transparent var(--color-accent) transparent transparent;
    pointer-events: none;
}

/* On primary buttons where the background is already accent orange */
.pure-button-primary::after,
.hero-btn-primary::after {
    border-color: transparent #ffffff transparent transparent;
}
```

---

## 3. Gatsby & React Standards

- **Component Hierarchy**:
  - Reusable components go in `src/components/`.
  - Layout wrappers go in `src/layout/`.
  - Page routes go in `src/pages/`.
  - Page templates for dynamic routes go in `src/templates/`.
- **Accessibility**:
  - Ensure all interactive elements have proper `aria-label` attributes when they contain only icons or non-descriptive text.
- **Icons**:
  - Use `react-icons` (specifically Phosphor Icons `react-icons/pi`).
