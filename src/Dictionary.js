import { useState } from "react";
import axios from "axios";
import DisplayDefinition from "./DisplayDefinition";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function searchMeanings(response) {
    setResult(response.data);
  }

  function callDictionaryApi(event) {
    event.preventDefault();
    let apiKey = "67ct2f0dc4c74e3fcab1f74do85ff4a4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(searchMeanings);
  }

  function setValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={callDictionaryApi}>
        <input type="search" placeholder="Search" onChange={setValue} />
        <input type="submit" />
      </form>
      <DisplayDefinition result={result} />
    </div>
  );
}
