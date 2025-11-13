import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './redux/store';
import { toggleTheme } from './redux/themeSlice';
import './App.css';

// ------------------ Navbar ------------------
const Navbar: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Worksjjjj</Link>
      <Link to="/menu">Gallery</Link>
      <Link to="/contact">Contact</Link>

      <button
        onClick={() => dispatch(toggleTheme())}
        className="theme-toggle"
      >
        {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
};

// ------------------ Footer ------------------
const Footer: React.FC = () => (
  <footer>
    &copy; 2025 Shania Sunil | Interior & UI/UX Designer
  </footer>
);

// ------------------ Pages ------------------
const Home: React.FC = () => (
  <div className="page">
    <img src="/profile picture.jpeg" alt="Shania Sunil" className="profile-pic" />
    <h1>Shania Sunil</h1>
    <h2>Interior Designer | UI/UX Designer</h2>
  </div>
);

const About: React.FC = () => (
  <div className="page">
    <h1>About Me</h1>
    <div className="about-box">
      <p>
        Hi, I'm Shania — an interior designer with a foundation in spatial design and a growing passion for human-centered experiences. After completing my BSc in Interior Design and Management, I spent two years crafting commercial and office interiors, blending functionality with aesthetic clarity.
        <br /><br />
        Now, I'm expanding my creative scope through an MSc in Interaction and Experience Design, where I explore how people connect with spaces, systems, and digital environments. My work bridges physical and digital experiences — always with a focus on purposeful, intuitive design.
        <br /><br />
        Let's create meaningful experiences together.
      </p>
    </div>
  </div>
);

const Works: React.FC = () => (
  <div className="page">
    <h1>My Works</h1>
    <p>Here are a few of my Interior Design and Graphic design projects that have been executed.</p>
    <div className="works-grid">
      <div className="work-card">
        <img src="/concentrix.jpg" alt="Concentrix office design" />
        <h3>Concentrix Office Design</h3>
        <p>Modern textures and warm tones for a cozy transformation.</p>
      </div>

      <div className="work-card">
        <img src="/warli 2.jpg" alt="Graphic design for concentrix" />
        <h3>Graphic Design for Concentrix</h3>
        <p>Understood the design requirements and executed the project.</p>
      </div>

      <div className="work-card">
        <img src="/cafe.jpg" alt="Smartworks Cafe" />
        <h3>Smartworks Cafe</h3>
        <p>
          This two-level cafe features a modern rustic design with natural textures like a thatched ceiling and wicker lights,
          combined with industrial elements and a variety of seating areas.
        </p>
      </div>
    </div>
  </div>
);

const Menu: React.FC = () => (
  <div className="page">
    <h1>Gallery</h1>
    <div className="gallery-grid">
      <img src="/office.jpeg" alt="Project 1" className="grid-item item-large" />
      <img src="/cxo lounge mr2.jpeg" alt="Project 2" className="grid-item item-tall" />
      <img src="/cxo lounge mr.jpeg" alt="Project 3" className="grid-item" />
      <img src="/cxo lounge.jpeg" alt="Project 4" className="grid-item item-wide" />
    </div>
  </div>
);

const Contact: React.FC = () => (
  <div className="page">
    <h1>Contact Me</h1>
    <p>Email: shaniasunil17@gmail.com</p>
    <p>Phone: +353 0000000000</p>
  </div>
);

// ------------------ App ------------------
const App: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <Router>
      <div className={`app ${mode}`}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
