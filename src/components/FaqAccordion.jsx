import React, { memo, useEffect, useState } from "react";
import markdownToHtml from "../utils/markdown-to-html";
import getRelativeTime from "../utils/get-relative-time";
import BadgeList from "./BadgeList";

/**
 * @typedef {Object} Faq
 * @property {string} slug - Unique identifier for the FAQ
 * @property {string} question - The FAQ question text
 * @property {string} answer - Markdown formatted answer text
 * @property {string} category - Category the FAQ belongs to
 * @property {string[]} [tags] - Array of tags associated with the FAQ
 * @property {boolean} featured - Whether this FAQ should be featured
 * @property {string} addedDate - ISO date string when the FAQ was added
 * @property {string|null} source - Optional internal reference code for record keeping
 */

/**
 * Individual FAQ item within the accordion
 * @param {Object} props - Component props
 * @param {Faq} props.faq - FAQ data object
 * @param {boolean} props.isOpen - Whether this FAQ should be displayed open
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} - Rendered FAQ item
 */
const FaqItem = memo(({ faq, isOpen, onClick }) => (
  <article>
    <details
      id={faq.slug}
      open={isOpen}
    >
      <summary onClick={(e) => {
        e.preventDefault(); // Prevent default toggle behavior
        onClick();
      }}>{faq.question}</summary>
      <section>
        <main dangerouslySetInnerHTML={{ __html: markdownToHtml(faq.answer) }} />
        <footer>
          <cite className="badge--primary">{faq.category}</cite>
          <time dateTime={faq.addedDate}>{getRelativeTime(faq.addedDate)}</time>
          {faq.tags?.length > 0 && <BadgeList items={faq.tags} />}
          {faq.source && <span hidden>{faq.source}</span>}
        </footer>
      </section>
    </details>
  </article>
));

/**
 * FAQ Accordion component that handles multiple FAQs with open/close state management
 * @param {Object} props - Component props
 * @param {Faq[]} props.faqs - Array of FAQ data objects
 * @param {boolean} [props.enableUrlHash=false] - Whether to enable URL hash-based navigation
 * @returns {JSX.Element} - Rendered FAQ accordion
 */
const FaqAccordion = ({ faqs, enableUrlHash = false }) => {
  const [openSlug, setOpenSlug] = useState("");

  /**
   * Handle FAQ item click
   * @param {string} slug - The FAQ slug to toggle
   */
  const handleFaqClick = (slug) => {
    if (!enableUrlHash) {
      // Simple toggle if URL hash navigation is disabled
      setOpenSlug(openSlug === slug ? "" : slug);
      return;
    }

    // If the clicked FAQ is already open, close it by clearing the slug and hash
    if (slug === openSlug) {
      setOpenSlug("");
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", window.location.pathname);
      }
    } else {
      // Otherwise, open the clicked FAQ and update the hash
      setOpenSlug(slug);
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#${slug}`);
      }
    }
  };

  // Set up URL hash-based navigation if enabled
  useEffect(() => {
    if (!enableUrlHash || typeof window === "undefined") return;

    const handleInitialHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setOpenSlug(hash);
        // Scroll into view after state update and render
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }, 100);
      }
    };

    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      setOpenSlug(newHash);
    };

    // Handle initial hash on mount
    handleInitialHash();

    // Set up event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [enableUrlHash]);

  return (
    <ul className="faq-accordion">
      {faqs.map(faq => (
        <li key={faq.slug}>
          <FaqItem
            faq={faq}
            isOpen={faq.slug === openSlug}
            onClick={() => handleFaqClick(faq.slug)}
          />
        </li>
      ))}
    </ul>
  );
};

export default FaqAccordion;
