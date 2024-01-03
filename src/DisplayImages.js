import axios from "axios";
import { useState, useEffect } from "react";
import "./DisplayImages.css";

export default function DisplayImages(props) {
  const [images, setImages] = useState("");

  function searchImages(response) {
    setImages(response.data.photos);
  }

  function callApi() {
    let imagesApiKey = `67ct2f0dc4c74e3fcab1f74do85ff4a4`;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${props.keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(searchImages);
  }

  useEffect(() => {
    setImages(null);
  }, [props.keyword]);

  if (images) {
    return (
      <section className="DisplayImages">
        {" "}
        {images.map(function (image, index) {
          return (
            <img key={index} src={image.src.landscape} alt={props.keyword} />
          );
        })}
      </section>
    );
  } else {
    callApi();
  }
}