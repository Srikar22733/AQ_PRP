import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/navBar';
import Home from './pages/home';
// import Login from './Pages/Login'
// import SignUp from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme>
        <Navbar />
        <Home />
      </ThemeProvider>
      {/* <Login />
      <SignUp /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
