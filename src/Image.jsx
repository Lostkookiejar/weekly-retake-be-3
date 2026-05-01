import { useEffect, useRef, useState } from "react";
import { storage } from "./firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
export default function Image() {
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);
  const [displayURL, setDisplayURL] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const uploadImage = async () => {
      try {
        const uploadRef = ref(storage, file.name);
        const uploadResponse = await uploadBytes(uploadRef, file);
        const uploadURL = await getDownloadURL(uploadResponse.ref);
        setDisplayURL(uploadURL);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (!file.type.includes("image")) {
      alert("Please upload an image");
    } else {
      uploadImage();
    }
  }, [file]);

  return (
    <>
      helloimage
      <h2>Enter an image</h2>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      {displayURL && (
        <>
          <img src={displayURL} />
        </>
      )}
    </>
  );
}
