import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1 container-wide section-padding">
        <article className="max-w-4xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gold mb-2">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">MineTeck LLC — Effective Date: February 21, 2026</p>

          <section className="space-y-6 text-charcoal text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">1. Acceptance of Terms</h2>
              <p>These Terms of Use ("Terms") govern your access to and use of the website: <a href="https://www.mineteck.com" className="text-gold hover:underline">https://www.mineteck.com</a></p>
              <p>By accessing or using this website, you agree to be bound by these Terms. If you do not agree, you should not use this website.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">2. About MineTeck</h2>
              <p>MineTeck LLC is a mineral recovery and environmental reclamation company focused on legacy mining assets, modular recovery systems, and related technologies.</p>
              <p>Information presented on this website is for general informational purposes only and may include project descriptions, environmental initiatives, technology summaries, and business strategies.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">3. No Offer or Solicitation</h2>
              <p>Nothing on this website constitutes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>An offer to sell securities</li>
                <li>A solicitation to purchase securities</li>
                <li>Investment advice</li>
                <li>Financial, legal, or tax advice</li>
              </ul>
              <p className="mt-2">Any investment opportunity, if available, will be offered only through formal offering documents, private placement memoranda, subscription agreements, or other legally required documentation.</p>
              <p>Access to information on this website does not create any investor relationship.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">4. Forward-Looking Statements</h2>
              <p>This website may contain forward-looking statements, including projections, timelines, potential returns, operational expectations, and strategic objectives.</p>
              <p>These statements:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Are based on current expectations</li>
                <li>Involve risks and uncertainties</li>
                <li>May differ materially from actual results</li>
              </ul>
              <p className="mt-2">MineTeck undertakes no obligation to update forward-looking statements unless required by law.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">5. Eligibility</h2>
              <p>This website is intended for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Business professionals</li>
                <li>Industry partners</li>
                <li>Investors</li>
                <li>Individuals seeking general information</li>
              </ul>
              <p className="mt-2">Certain materials may be restricted to accredited investors or qualified participants.</p>
              <p>You represent that you are accessing this website for lawful purposes.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">6. Intellectual Property</h2>
              <p>All content on this website, including but not limited to text, graphics, logos, project descriptions, technical diagrams, branding elements, photographs, and proprietary processes is the property of MineTeck LLC or its licensors and is protected by intellectual property laws.</p>
              <p>You may not reproduce, distribute, modify, republish, or create derivative works without prior written permission.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">7. Confidential Information</h2>
              <p>Certain areas of the website may require NDA execution, investor verification, or controlled access.</p>
              <p>Information provided in data rooms or confidential materials must not be shared, copied, or distributed without written authorization. Unauthorized disclosure may result in legal action.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">8. Website Use Restrictions</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Attempt to gain unauthorized access</li>
                <li>Interfere with site security</li>
                <li>Use automated scraping tools</li>
                <li>Misrepresent your identity</li>
                <li>Upload malicious code</li>
                <li>Use the website for unlawful purposes</li>
              </ul>
              <p className="mt-2">MineTeck reserves the right to restrict access at its discretion.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">9. Third-Party Links</h2>
              <p>This website may contain links to third-party websites. MineTeck does not control or endorse those sites and is not responsible for their content or practices.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">10. Disclaimer of Warranties</h2>
              <p>This website and its content are provided "as is" and "as available."</p>
              <p>MineTeck makes no warranties regarding accuracy, completeness, reliability, timeliness, or suitability for investment decisions.</p>
              <p>You use this website at your own risk.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">11. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, MineTeck LLC shall not be liable for direct or indirect damages, loss of profits, investment losses, business interruption, or reliance on website content — even if advised of the possibility of such damages.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">12. Indemnification</h2>
              <p>You agree to indemnify and hold harmless MineTeck LLC and its officers, directors, employees, and affiliates from any claims arising from your misuse of the website, violation of these Terms, or unauthorized distribution of materials.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">13. Governing Law</h2>
              <p>These Terms shall be governed by the laws of the State of Colorado, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Colorado.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">14. Changes to Terms</h2>
              <p>MineTeck may revise these Terms at any time. Updated versions will be posted with a revised effective date. Continued use of the website constitutes acceptance of updated Terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal mb-2">15. Contact Information</h2>
              <p>For questions regarding these Terms, contact:</p>
              <address className="not-italic mt-2">
                <p>MineTeck LLC</p>
                <p>64 Hyland Dr</p>
                <p>Evergreen, CO 80439</p>
                <p>United States</p>
                <p className="mt-2">Email: <a href="mailto:info@mineteck.com" className="text-gold hover:underline">info@mineteck.com</a></p>
                <p>Website: <a href="https://www.mineteck.com" className="text-gold hover:underline">https://www.mineteck.com</a></p>
              </address>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
