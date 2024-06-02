import { MDXProvider } from "@mdx-js/react";
import React from "react";

import Color from "./src/components/Color";
import Layout from "./src/Layout";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={{ Color }}>{element}</MDXProvider>;
};
