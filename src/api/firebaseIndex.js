import { collection, doc } from "firebase/firestore";
import { db } from "./firebase";

export const urlStorage =
  "https://firebasestorage.googleapis.com/v0/b/gora-b0bf3.appspot.com/o/img%2F";

export const collectionGallery = "gallery";
export const galleryStorage = "/img";
export const galleryCollection = collection(db, collectionGallery);

export const singleArtCollection = (docId) => doc(db, collectionGallery, docId);

export const collectionBanner = "banner";
export const bannerStorage = "/banner";
export const bannerCollection = collection(db, collectionBanner);
