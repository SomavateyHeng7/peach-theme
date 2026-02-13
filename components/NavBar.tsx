// src/components/NavBar.jsx
import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { link: "#about", name: "About" },
  { link: "#projects", name: "Projects" },
  { link: "#contact", name: "Contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "shadow-md" : ""
      } bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 fixed top-0 w-full z-50`}
    >
      <div className="inner max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold">
          Adrian JSM
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group relative">
                <a href={link} className="hover:underline">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              // Sun icon (light mode)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon icon (dark mode)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="contact-btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
