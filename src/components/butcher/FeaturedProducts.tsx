import ProductCard from "./ProductCard";
import productBeef from "@/assets/product-beef.jpg";
import productPork from "@/assets/product-pork.jpg";
import productPoultry from "@/assets/product-poultry.jpg";
import productLamb from "@/assets/product-lamb.jpg";

interface FeaturedProductsProps {
  mode: "light" | "dark";
}

const products = [
  { id: 1, name: "Dry-Aged Ribeye Steak", price: 42, image: productBeef, category: "Beef" },
  { id: 2, name: "Iberian Pork Secreto", price: 38, image: productPork, category: "Pork" },
  { id: 3, name: "Free-Range Whole Chicken", price: 24, image: productPoultry, category: "Poultry" },
  { id: 4, name: "Frenched Lamb Rack", price: 56, image: productLamb, category: "Lamb" },
  { id: 5, name: "Wagyu Beef Tenderloin", price: 89, image: productBeef, category: "Beef" },
  { id: 6, name: "Organic Duck Breast", price: 32, image: productPoultry, category: "Poultry" },
];

const FeaturedProducts = ({ mode }: FeaturedProductsProps) => {
  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <h2 className="section-heading">Featured Cuts</h2>
            <p className="text-muted-foreground max-w-md">
              Our butchers' selection of the week's finest offerings
            </p>
          </div>
          <a 
            href="#" 
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium ${
              mode === "dark" ? "text-gold hover:text-gold/80" : "text-blood-red hover:text-blood-red/80"
            } transition-colors`}
          >
            View All Products →
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
