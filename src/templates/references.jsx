import React from "react";

function References(props) {
  return (
    <div>
      <h1>REFERENCE:</h1>
      <h1>{props.pageContext.frontmatter.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default References;
