import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

        <h1 className="text-2xl font-bold text-blue-600">
          Dhanasekar Y
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-700">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <a
          href="/resume.pdf"
          download
          className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium items-center gap-2 transition"
        >
          Resume
          <Download size={18} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-6 gap-5">

            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-white rounded-xl text-center py-3"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;