import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * Ensures the page scrolls to the top on route change.
 * Place this at the top of your page or layout.
 */
export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
  return null;
}
