import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function VideoSalesLetter() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-navy/95 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,160,23,0.05)_0%,transparent_50%)]" />
      
      <div className="container-narrow px-4 md:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Headlines */}
          <motion.div variants={fadeUp} className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-gold mb-3 md:mb-4">
              The Story Behind the Renaissance
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Watch: How Zero-Waste Technology Unlocked a Century of Stranded Value
            </p>
          </motion.div>

          {/* Video Player Container */}
          <motion.div 
            variants={fadeUp}
            className="max-w-[800px] mx-auto mb-6 md:mb-8"
          >
            <div 
              className="relative aspect-video bg-charcoal rounded-lg overflow-hidden shadow-2xl shadow-black/40 border border-white/10 cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Placeholder Thumbnail */}
              {!isPlaying && (
                <>
                  {/* Background gradient as placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy/80">
                    {/* Mountain silhouette overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-charcoal/60 border-2 border-gold/30 flex items-center justify-center mb-4">
                        <span className="font-display text-2xl md:text-3xl text-gold">JL</span>
                      </div>
                      <p className="text-white/50 font-mono text-xs md:text-sm">
                        [Video Thumbnail - TO BE PROVIDED]
                      </p>
                      <p className="text-white/40 text-xs mt-1">
                        Jay Lesser • Colorado Mining District
                      </p>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/30 group-hover:scale-110 group-hover:shadow-gold/50 transition-all duration-300">
                      <Play className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-navy ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white/90 font-mono text-xs md:text-sm">
                    8:00
                  </div>
                </>
              )}

              {/* Video Player (placeholder - would be replaced with actual video) */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  {/* Close button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(false);
                    }}
                    className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                  
                  {/* Placeholder for actual video embed */}
                  <div className="text-center p-8">
                    <p className="text-white/60 font-mono text-sm mb-4">
                      [Video Player - TO BE PROVIDED]
                    </p>
                    <p className="text-white/40 text-xs">
                      Replace with Vimeo, Wistia, or custom video embed
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Video Description */}
          <motion.div variants={fadeUp} className="text-center">
            <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6">
              Jay Lesser, Founder & Technology Creator, explains the regulatory gridlock 
              that kept billions in gold untouchable for 80 years—and how his team solved it.{" "}
              <span className="text-white/50">(8 minutes)</span>
            </p>
            
            <Button 
              variant="goldOutline" 
              className="gap-2"
              onClick={() => setIsPlaying(true)}
            >
              <Play className="w-4 h-4" />
              Watch Full Story
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
