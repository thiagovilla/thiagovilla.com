import React from "react";
import BaseLayout from "./BaseLayout";

function MainLayout(props) {
  return (
    <BaseLayout>
      <div className="container">{props.children}</div>
    </BaseLayout>
  );
}

export default MainLayout;
