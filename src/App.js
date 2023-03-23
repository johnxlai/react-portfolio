// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col bg-slate-900 h-100">
      <Header />
      <Main />
      <Footer />
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
    </div>
  );
}

export default App;
