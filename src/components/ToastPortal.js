import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ToastPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const portal = document.getElementById("toast-portal");
  if (!portal) return null;

  return createPortal(children, portal);
};

export default ToastPortal;
