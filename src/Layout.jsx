import React from "react";
import { Script } from "gatsby";

function Layout(props) {
  return (
    <>
      {props.children}
      <Script src="https://unpkg.com/prismjs@1.29.0/components/prism-core.min.js" />
      <Script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js" />
      <link
        href="https://unpkg.com/prismjs@1.29.0/themes/prism.min.css"
        rel="stylesheet"
      />
    </>
  );
}

export default Layout;
