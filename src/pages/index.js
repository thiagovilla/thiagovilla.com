import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Home Page</h1>
      <p style={paragraphStyles}>This is the home page.</p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Thiago Villa</title>;
