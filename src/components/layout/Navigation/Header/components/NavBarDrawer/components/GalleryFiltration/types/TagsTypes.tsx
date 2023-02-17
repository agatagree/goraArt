export type ColorType = {
  name: string;
  color: string;
};

export type TagsType = {
  id: string;
  colors: ColorType[];
  shape: string[];
  availability: string[];
  technique: string[];
};