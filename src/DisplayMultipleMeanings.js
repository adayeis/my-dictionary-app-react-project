import "./DisplayMultipleMeanings.css";

export default function DisplayMultipleMeanings(props) {
  return (
    <div className="DisplayMultipleMeanings">
      <h4>{props.index + 1}</h4>
      <h5>{props.meaning.partOfSpeech}</h5>
      <ul>
        <li>{props.meaning.definition}</li>
        <li>
          <em>{props.meaning.example}</em>{" "}
        </li>
      </ul>
    </div>
  );
}
