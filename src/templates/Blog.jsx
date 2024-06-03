import { graphql } from "gatsby";
import React from "react";

function Blog(props) {
  console.log("page props is", props);
  return (
    <div>
      <h1>{props.data.googleDocs.name}</h1>
      <div>{props.children}</div>
    </div>
  );
}

export const query = graphql`
  query ($slug: String) {
    googleDocs(slug: { eq: $slug }) {
      name
    }
  }
`;

export default Blog;
