import React, { useMemo } from "react";
import { graphql } from "gatsby";

import "./faqs.css";
import BaseLayout from "../layout/BaseLayout";
import FaqAccordion from "../components/FaqAccordion";

/**
 * @type {import("gatsby").PageQuery}
 */
export const query = graphql`
  query AllFaqs {
    allFaqsJson(sort: {fields: addedDate, order: DESC}) {
      nodes {
        slug
        question
        answer
        category
        tags
        featured
        addedDate
        source
      }
    }
  }
`;

/**
 * FAQs page component that displays all FAQs grouped by category
 * @param {Object} props - Component props
 * @param {Object} props.data - GraphQL query results
 * @param {Object} props.data.allFaqsJson - FAQ data from GraphQL
 * @param {Faq[]} props.data.allFaqsJson.nodes - Array of FAQ nodes
 * @returns {JSX.Element} - Rendered FAQs page
 */
const FaqsPage = ({ data: { allFaqsJson: { nodes: faqs } } }) => {
  /**
   * Group FAQs by category
   * @type {Object.<string, Faq[]>}
   */
  const faqsByCategory = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  // Memoize the sorted categories to prevent unnecessary re-sorting on each render
  const sortedCategories = useMemo(() => {
    return Object.entries(faqsByCategory)
      .sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB));
  }, [faqsByCategory]);
  
  return (
    <BaseLayout>
      <div id="faqs-pg" className="container">
        <h1 className="text-h1">Frequently Asked Questions</h1>
        <p className="text-large">
          Find answers to common questions about my services, process, and expertise.
        </p>
  
        <div className="faqs-grid">
          {sortedCategories.map(([category, categoryFaqs]) => (
            <section key={category} className="faq-category-section">
              <h2 className="text-h2">{category}</h2>
              <FaqAccordion faqs={categoryFaqs} enableUrlHash={true} />
            </section>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default FaqsPage;

/**
 * @type {import("gatsby").HeadFC}
 */
export const Head = () => <title>FAQs | Thiago Villa</title>;