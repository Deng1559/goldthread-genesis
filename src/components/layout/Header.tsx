import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/content";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "The Renaissance",
    dropdown: [
      { label: "The 80-Year Silence", href: "/renaissance#silence" },
      { label: "The Breakthrough", href: "/renaissance#breakthrough" },
      { label: "The Convergence", href: "/renaissance#convergence" },
      { label: "Infrastructure Thesis", href: "/renaissance#infrastructure" },
      { label: "Full Story", href: "/renaissance" },
    ],
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Technology",
    dropdown: [
      { label: "The MRU", href: "/technology#mru" },
      { label: "Zero-Waste Process", href: "/technology#process" },
      { label: "Regulatory Validation", href: "/technology#validation" },
      { label: "Permitting Expertise", href: "/technology#permitting" },
    ],
  },
  {
    label: "Invest",
    dropdown: [
      { label: "What This Isn't", href: "/why-invest#what-this-isnt" },
      { label: "Why Now?", href: "/why-invest#why-now" },
      { label: "Fund Structure", href: "/why-invest#structure" },
      { label: "Inquiry Form", href: "/access" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "Toll Milling", href: "/services#toll-milling" },
      { label: "MRU Deployment", href: "/services#mru" },
      { label: "Pre-Mining Consultation", href: "/services#pre-mining" },
      { label: "Reclamation & Remediation", href: "/services#reclamation" },
      { label: "Project Management", href: "/services#project-management" },
      { label: "Material Testing", href: "/services#testing" },
      { label: "Request Services", href: "/access#services" },
    ],
  },
  {
    label: "About",
    dropdown: [
      { label: "Andrew Ferguson", href: "/about/andrew-ferguson" },
      { label: "MineTeck", href: "/about#mineteck" },
      { label: "Breakthrough Management", href: "/about#breakthrough" },
      { label: "Contact", href: "/about#contact" },
    ],
  },
];

// Custom hook for handling hash navigation
function useHashNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // Check if href contains a hash
    const hasHash = href.includes("#");
    
    if (!hasHash) {
      // Regular navigation, let Link handle it
      return;
    }

    e.preventDefault();
    
    const [path, hash] = href.split("#");
    const targetPath = path || "/";
    const currentPath = location.pathname;

    if (currentPath === targetPath) {
      // Same page, just scroll to element
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Different page, navigate first then scroll
      navigate(targetPath);
      // Use setTimeout to wait for navigation and DOM update
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return handleNavClick;
}

function DropdownMenu({ 
  items, 
  isOpen, 
  onClose,
  onNavClick
}: { 
  items: DropdownItem[]; 
  isOpen: boolean; 
  onClose: () => void;
  onNavClick: (e: React.MouseEvent, href: string) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-2 w-56 bg-navy/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 overflow-hidden z-50"
        >
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => {
                  onNavClick(e, item.href);
                  onClose();
                }}
                className="block px-4 py-2.5 text-sm font-inter text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavDropdown({ 
  item, 
  isActive,
  onNavClick
}: { 
  item: NavItem; 
  isActive: boolean;
  onNavClick: (e: React.MouseEvent, href: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 font-inter text-sm font-medium transition-colors focus-gold rounded-md px-3 py-2",
          "text-white/90 hover:text-gold",
          isActive && "text-gold"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      {item.dropdown && (
        <DropdownMenu 
          items={item.dropdown} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          onNavClick={onNavClick}
        />
      )}
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const handleNavClick = useHashNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location]);

  // Handle hash on initial load and route changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy shadow-lg"
          : "bg-navy/95 backdrop-blur-md"
      )}
      role="banner"
    >
      <nav
        className="container-wide flex items-center justify-between h-16 md:h-18"
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
            <span className="text-navy font-display font-bold text-lg">M</span>
          </div>
          <span className="font-display font-semibold text-xl text-white">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href 
              ? location.pathname === item.href
              : item.dropdown?.some(d => location.pathname + location.hash === d.href);

            if (item.dropdown) {
              return (
                <NavDropdown 
                  key={item.label} 
                  item={item} 
                  isActive={isActive || false}
                  onNavClick={handleNavClick}
                />
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href!}
                className={cn(
                  "font-inter text-sm font-medium transition-colors focus-gold rounded-md px-3 py-2",
                  "text-white/90 hover:text-gold",
                  isActive && "text-gold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link to="/access" className="ml-3">
            <Button 
              variant="gold" 
              size="default"
              className="font-inter font-semibold hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              Investor Inquiry
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md focus-gold text-white"
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
            className="lg:hidden fixed inset-0 top-16 bg-navy z-40 overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-6 py-6">
              <nav className="flex flex-col gap-1 flex-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = item.href 
                    ? location.pathname === item.href
                    : false;

                  if (item.dropdown) {
                    const isDropdownOpen = openMobileDropdown === item.label;
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className={cn(
                            "w-full flex items-center justify-between font-inter text-base text-white/90 hover:text-gold py-3 px-4 rounded-md focus-gold transition-colors",
                            isDropdownOpen && "text-gold bg-white/5"
                          )}
                        >
                          {item.label}
                          <ChevronDown 
                            className={cn(
                              "w-5 h-5 transition-transform duration-200",
                              isDropdownOpen && "rotate-180"
                            )} 
                          />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 py-2 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    onClick={(e) => {
                                      handleNavClick(e, subItem.href);
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className="block font-inter text-sm text-white/70 hover:text-gold py-2 px-4 rounded-md transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href!}
                      className={cn(
                        "font-inter text-base text-white/90 hover:text-gold py-3 px-4 rounded-md focus-gold transition-colors",
                        isActive && "text-gold bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="pt-6 border-t border-white/10">
                <Link to="/access">
                  <Button 
                    variant="gold" 
                    className="w-full font-inter font-semibold text-base py-6 hover:shadow-lg hover:shadow-gold/25"
                  >
                    Investor Inquiry
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
