import { HalfRowLayoutVariant } from "../enums/half-row-layout-variant";
import { HalfRowImgSectionProps } from "./half-row-img-section-props";
import { HalfRowTextSectionProps } from "./half-row-text-section-props";

export interface HalfRowLayoutProps
  extends HalfRowTextSectionProps,
    HalfRowImgSectionProps {
  variant?: HalfRowLayoutVariant;
}
