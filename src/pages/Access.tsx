import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Handshake, CheckSquare, AlertTriangle, Wrench } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubSpotForm } from "@/components/forms/HubSpotForm";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

// Environment variables (placeholders)
const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID || "YOUR_PORTAL_ID";
const HUBSPOT_FORM_INVESTORS = import.meta.env.VITE_HUBSPOT_FORM_ID_INVESTORS || "YOUR_FORM_ID";
const HUBSPOT_FORM_PARTNERS = import.meta.env.VITE_HUBSPOT_FORM_ID_PARTNERS || "YOUR_FORM_ID";
const HUBSPOT_FORM_SERVICES = import.meta.env.VITE_HUBSPOT_FORM_ID_SERVICES || "YOUR_FORM_ID";

type TabType = "investors" | "partners" | "services";

export default function Access() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabType>("investors");
  const [isAccredited, setIsAccredited] = useState(false);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "partners") {
      setActiveTab("partners");
    } else if (hash === "services") {
      setActiveTab("services");
    } else {
      setActiveTab("investors");
    }
  }, [location.hash]);

  const tabs = [
    {
      id: "investors" as TabType,
      label: "Accredited Investors",
      icon: Users,
      description: "Access detailed project materials, financial projections, and legal documentation.",
      requiresAccreditation: true,
      accreditationText: (
        <>
          I confirm that I am an <strong>accredited investor</strong> as 
          defined by SEC Regulation D, or the equivalent under applicable 
          securities laws in my jurisdiction.
        </>
      ),
    },
    {
      id: "partners" as TabType,
      label: "Strategic Partners",
      icon: Handshake,
      description: "Explore collaboration opportunities in operations, technology, and offtake.",
      requiresAccreditation: true,
      accreditationText: (
        <>
          I confirm that I represent a <strong>qualified organization</strong> with 
          relevant capabilities in mining operations, technology, equipment, 
          or commodity offtake.
        </>
      ),
    },
    {
      id: "services" as TabType,
      label: "Request Services",
      icon: Wrench,
      description: "Request consultation for toll milling, remediation, MRU deployment, and more.",
      requiresAccreditation: false,
      accreditationText: null,
    },
  ];

  const activeTabConfig = tabs.find((t) => t.id === activeTab);
  const showAccreditation = activeTabConfig?.requiresAccreditation ?? false;

  const getFormId = () => {
    switch (activeTab) {
      case "investors":
        return HUBSPOT_FORM_INVESTORS;
      case "partners":
        return HUBSPOT_FORM_PARTNERS;
      case "services":
        return HUBSPOT_FORM_SERVICES;
      default:
        return HUBSPOT_FORM_INVESTORS;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-navy py-16 md:py-24">
          <div className="container-narrow text-center">
            <motion.h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible"
            >
              {activeTab === "services" ? "Request Services" : "Request Access"}
            </motion.h1>
            <motion.p
              className="font-body text-lg text-white/80 max-w-2xl mx-auto"
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              animate="visible"
            >
              {activeTab === "services" 
                ? "Tell us about your project requirements. Our team will review your request and provide a customized solution for your mining or remediation needs."
                : "MineTeck project materials are available only to accredited investors and qualified strategic partners. Complete the form below to request access."
              }
            </motion.p>
          </div>
        </section>

        {/* Disclaimer Banner */}
        <section className="bg-gold/10 border-y border-gold/20 py-4">
          <div className="container-wide flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="text-sm text-foreground font-body">
              {activeTab === "services" 
                ? <><strong>Note:</strong> All service inquiries are subject to project evaluation and availability.</>
                : <><strong>Important:</strong> All materials are provided for informational purposes only and do not constitute an offer to sell securities.</>
              }
            </p>
          </div>
        </section>

        {/* Tab Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsAccredited(false);
                    }}
                    className={cn(
                      "flex-1 flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left focus-gold",
                      activeTab === tab.id
                        ? tab.id === "investors"
                          ? "border-gold bg-gold/5"
                          : tab.id === "services"
                            ? "border-forest bg-forest/5"
                            : "border-navy bg-navy/5"
                        : "border-border hover:border-muted-foreground/30"
                    )}
                    aria-pressed={activeTab === tab.id}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        activeTab === tab.id
                          ? tab.id === "investors"
                            ? "bg-gold/20"
                            : tab.id === "services"
                              ? "bg-forest/20"
                              : "bg-navy/20"
                          : "bg-muted"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5",
                          activeTab === tab.id
                            ? tab.id === "investors"
                              ? "text-gold"
                              : tab.id === "services"
                                ? "text-forest"
                                : "text-navy"
                            : "text-muted-foreground"
                        )}
                      />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        {tab.label}
                      </div>
                      <div className="text-sm text-muted-foreground hidden sm:block">
                        {tab.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Form Container */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
              {/* Accreditation Checkbox - Only show for investors/partners */}
              {showAccreditation && (
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={isAccredited}
                        onChange={(e) => setIsAccredited(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                          isAccredited
                            ? "bg-gold border-gold"
                            : "border-border group-hover:border-gold/50"
                        )}
                      >
                        {isAccredited && (
                          <CheckSquare className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-foreground font-body">
                      {activeTabConfig?.accreditationText}
                    </span>
                  </label>
                </div>
              )}

              {/* Legal Disclaimer */}
              <div className="bg-muted/50 border border-border rounded-lg p-4 mb-8">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {activeTab === "services" 
                    ? "By submitting this form, you acknowledge that: (1) service availability is subject to project evaluation and MineTeck's operational capacity; (2) submitted information will be used to assess project requirements; (3) a consultation does not guarantee service provision; (4) MineTeck reserves the right to decline projects at its sole discretion."
                    : "By submitting this form, you acknowledge that: (1) all information provided is for informational purposes only and does not constitute an offer to sell or solicitation to buy securities; (2) past performance does not guarantee future results; (3) all investments involve risk of loss; (4) materials are confidential and may not be shared without written consent; (5) MineTeck reserves the right to deny access at its sole discretion."
                  }
                </p>
              </div>

              {/* Form */}
              <div className={cn(showAccreditation && !isAccredited && "opacity-50 pointer-events-none")}>
                <HubSpotForm
                  portalId={HUBSPOT_PORTAL_ID}
                  formId={getFormId()}
                />
              </div>

              {showAccreditation && !isAccredited && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Please confirm your status above to enable the form.
                </p>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground font-body">
                Questions? Contact us at{" "}
                <a
                  href={activeTab === "services" ? "mailto:services@mineteck.com" : "mailto:investors@mineteck.com"}
                  className="text-gold hover:underline focus-gold rounded-sm"
                >
                  {activeTab === "services" ? "services@mineteck.com" : "investors@mineteck.com"}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
