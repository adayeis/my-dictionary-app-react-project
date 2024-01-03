import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>
            {" "}
            <a href="/">My Dictionary</a>{" "}
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          coded by 👩🏻‍💻 <strong>Ada Yeis</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
