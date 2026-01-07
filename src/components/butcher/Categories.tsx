import productBeef from "@/assets/product-beef.jpg";
import productPork from "@/assets/product-pork.jpg";
import productPoultry from "@/assets/product-poultry.jpg";

interface CategoriesProps {
  mode: "light" | "dark";
}

const categories = [
  {
    name: "Carne Madurada",
    description: "Cortes premium madurados 28 días",
    image: productBeef,
  },
  {
    name: "Cerdo Ibérico",
    description: "Cerdo de bellota premium",
    image: productPork,
  },
  {
    name: "Aves de Corral",
    description: "Crianza libre y natural",
    image: productPoultry,
  },
];

const Categories = ({ mode }: CategoriesProps) => {
  return (
    <section className="py-16 px-6">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <h2 className="section-heading">Nuestras Categorías</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explorá nuestra selección de carnes premium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="card-category group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    mode === "dark"
                      ? "bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"
                      : "bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent"
                  }`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-medium mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                  <div 
                    className={`mt-4 inline-flex items-center text-sm font-medium ${
                      mode === "dark" ? "text-gold" : "text-gold"
                    }`}
                  >
                    Comprar →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
