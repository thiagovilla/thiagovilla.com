import { graphql } from "gatsby";
import React from "react";

function GlossaryEntry(props) {
  return (
    <div>
      <h1>GlossaryEntry</h1>
      <h1>{props.data.entry.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.entry.descriptionNode.childMarkdownRemark.html,
        }}
      />
    </div>
  );
}

export default GlossaryEntry;

export const query = graphql`
  query PostBySlug($id: String) {
    entry: datoCmsGlossaryEntry(id: { eq: $id }) {
      title
      slug
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
