import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // On subpages (not homepage), always show solid header
  const isHomepage = location.pathname === "/";
  const showSolidHeader = !isHomepage || isScrolled;

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

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      
      // If not on homepage, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showSolidHeader
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
            showSolidHeader ? "text-charcoal" : "text-white"
          )}>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "font-playfair text-sm font-medium transition-colors focus-gold rounded-md px-2 py-1 relative",
                  showSolidHeader
                    ? "text-navy hover:text-gold"
                    : "text-white/90 hover:text-white",
                  isActive && "text-gold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/access">
            <Button 
              variant="gold" 
              size="default"
              className="font-inter ml-2 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              Investor Inquiry
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md focus-gold",
            showSolidHeader ? "text-charcoal" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu - Full Screen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40"
          >
            <div className="flex flex-col h-full px-6 py-8">
              <nav className="flex flex-col gap-2 flex-1">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={cn(
                        "font-playfair text-lg text-navy hover:text-gold py-3 px-4 rounded-md focus-gold transition-colors border-b border-border/50",
                        isActive && "text-gold bg-gold/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <Link to="/access" className="mt-auto">
                <Button 
                  variant="gold" 
                  className="w-full font-inter text-base py-6 hover:shadow-lg hover:shadow-gold/25"
                >
                  Investor Inquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
