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
            Calidad Premium desde 2012
          </span>
          
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight">
            El Mejor{" "}
            <span className={mode === "dark" ? "text-gold" : "text-blood-red"}>
              Cordero
            </span>{" "}
            Argentino
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md">
            Cortes seleccionados a mano de razas autóctonas, madurados a la perfección. 
            Experimentá la carne como debe ser.
          </p>
          
          <button className={mode === "dark" ? "btn-hero-dark" : "btn-hero"}>
            Comprar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
