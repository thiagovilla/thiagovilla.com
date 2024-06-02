import React from "react";

export default function Color({ value, ...props }) {
  return <span style={{ color: value }} {...props} />;
}
