import { HalfRowImgSectionProps } from "./half-row-img-section-props";
import { HalfRowTextSectionProps } from "./half-row-text-section-props";

export interface HalfRowLayoutProps
  extends HalfRowTextSectionProps,
    HalfRowImgSectionProps {
  variant?: "reverse";
}
