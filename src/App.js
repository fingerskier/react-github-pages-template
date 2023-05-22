import logo from './logo.svg'
import './App.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/fingerskier/react-github-pages-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github-Pages hosted React app
        </a>
      </header>

      <main>
        <ul>
          <li>Recreation steps</li>
          <li>Create a new React app repo</li>
          <li>Under repo Settings &gt; Pages set folder to `docs`</li>
          <li>add `BUILD_PATH=docs`</li>
          <li>Build & push</li>
        </ul>
      </main>
    </div>
  );
}


export default App