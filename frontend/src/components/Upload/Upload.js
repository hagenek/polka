import React, { useState, useEffect } from "react"
import ImageUploading from "react-images-uploading"
import base64js from 'base64-js'
import axios from 'axios'
import backend from '../../api'

const Upload = ({userId}) => {

  const [images, setImages] = useState([])
  const maxNumber = 69

  useEffect(() => {
    // axios.post("./")
        if (images[0]) {
          const urlString = images[0].data_url
          const urlStringTwo = urlString.split(",")[1]
          const buffer = base64js.toByteArray(urlStringTwo);
/*           axios({
            method: 'post',
            url: `localhost:1337/api/user/avatar/${userId}`,
            data: buffer,
          }); */
          backend.post(`/api/user/avatar/${userId}`, {avatar: buffer})
          // backend.post(`/api/user/image/${userId}`, {url_string: urlStringTwo})
        }
      return () => {
          // cleanup
     }
  }, [images])

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    // Function which adds the image to the database goes here.
    setImages(imageList)
  }

  return (
    <div className="Upload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default Upload
