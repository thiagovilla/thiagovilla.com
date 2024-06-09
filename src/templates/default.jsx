import React from "react";

function Default(props) {
  return (
    <div>
      <h1>DEFAULT:</h1>
      <h1>{props.pageContext.frontmatter.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Default;
