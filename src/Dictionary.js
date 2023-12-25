import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function alertKeyword(event) {
    event.preventDefault();
    alert(`Searcing ${keyword}`);
  }

  function setValue(event) {
    setKeyword(event.target.value);
    console.log(keyword);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={alertKeyword}>
        <input type="search" placeholder="Search" onChange={setValue} />
        <input type="submit" />
      </form>
    </div>
  );
}
