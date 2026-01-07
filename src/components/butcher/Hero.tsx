import heroImage from "@/assets/hero-meat.jpg";

interface HeroProps {
  mode: "light" | "dark";
}

const Hero = ({ mode }: HeroProps) => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium meat cuts"
          className="w-full h-full object-cover"
        />
        <div 
          className={`absolute inset-0 ${
            mode === "light" 
              ? "bg-gradient-to-r from-background/90 via-background/60 to-transparent"
              : "bg-gradient-to-r from-background/95 via-background/70 to-background/30"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center px-6">
        <div className="max-w-xl space-y-6 animate-fade-up">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Premium Quality Since 2012
          </span>
          
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight">
            The Finest{" "}
            <span className={mode === "dark" ? "text-gold" : "text-blood-red"}>
              Argentinian
            </span>{" "}
            Lamb Meat
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md">
            Hand-selected cuts from heritage breeds, dry-aged to perfection. 
            Experience meat as nature intended.
          </p>
          
          <button className={mode === "dark" ? "btn-hero-dark" : "btn-hero"}>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
