import React from "react";
import BaseLayout from "./BaseLayout";
import "../styles.css";

function MainLayout(props) {
  return (
    <BaseLayout>
      <div className="wrapper">{props.children}</div>
    </BaseLayout>
  );
}

export default MainLayout;
