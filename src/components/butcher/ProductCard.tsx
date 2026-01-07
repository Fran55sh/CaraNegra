import { Heart, Plus } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  mode: "light" | "dark";
}

const weights = ["500g", "1kg", "2kg"];

const ProductCard = ({ product, mode }: ProductCardProps) => {
  const [selectedWeight, setSelectedWeight] = useState("1kg");
  const [isFavorite, setIsFavorite] = useState(false);

  const getPrice = () => {
    const multiplier = selectedWeight === "500g" ? 0.5 : selectedWeight === "2kg" ? 2 : 1;
    return (product.price * multiplier).toFixed(2);
  };

  return (
    <div className="card-product bg-card border border-border group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite 
              ? "bg-blood-red text-white" 
              : "bg-background/80 text-muted-foreground hover:text-blood-red"
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium uppercase tracking-wider bg-background/90 rounded">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-serif text-lg font-medium leading-tight">
          {product.name}
        </h3>

        {/* Weight Selector */}
        <div className="flex gap-2">
          {weights.map((weight) => (
            <button
              key={weight}
              onClick={() => setSelectedWeight(weight)}
              className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                selectedWeight === weight
                  ? mode === "dark"
                    ? "bg-gold text-charcoal"
                    : "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-semibold">€{getPrice()}</span>
            <span className="text-sm text-muted-foreground ml-1">/ {selectedWeight}</span>
          </div>
          
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 ${
              mode === "dark"
                ? "bg-gold text-charcoal hover:bg-gold/90"
                : "bg-blood-red text-white hover:bg-blood-red/90"
            }`}
          >
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
