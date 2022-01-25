import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <script src="https://cdn.tailwindcss.com/"></script>

        <div className="bruh">
          <button type="submit">Ethereum</button>
          <button type="submit">Cardano</button>
          <button type="submit">Bitcoin</button>{" "}
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
