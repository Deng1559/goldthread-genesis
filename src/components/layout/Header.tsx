import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-header)]"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="container-wide flex items-center justify-between h-16 md:h-20"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 focus-gold rounded-md"
          aria-label={`${SITE_CONFIG.name} - Home`}
        >
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg">M</span>
          </div>
          <span className={cn(
            "font-display font-semibold text-xl transition-colors",
            isScrolled ? "text-charcoal" : "text-white"
          )}>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className={cn(
                "text-sm font-medium transition-colors focus-gold rounded-md px-2 py-1",
                isScrolled
                  ? "text-charcoal hover:text-gold"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
          <Link to="/access">
            <Button variant="gold" size="default">
              Request Data Room Access
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md focus-gold",
            isScrolled ? "text-charcoal" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container-wide py-4 flex flex-col gap-2">
              {NAV_LINKS.slice(0, -1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-charcoal hover:text-gold py-2 px-3 rounded-md focus-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link to="/access" className="mt-2">
                <Button variant="gold" className="w-full">
                  Request Data Room Access
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
