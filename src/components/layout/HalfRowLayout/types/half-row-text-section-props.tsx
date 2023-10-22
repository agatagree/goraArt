import { ReactNode } from "react";
import { TextVariant } from "components/common";
import { TextSectionLayoutVariant } from "../components/TextSection";

export type HalfRowTextSectionProps = {
  title: string;
  titleVariant?: TextVariant;
  description?: string | null | ReactNode;
  icon?: string;
  textSectionVariant?: TextSectionLayoutVariant;
  isEndingBtn?: boolean;
};
