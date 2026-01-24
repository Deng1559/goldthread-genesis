import { useEffect, useRef, useState } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  onReady?: () => void;
  className?: string;
}

export function HubSpotForm({
  portalId,
  formId,
  region = "na1",
  onReady,
  className = "",
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="hsforms"]'
    );

    const loadForm = () => {
      if (window.hbspt && containerRef.current) {
        try {
          window.hbspt.forms.create({
            region,
            portalId,
            formId,
            target: containerRef.current,
            onFormReady: () => {
              setIsLoading(false);
              onReady?.();
            },
          });
        } catch (err) {
          setError("Failed to load form. Please try again later.");
          setIsLoading(false);
        }
      }
    };

    if (existingScript && window.hbspt) {
      loadForm();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.async = true;
      script.defer = true;
      script.onload = loadForm;
      script.onerror = () => {
        setError("Failed to load form script. Please check your connection.");
        setIsLoading(false);
      };
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup form on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [portalId, formId, region, onReady]);

  // Placeholder for demo purposes when env vars are not set
  const isPlaceholder = !portalId || !formId || portalId === "YOUR_PORTAL_ID";

  if (isPlaceholder) {
    return (
      <div className={`bg-muted/50 border border-border rounded-lg p-8 text-center ${className}`}>
        <p className="text-muted-foreground font-body">
          HubSpot Form Placeholder
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Configure NEXT_PUBLIC_HUBSPOT_PORTAL_ID and form IDs to enable
        </p>
        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-border rounded-md font-body focus:ring-2 focus:ring-gold focus:border-gold outline-none"
            disabled
          />
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-3 border border-border rounded-md font-body focus:ring-2 focus:ring-gold focus:border-gold outline-none"
            disabled
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 border border-border rounded-md font-body focus:ring-2 focus:ring-gold focus:border-gold outline-none"
            disabled
          />
          <button
            className="w-full bg-gold text-white font-semibold py-3 rounded-md opacity-50 cursor-not-allowed"
            disabled
          >
            Submit (Demo)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold" />
        </div>
      )}
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-destructive text-sm">
          {error}
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}

// Type declaration for HubSpot
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: HTMLElement;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}
