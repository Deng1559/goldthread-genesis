import { motion, AnimatePresence } from "framer-motion";
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface Step {
  id: string;
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Stepper({ 
  steps, 
  currentStep, 
  className,
  orientation = "horizontal"
}: StepperProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <nav 
      aria-label="Progress" 
      className={cn(
        orientation === "vertical" ? "flex flex-col" : "flex items-center",
        className
      )}
    >
      <ol 
        className={cn(
          "flex",
          orientation === "vertical" 
            ? "flex-col space-y-4" 
            : "items-center space-x-4 md:space-x-8"
        )}
        role="list"
      >
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isCurrent = index === currentStep;
          const isUpcoming = index > currentStep;

          return (
            <li 
              key={step.id} 
              className={cn(
                "flex items-center",
                orientation === "vertical" && "flex-row gap-4"
              )}
            >
              {/* Step indicator */}
              <div className="flex items-center">
                <motion.div
                  initial={prefersReducedMotion ? {} : { scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className={cn(
                    "relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                    isComplete && "bg-gold border-gold",
                    isCurrent && "border-gold bg-gold/10",
                    isUpcoming && "border-border bg-muted"
                  )}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  <AnimatePresence mode="wait">
                    {isComplete ? (
                      <motion.div
                        key="check"
                        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.5 }}
                      >
                        <Check className="h-5 w-5 text-white" aria-hidden="true" />
                      </motion.div>
                    ) : isCurrent ? (
                      <motion.div
                        key="current"
                        initial={prefersReducedMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-3 w-3 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Connector line (horizontal) */}
                {orientation === "horizontal" && index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "hidden md:block w-12 lg:w-24 h-0.5 ml-4 transition-colors duration-300",
                      isComplete ? "bg-gold" : "bg-border"
                    )}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Step content */}
              <div className={cn(
                orientation === "horizontal" ? "ml-3 hidden sm:block" : "flex-1"
              )}>
                <p className={cn(
                  "text-sm font-medium transition-colors",
                  isComplete && "text-gold",
                  isCurrent && "text-charcoal",
                  isUpcoming && "text-muted-foreground"
                )}>
                  {step.label}
                </p>
                {step.description && orientation === "vertical" && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Mobile step indicator */}
      {orientation === "horizontal" && (
        <div className="sm:hidden mt-4 text-center">
          <p className="text-sm font-medium text-charcoal">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]?.label}
          </p>
        </div>
      )}
    </nav>
  );
}

export type { StepperProps };
