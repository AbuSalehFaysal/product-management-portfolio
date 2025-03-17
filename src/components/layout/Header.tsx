import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-light-surface dark:bg-dark-surface shadow-sm py-4 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-primary-light dark:text-primary-dark"
          >
            PM Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-light-primary dark:text-dark-primary p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // X icon
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu icon
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <li>
                <Link
                  href="/"
                  className="block text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="block text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="block text-light-primary dark:text-dark-primary hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
