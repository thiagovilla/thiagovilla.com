import React from "react";
import BuildTimestamp from "./BuildTimestamp";

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} thiagovilla.com</p>
      <div dangerouslySetInnerHTML={{ __html: BuildTimestamp() }} />
    </footer>
  );
}
