import "./DisplayDefinition.css";

export default function DisplayDefinition(props) {
  if (props.result) {
    console.log(props.result);
    return (
      <div className="DisplayDefinition">
        <h2>{props.result.word}</h2>
        <h3>{props.result.phonetic}</h3>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h4>{index + 1}</h4>
              <h5>{meaning.partOfSpeech}</h5>
              <ul>
                <li>{meaning.definition}</li>
                <li>
                  <em>{meaning.example}</em>{" "}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
