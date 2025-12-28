import { useEffect } from 'react';
import './App.css';
import './assets/css/master.css';
import './assets/css/media.css';
import { HomePage } from './pages/HomePage/HomePage';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 600,  // reduced from 1000ms to 600ms
      once: true,     // run only once
      offset: 50,     // trigger animations earlier (50px before element comes into view)
      delay: 0,       // no global delay
    });
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
