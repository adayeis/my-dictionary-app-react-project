import DisplayMultipleMeanings from "./DisplayMultipleMeanings";

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
            <article key={index}>
              <DisplayMultipleMeanings meaning={meaning} index={index} />
            </article>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
