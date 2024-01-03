import DisplayMultipleMeanings from "./DisplayMultipleMeanings";
import SearchImages from "./SearchImages";

import "./DisplayDefinition.css";

export default function DisplayDefinition(props) {
  if (props.result) {
    if (props.result.status !== "not_found") {
      return (
        <div className="DisplayDefinition">
          <h2>{props.result.word}</h2>
          <h3>
            <em>{props.result.phonetic}</em>{" "}
          </h3>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <DisplayMultipleMeanings meaning={meaning} index={index} />
              </div>
            );
          })}
          <SearchImages keyword={props.result.word} />
        </div>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}
