import { ScrollRestoration, useLocation } from "react-router-dom";
import { useScrollToLocation } from "hooks/useScrollToLocation";

export const ConditionalScrollRestoration = () => {
  useScrollToLocation();
  const { hash } = useLocation();
  return hash ? null : <ScrollRestoration />;
};
