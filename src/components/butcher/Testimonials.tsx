import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsProps {
  mode: "light" | "dark";
}

const testimonials = [
  {
    id: 1,
    quote: "La calidad de la carne es excepcional. Realmente se nota la diferencia que hace una buena maduración y selección. Mi familia no quiere comer carne de otro lado.",
    author: "María García",
    location: "Buenos Aires",
  },
  {
    id: 2,
    quote: "Como chef profesional, exijo ingredientes de la más alta calidad. CaraNegra siempre entrega cortes premium que elevan cada plato que preparo.",
    author: "Chef Antonio Moreno",
    location: "Córdoba",
  },
  {
    id: 3,
    quote: "El cordero patagónico es simplemente el mejor que probé. El proceso de compra es muy fácil y la entrega siempre llega a tiempo y perfectamente refrigerada.",
    author: "Carlos Fernández",
    location: "Mendoza",
  },
];

const Testimonials = ({ mode }: TestimonialsProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-heading">Lo Que Dicen Nuestros Clientes</h2>
        </div>

        <div className="relative">
          {/* Quote Icon */}
          <Quote 
            className={`absolute -top-4 left-0 h-16 w-16 ${
              mode === "dark" ? "text-gold/20" : "text-primary/20"
            }`}
          />

          {/* Testimonial Content */}
          <div className="text-center px-8 md:px-16">
            <p className="text-xl md:text-2xl leading-relaxed font-serif italic mb-8">
              "{testimonials[current].quote}"
            </p>
            <div className="space-y-1">
              <p className={`font-semibold ${mode === "dark" ? "text-gold" : "text-foreground"}`}>
                {testimonials[current].author}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? mode === "dark" ? "bg-gold w-6" : "bg-primary w-6"
                      : "bg-border"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
