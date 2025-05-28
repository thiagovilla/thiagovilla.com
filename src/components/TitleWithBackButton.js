import React from "react";
import { Link } from "gatsby";
import { PiArrowLeft } from "react-icons/pi";

/**
 * Title component with a back navigation button
 *
 * @param {Object} props
 * @param {string} props.title - The page title
 * @param {string} [props.to] - Path to navigate back to
 * @param {string} [props.backLabel="Back"] - Accessible label for back button
 */
const TitleWithBackButton = ({ title, to, backLabel = "Back" }) => (
  <div className="title-with-back">
    <Link to={to || "/"} aria-label={backLabel}>
      <PiArrowLeft size={20} aria-hidden="true" />
    </Link>
    <h1>{title}</h1>
  </div>
);

export default TitleWithBackButton;
