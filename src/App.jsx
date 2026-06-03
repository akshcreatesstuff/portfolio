import Aurora from "./components/Aurora";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Podcasts from "./components/Podcasts";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="app-shell">
      <main className="app-content">
        <Aurora />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Works />
        <Podcasts />
      </main>
      <footer className="website-footer">
        <p>Built by Aksh. All rights reserved. &copy;</p>
      </footer>
    </div>
  );
}

export default App;
