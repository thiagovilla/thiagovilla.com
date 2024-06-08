import React from "react";

function Blog(props) {
  return (
    <div>
      <h1>{props.pageContext.frontmatter.name}</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Blog;
