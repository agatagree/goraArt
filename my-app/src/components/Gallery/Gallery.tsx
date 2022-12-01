import { MessagePage } from "../utils/messages/MessagePage";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot } from "../../api/firebaseGetData";
import { galleryCollection } from "../../api/firebaseIndex";
import { Loader } from "../utils/Loader/Loader";

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    onSnapshot(galleryCollection, (singleArt) => {
      setGallery(getDataFromSnapshot(singleArt));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <>
      <MessagePage message={"underConstruction"} />;
    </>
  );
};
