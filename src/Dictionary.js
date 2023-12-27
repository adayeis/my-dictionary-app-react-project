import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState({});

  function searchMeaning(response) {
    console.log(response.data);
    setDefinition({
      word: response.data.word,
      phonetic: response.data.phonetic,
      partOfSpeech: response.data.meanings[0].partOfSpeech,
      definition: response.data.meanings[0].definition,
      example: response.data.meanings[0].example,
    });
  }
  function callDictionaryApi(event) {
    if (keyword) {
      event.preventDefault();
      let apiKey = "67ct2f0dc4c74e3fcab1f74do85ff4a4";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(searchMeaning);
    }
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
      <ul>
        <li>{definition.word}</li>
        <li>{definition.phonetic}</li>
        <li>{definition.partOfSpeech}</li>
        <li>{definition.definition}</li>
        <li>{definition.example}</li>
      </ul>
    </div>
  );
}
