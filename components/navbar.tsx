"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setDarkMode(isDark);
    
    // Apply the theme immediately
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Debug: Log the current state
    console.log('Dark mode:', isDark);
    console.log('HTML classes:', document.documentElement.classList.toString());
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    // Debug: Log after toggle
    console.log('Toggled to:', newMode);
    console.log('HTML classes after toggle:', document.documentElement.classList.toString());
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="w-full px-6 py-4 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">/OA</div>
          <div className="hidden md:flex gap-6 items-center">Loading...</div>
        </div>
      </header>
    );
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors">
          /OA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-lg border dark:border-gray-700 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
};

export default Navbar;