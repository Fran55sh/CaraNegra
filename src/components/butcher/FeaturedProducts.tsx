import ProductCard from "./ProductCard";
import productBeef from "@/assets/product-beef.jpg";
import productPork from "@/assets/product-pork.jpg";
import productPoultry from "@/assets/product-poultry.jpg";
import productLamb from "@/assets/product-lamb.jpg";

interface FeaturedProductsProps {
  mode: "light" | "dark";
}

const products = [
  { id: 1, name: "Bife de Chorizo Madurado", price: 18500, image: productBeef, category: "Vacuno" },
  { id: 2, name: "Secreto de Cerdo Ibérico", price: 16800, image: productPork, category: "Cerdo" },
  { id: 3, name: "Pollo de Campo Entero", price: 9500, image: productPoultry, category: "Aves" },
  { id: 4, name: "Carré de Cordero", price: 24500, image: productLamb, category: "Cordero" },
  { id: 5, name: "Lomo de Wagyu", price: 45000, image: productBeef, category: "Vacuno" },
  { id: 6, name: "Pechuga de Pato Orgánico", price: 14200, image: productPoultry, category: "Aves" },
];

const FeaturedProducts = ({ mode }: FeaturedProductsProps) => {
  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <h2 className="section-heading">Cortes Destacados</h2>
            <p className="text-muted-foreground max-w-md">
              La selección de nuestros carniceros de la semana
            </p>
          </div>
          <a 
            href="#" 
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium ${
              mode === "dark" ? "text-gold hover:text-gold/80" : "text-blood-red hover:text-blood-red/80"
            } transition-colors`}
          >
            Ver Todos los Productos →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} mode={mode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
