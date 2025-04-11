
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Skills", url: "#skills" },
  { name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-navy/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="focus-ring">
          <div className="text-accent font-bold text-2xl">GO</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(({ name, url }, i) => (
              <li key={name}>
                <a
                  href={url}
                  className="text-slate hover:text-accent transition-colors nav-text focus-ring"
                >
                  <span className="text-accent">0{i + 1}.</span> {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-accent focus-ring p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 z-50 bg-navy/90 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-full flex-col items-center justify-center">
            <button
              className="absolute top-6 right-6 text-accent focus-ring p-1"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="w-full">
              <ul className="flex flex-col items-center space-y-8">
                {navLinks.map(({ name, url }, i) => (
                  <li key={name}>
                    <a
                      href={url}
                      className="text-slate hover:text-accent transition-colors nav-text text-lg focus-ring"
                      onClick={closeMenu}
                    >
                      <span className="text-accent">0{i + 1}.</span> {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-12">
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
