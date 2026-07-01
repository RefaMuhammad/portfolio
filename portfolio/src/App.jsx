import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Import Komponen Layout
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

// Import Halaman
import Beranda from "./pages/Beranda/Beranda";
import About from "./pages/About/About";
import Roles from "./pages/Roles/Roles";
// import Kontak from './pages/Kontak';

function App() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* <Navbar /> */}

      <main className="flex-grow">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/about" element={<About />} />
          <Route path="/roles/:id" element={<Roles />} />
          {/* <Route path="/kontak" element={<Kontak />} /> */}
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
