import React from "react";

import Layout from "./src/Layout";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
