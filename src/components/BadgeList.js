import React from "react";

/**
 * A reusable component for displaying a list of badges
 *
 * @param {Object} props
 * @param {Array<string>} props.items - Array of items to display as badges
 * @param {string} [props.prefix] - Optional prefix to add before each badge (e.g., "#")
 */
const BadgeList = ({ items = [], prefix = "" }) => {
  return (
    <ul className="badge-list text-small">
      {items.map((item) => (
        <li key={item} className="badge">{prefix}{item}</li>
      ))}
    </ul>
  );
};

export default BadgeList;
