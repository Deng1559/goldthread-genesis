import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container-wide section-padding">
        <article className="prose prose-invert max-w-4xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">MineTeck LLC — Effective Date: January 2026</p>

          <section className="space-y-6 text-white/80 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">1. Introduction</h2>
              <p>MineTeck LLC ("MineTeck," "we," "our," or "us") respects your privacy and is committed to protecting the personal information of investors, partners, website visitors, and other stakeholders.</p>
              <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit: <a href="https://www.mineteck.com" className="text-gold hover:underline">https://www.mineteck.com</a></p>
              <p>By using this website, you consent to the practices described below.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">2. Information We Collect</h2>

              <h3 className="text-base font-medium text-white/90 mt-4 mb-2">A. Information You Voluntarily Provide</h3>
              <p>When you submit an Investor Inquiry, request partnership information, contact us through web forms, subscribe to updates, access investor materials, or sign NDAs or request data room access, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Investment status (e.g., accredited investor confirmation)</li>
                <li>Geographic location</li>
                <li>Any information included in your message</li>
              </ul>

              <h3 className="text-base font-medium text-white/90 mt-4 mb-2">B. Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Pages visited</li>
                <li>Referring URLs</li>
                <li>Time spent on pages</li>
                <li>Cookies and tracking data</li>
              </ul>
              <p className="mt-2">This information helps us understand website performance and investor engagement.</p>

              <h3 className="text-base font-medium text-white/90 mt-4 mb-2">C. Investor Due Diligence Data</h3>
              <p>If you enter into a formal relationship with MineTeck (e.g., NDA execution, investment discussions), additional information may be collected consistent with regulatory and compliance obligations, including verification of accredited investor status, identification documentation, corporate documentation, and investment agreements. Such data is handled with strict confidentiality.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to inquiries</li>
                <li>Evaluate investor interest</li>
                <li>Provide requested materials</li>
                <li>Facilitate due diligence processes</li>
                <li>Improve website performance</li>
                <li>Analyze engagement metrics</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Protect against fraud or misuse</li>
              </ul>
              <p className="mt-2 font-medium text-white">We do not sell your personal information.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">4. Cookies & Tracking Technologies</h2>
              <p>MineTeck may use cookies, analytics tools (such as Google Analytics or similar services), and website performance tracking software. These tools help us understand how visitors interact with our content, including investor materials and project information.</p>
              <p>You may disable cookies through your browser settings. However, some site functionality may be affected.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">5. Information Sharing</h2>
              <p>We may share information only under the following circumstances:</p>

              <h3 className="text-base font-medium text-white/90 mt-3 mb-2">A. Service Providers</h3>
              <p>With trusted third-party providers who assist with website hosting, data storage, analytics, secure document management, and investor communications. These providers are contractually obligated to protect your information.</p>

              <h3 className="text-base font-medium text-white/90 mt-3 mb-2">B. Regulatory or Legal Requirements</h3>
              <p>If required to comply with laws or court orders, protect legal rights, or respond to regulatory inquiries.</p>

              <h3 className="text-base font-medium text-white/90 mt-3 mb-2">C. Business Transactions</h3>
              <p>In the event of corporate restructuring, joint ventures, asset sales, or strategic partnerships, information may be transferred under confidentiality agreements.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">6. Data Security</h2>
              <p>We implement reasonable technical and organizational safeguards to protect personal information, including secure hosting environments, encryption where appropriate, restricted access controls, NDA-based access for sensitive data, and role-based data room access for investors.</p>
              <p>However, no system is completely secure. Users transmit information at their own risk.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">7. Data Retention</h2>
              <p>We retain information as long as necessary to fulfill the purpose for which it was collected, as required for regulatory compliance, and as required for investor communication and recordkeeping.</p>
              <p>Upon written request, we will delete personal information where legally permissible.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">8. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have rights to access your personal data, request correction, request deletion, withdraw consent, and request information on how data is used.</p>
              <p>To exercise these rights, contact: <a href="mailto:info@mineteck.com" className="text-gold hover:underline">info@mineteck.com</a></p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">9. International Visitors</h2>
              <p>MineTeck may operate across multiple jurisdictions. By using this website, you acknowledge that your information may be processed in the United States or other locations where our partners and service providers operate.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">10. Investor Disclaimer</h2>
              <p>This website may include forward-looking statements regarding projects, development timelines, and potential returns. Submitting personal information does not constitute an offer to sell securities, a solicitation of investment, or a binding financial agreement. Formal investment participation requires executed documentation.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">11. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">12. Updates to This Policy</h2>
              <p>MineTeck reserves the right to update this Privacy Policy at any time. Updates will be reflected with a revised "Effective Date."</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">13. Contact Information</h2>
              <p>If you have questions regarding this Privacy Policy, please contact:</p>
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
