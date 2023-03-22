// import logo from './logo.svg';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <h1 className="bg-green-400 custom-class">JOHN LAI'S PORTFOLIO</h1>
      </header> */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
