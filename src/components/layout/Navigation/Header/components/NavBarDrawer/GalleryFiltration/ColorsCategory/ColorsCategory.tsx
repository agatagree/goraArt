import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection, singleArtCollection } from "api";
import { Loader } from "components/common/Loader";
import { GalleryType } from "utils/Types";


export const ColorsCategory = () => {
  const [category, setCategory] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);



  if (load === false) {
    return <Loader />;
  }
  return (
<></>
  )
}


