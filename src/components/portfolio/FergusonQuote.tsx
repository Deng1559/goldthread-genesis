export function FergusonQuote() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FFF8E7' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-gold pl-8">
            <p className="font-playfair text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "This is infrastructure, not speculation. Risk remains — but it's no longer binary. 
              That's what changes the economics."
            </p>
            <footer className="mt-6 text-muted-foreground font-inter">
              — Andrew Ferguson, CEO, Breakthrough Management
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}