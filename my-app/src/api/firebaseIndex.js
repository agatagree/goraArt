import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const collectionGallery = "gallery";
export const galleryStorage = "/img";

export const galleryCollection = collection(db, collectionGallery);

export const urlStorage =
  "https://firebasestorage.googleapis.com/v0/b/gora-b0bf3.appspot.com/o/img%2F";
// export const urlStorageCD =
//   "?alt=media&token=04d9d94b-f79a-434c-804d-7989ede403e1";

