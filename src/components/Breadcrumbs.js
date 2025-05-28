import React from "react";
import { Link } from "gatsby";

/**
 * @typedef {Object} BreadcrumbItem
 * @property {string} label - Display text for the item
 * @property {string} [to] - Path to link to (optional for current page)
 */

/**
 * Breadcrumbs navigation component
 *
 * @param {Object} props
 * @param {BreadcrumbItem[]} props.items - Array of breadcrumb items
 */
const Breadcrumbs = ({ items }) => (
  <nav className="breadcrumbs" aria-label="Breadcrumbs" role="navigation">
    <ol role="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={item.isCurrent ? "current" : ""}
          {...(item.to ? { "aria-current": "page" } : {})}
        >
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
