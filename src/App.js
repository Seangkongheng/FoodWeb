import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <About />
    </>
  );
}

export default App;
