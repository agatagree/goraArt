import { getCountFromServer } from "firebase/firestore";
import { MessagePage } from "components/layout";
import { galleryCollection } from "api";

export const getGalleryItemNum = async () => {
  try {
    const snapshot = await getCountFromServer(galleryCollection);
    return snapshot.data().count + 1;
  } catch (error) {
    return <MessagePage message={"pageNotFound"} />;
  }
};
