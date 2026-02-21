import { Link } from "react-router-dom";
import { FOOTER_CONTENT, SITE_CONFIG } from "@/lib/content";
import mineteckLogo from "@/assets/mineteck-logo.png";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      <div className="container-wide section-padding">
        {/* Disclaimer */}
        <div className="border-b border-white/10 pb-8 mb-8">
          <p className="text-sm text-white/60 leading-relaxed max-w-4xl">
            {FOOTER_CONTENT.disclaimer}
          </p>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-2">
            <Link to="/" className="focus-gold rounded-md">
              <img src={mineteckLogo} alt={SITE_CONFIG.name} className="h-10 w-auto" />
            </Link>
            <div className="text-sm text-white/50 flex flex-col gap-1">
              <p>{FOOTER_CONTENT.copyright}</p>
              <p>
                Made by{" "}
                <a 
                  href={FOOTER_CONTENT.madeBy.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors underline underline-offset-4"
                >
                  {FOOTER_CONTENT.madeBy.label}
                </a>{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {FOOTER_CONTENT.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors focus-gold rounded-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
