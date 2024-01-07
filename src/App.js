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
          coded by 👩🏻‍💻 <strong>Ada Yeis</strong> | open-sourced on{" "}
          <strong>
            {" "}
            <a
              href="https://github.com/adayeis/my-dictionary-app-react-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
          </strong>{" "}
          | hosten on{" "}
          <strong>
            {" "}
            <a
              href="https://dictionary-react-app-ada-yeis.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>{" "}
          </strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
