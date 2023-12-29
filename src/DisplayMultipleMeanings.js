import Synonyms from "./Synonyms";

import "./DisplayMultipleMeanings.css";

export default function DisplayMultipleMeanings(props) {
  return (
    <section className="DisplayMultipleMeanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <ul>
        <li>
          <strong>Definition:</strong> {props.meaning.definition}
        </li>
        <li>
          <em>{props.meaning.example}</em>{" "}
        </li>
        <li>
          <Synonyms synonyms={props.meaning.synonyms} />
        </li>
      </ul>
    </section>
  );
}
