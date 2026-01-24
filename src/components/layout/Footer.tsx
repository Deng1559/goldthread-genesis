import { Link } from "react-router-dom";
import { FOOTER_CONTENT, SITE_CONFIG } from "@/lib/content";

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
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">M</span>
              </div>
              <span className="font-display font-semibold text-lg">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-white/50">
              {FOOTER_CONTENT.copyright}
            </p>
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
