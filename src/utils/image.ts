import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "@/src/firebase/firebase";

export const convertContentImageSrcToLink = (
  content: string,
  contentId: string | number
): Promise<string> => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");

  const imgTags = Array.from(doc.querySelectorAll("img"));

  const uploadPromiseArr = imgTags
    .map((img) => img.src)
    .map((src) => {
      const storageRef = ref(
        storage,
        `image/${contentId}/${Date.now()}-${src.slice(0, 10)}`
      );
      return uploadString(storageRef, src, "data_url");
    });

  return Promise.all(uploadPromiseArr)
    .then((snapshots) => {
      const downloadPromiseArr = snapshots.map((snapshot) =>
        getDownloadURL(snapshot.ref)
      );
      return Promise.all(downloadPromiseArr);
    })
    .then((urls) => {
      urls.forEach((url, idx) => [(imgTags[idx].src = url)]);

      return doc.getElementsByTagName("body")[0].innerHTML;
    });
};
