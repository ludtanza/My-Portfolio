import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-primary shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-accent">Portfolio</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300">Home</a>
              <a href="#about" className="text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300">About</a>
              <a href="#portfolio" className="text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-accent focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300 py-2">Home</a>
              <a href="#about" className="block text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300 py-2">About</a>
              <a href="#portfolio" className="block text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300 py-2">Portfolio</a>
              <a href="#contact" className="block text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-300 py-2">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="w-full text-left p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;