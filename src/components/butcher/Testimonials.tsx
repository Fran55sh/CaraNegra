import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsProps {
  mode: "light" | "dark";
}

const testimonials = [
  {
    id: 1,
    quote: "The quality of the meat is exceptional. You can truly taste the difference that proper aging and sourcing makes. My family won't eat meat from anywhere else now.",
    author: "María García",
    location: "Madrid",
  },
  {
    id: 2,
    quote: "As a professional chef, I demand the highest quality ingredients. CaraNegra consistently delivers premium cuts that elevate every dish I create.",
    author: "Chef Antonio Moreno",
    location: "Barcelona",
  },
  {
    id: 3,
    quote: "The Argentinian lamb is simply the best I've ever tasted. The ordering process is seamless and delivery is always on time and perfectly chilled.",
    author: "Carlos Fernández",
    location: "Valencia",
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
          <h2 className="section-heading">What Our Customers Say</h2>
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
