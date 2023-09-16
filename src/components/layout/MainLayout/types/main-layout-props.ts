import { ReactNode } from "react";

export type MainLayoutProps = {
  children: ReactNode;
  gap?: "g180" | "g120" | "g60";
  fullHeight?: boolean;
};
