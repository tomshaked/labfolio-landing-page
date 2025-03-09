
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-md' : 'py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-display font-bold tracking-tight">ARCA LABORATORY</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button variant="outline" size="sm">
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 p-8 animate-fade-in">
            <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
            <Button variant="outline" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Research', href: '#research' },
    { name: 'Team', href: '#team' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-${mobile ? 'lg' : 'sm'} font-medium text-foreground/80 hover:text-primary transition-colors`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
