import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";

function ImageUpload(props) {
  const imageToggleRef = useRef();
  const [file, setFile] = useState();
  const [previewImage, setPreviewImage] = useState();

  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickerHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
    props.onInput(pickedFile, props.id);
  };

  const pickImageHandler = () => {
    imageToggleRef.current.click();
  };

  return (
    <div>
      <input
        className="form-control"
        ref={imageToggleRef}
        type="file"
        id={props.id}
        name={props.id}
        accept=".jpg,.jpeg"
        style={{ display: "none" }}
        onChange={pickerHandler}
      />
      <div className="container mb-2 text-center">
        <div className="text-center">
          {previewImage && (
            <img
              src={previewImage}
              alt="preview"
              width={"250px"}
              height={"200px"}
              className="m-3"
            />
          )}
        </div>
        <Button name="Pick Image" type="secondary" onClick={pickImageHandler} />
      </div>
    </div>
  );
}

export default ImageUpload;
