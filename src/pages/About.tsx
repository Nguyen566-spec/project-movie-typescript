import { ChangeEvent, useEffect, useState } from "react";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const About = () => {
  const [file, setFile] = useState<File>();
  const [fileDataURL, setFileDataURL] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (!file.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
        return;
      }
      setFile(file);
    }
  };
  useEffect(() => {
    let isCancel = false;
    let fileReader: FileReader;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target?.result && !isCancel) {
          setFileDataURL(e.target.result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <>
      <form>
        <p>
          <label htmlFor="image"> Browse images </label>
          <input
            type="file"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
          />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
      {fileDataURL ? (
        <p className="img-preview-wrapper">
          {<img src={fileDataURL} alt="preview" />}
        </p>
      ) : null}
    </>
  );
};
export default About;
