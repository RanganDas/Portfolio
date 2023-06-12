import logo from './logo.svg';
import './App.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Achievements } from './components/Achievements';

import car from './car.png';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Skills />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3b0000" stop-opacity="1" />
            <stop offset="100%" stop-color="#46006e" stop-opacity="1" />
          </linearGradient>
          <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0e0020" stop-opacity="1" />
            <stop offset="50%" stop-color="#000000" stop-opacity="1" />
            <stop offset="100%" stop-color="#000a38" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path fill="url(#grad8)" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,165.3C672,171,768,149,864,165.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="url(#grad9)" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,165.3C672,171,768,149,864,165.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>

      <Projects />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgb(13, 0, 34)" stop-opacity="1" />
            <stop offset="100%" stop-color="rgb(13, 0, 34)" stop-opacity="1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3b0000" stop-opacity="1" />
            <stop offset="100%" stop-color="#46006e" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path fill="url(#grad1)" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,165.3C672,171,768,149,864,165.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="url(#grad2)" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,165.3C672,171,768,149,864,165.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>


      <Achievements />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" height="auto">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#992f90" stop-opacity="1" />
            <stop offset="100%" stop-color="#4A2FBD" stop-opacity="1" />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgb(13, 0, 34)" stop-opacity="1" />
            <stop offset="100%" stop-color="rgb(13, 0, 34)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path fill="url(#grad3)" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,133.3C672,85,768,43,864,58.7C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="url(#grad4)"  d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,133.3C672,85,768,43,864,58.7C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>

      <Contact />
      <Footer />


    </div>

  );
}

export default App;
