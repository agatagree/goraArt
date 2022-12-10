export interface GalleryType {
  id: string;
  title: string;
  code: string;
  color: string[];
  technique: string;
  year: number;
  dimensions: {
    width: number;
    height: number;
  };
  img: {
    cover: string;
    wiz: string;
    zoom: string;
  };
  mainPage: boolean;
  mainPageData: {
    mainPagePosition: number;
    title: string;
    description: string;
    icon: string;
  };
}