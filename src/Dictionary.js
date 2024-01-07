import { useState } from "react";
import axios from "axios";
import DisplayDefinition from "./DisplayDefinition";
import DisplayImages from "./DisplayImages";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [images, setImages] = useState("");

  function searchMeanings(response) {
    setResult(response.data);
  }

  function searchImages(response) {
    setImages(response.data.photos);
  }

  function callDictionaryApi(event) {
    event.preventDefault();
    let apiKey = "67ct2f0dc4c74e3fcab1f74do85ff4a4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(searchMeanings);

    let imagesApiKey = `67ct2f0dc4c74e3fcab1f74do85ff4a4`;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(searchImages);
  }

  function setValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={callDictionaryApi}>
        <input type="search" placeholder="Search" onChange={setValue} />
        <input type="submit" value="Search" />
      </form>
      <DisplayDefinition result={result} />
      <DisplayImages image={images} />
    </div>
  );
}
