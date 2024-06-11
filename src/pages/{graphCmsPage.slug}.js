import { graphql } from "gatsby";
import React from "react";

function Page(props) {
  return (
    <div>
      <h1>Page</h1>
      <h1>{props.data.page.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.page.content.html,
        }}
      />
    </div>
  );
}

export default Page;

export const query = graphql`
  query ($id: String) {
    page: graphCmsPage(id: { eq: $id }) {
      title
      slug
      content {
        html
      }
    }
  }
`;
