import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 py-4`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-cyan-100/40 backdrop-blur-md  shadow-sm rounded-xl p-4">
        <Link to="/" className="text-xl font-bold myName">
          {"<"}Jubayer {"/>"}
        </Link>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <BiMenu size={28} />
          </button>
        </div>

        {/* Desktop*/}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-medium hover:text-cyan-500 hover:underline underline-offset-8 transition-colors group"
              >
                {link.name}
              </Link>
            );
          })}
          <button className="hover:text-cyan-500" title="My GitHub">
            <a href="https://github.com/jubayerahmmad">
              <FaGithub size={24} />
            </a>
          </button>
        </nav>

        {/* Mobile*/}
        {isMenuOpen && (
          <nav className="fixed inset-0 z-50 bg-black text-white h-screen p-6 pt-24 flex flex-col md:hidden animate-fade-in">
            <div className="absolute top-5 right-5">
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <RxCross2 size={28} />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-lg font-medium py-4 border-b border-muted hover:text-cyan-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
