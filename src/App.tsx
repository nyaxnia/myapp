import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './redux/store';
import { toggleTheme } from './redux/themeSlice';
import './App.css';

// Public asset helper
const asset = (path: string) => import.meta.env.BASE_URL + path;

// ------------------ Navbar ------------------
const Navbar: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/menu">Gallery</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>

      <button onClick={() => dispatch(toggleTheme())} className="theme-toggle">
        {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
};

// ------------------ Footer ------------------
const Footer: React.FC = () => (
  <footer>&copy; 2025 Shania Sunil | Interior & UI/UX Designer</footer>
);

// ------------------ Pages ------------------
const Home: React.FC = () => (
  <div className="page">
    <img src={asset("profile_picture.jpeg")} alt="Shania Sunil" className="profile-pic" />
    <h1>Shania Sunil</h1>
    <h2>Interior Designer | UI/UX Designer</h2>
  </div>
);

const About: React.FC = () => (
  <div className="page">
    <h1>About Me</h1>
    <div className="about-box">
      <p>
        Hi, I'm Shania — an interior designer with a foundation in spatial design and a growing passion for human-centered experiences.
        <br /><br />
        After completing my BSc in Interior Design and Management, I spent two years crafting commercial and office interiors.
        <br /><br />
        Now, I'm expanding my creative scope through an MSc in Interaction and Experience Design.
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
        <img src={asset("concentrix.jpg")} alt="Concentrix office design" />
        <h3>Concentrix Office Design</h3>
        <p>Modern textures and warm tones for a cozy transformation.</p>
      </div>

      <div className="work-card">
        <img src={asset("warli 2.jpg")} alt="Graphic design for Concentrix" />
        <h3>Graphic Design for Concentrix</h3>
        <p>Understood the design requirements and executed the project.</p>
      </div>

      <div className="work-card">
        <img src={asset("cafe.jpg")} alt="Smartworks Cafe" />
        <h3>Smartworks Cafe</h3>
        <p>This two-level cafe features a modern rustic design.</p>
      </div>
    </div>
  </div>
);

const Menu: React.FC = () => (
  <div className="page">
    <h1>Gallery</h1>

    <div className="gallery-grid">
      <img src={asset("office.jpeg")} className="grid-item item-large" alt="Office" />
      <img src={asset("cxo lounge mr2.jpeg")} className="grid-item item-tall" alt="Project 2" />
      <img src={asset("cxo lounge mr.jpeg")} className="grid-item" alt="Project 3" />
      <img src={asset("cxo lounge.jpeg")} className="grid-item item-wide" alt="Project 4" />
    </div>
  </div>
);

const Blog: React.FC = () => (
  <div className="page blog-page-horizontal slide-in">
    <h1>Blog</h1>
    <p className="blog-intro">
      Each image below reflects a unique facet of my journey — aesthetic, passion, and professionalism.
    </p>

    <div className="blog-horizontal-row">
      <div className="blog-card">
        <img src={asset("formal.jpeg")} className="blog-image-portrait" alt="Business photo" />
        <h2>Business click</h2>
        <p><strong>Camera:</strong> iPhone 16 Pro<br />
        <strong>Focal Length:</strong> 3.4x — This telephoto lens captures crisp detail from a distance.</p>
      </div>

      <div className="blog-card">
        <img src={asset("EYE.jpeg")} className="blog-image-portrait" alt="Passion" />
        <h2>Passion</h2>
        <p><strong>Camera:</strong> iPhone 16 Pro<br />
        <strong>Focal Length:</strong> 1x — Perfect for documenting spontaneous, intimate moments.</p>
      </div>

      <div className="blog-card">
        <img src={asset("CLOCK.jpeg")} className="blog-image-portrait" alt="Aesthetic photo" />
        <h2>Aesthetic click</h2>
        <p><strong>Camera:</strong> iPhone 16 Pro<br />
        <strong>Focal Length:</strong> 1.6x — Ideal for capturing architectural details.</p>
      </div>
    </div>

    {/* Side arrow to video page */}
    <Link to="/blog/video" className="side-arrow">➡ Watch Sunglasses Commercial</Link>
  </div>
);

const BlogVideo: React.FC = () => (
  <div className="page blog-video-page slide-in">
    <h1>Sunglasses Commercial</h1>
    <p>This video was created by me and my team members as part of a creative project.</p>

    <div className="video-container">
      <video controls className="sunglasses-video">
        <source src={asset("sunglasses_commercial.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <Link to="/blog" className="back-arrow">⬅ Back to Blog</Link>
  </div>
);

const Contact: React.FC = () => (
  <div className="page">
    <h1>Contact Me</h1>
    <p>Email: shaniasunil17@gmail.com</p>
    <p>Phone: +353 0000000000</p>

    <a
      href={asset("RESUME 2025.pdf")}
      download
      className="cv-button"
    >
      📄 Download My CV
    </a>
  </div>
);

// ------------------ App ------------------
const App: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/myapp"}>
      <div className={`app ${mode}`}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/video" element={<BlogVideo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;