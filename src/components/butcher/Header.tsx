import { Search, ShoppingCart } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

interface HeaderProps {
  mode: "light" | "dark";
  cartCount?: number;
}

const Header = ({ mode, cartCount = 3 }: HeaderProps) => {
  const logo = mode === "light" ? logoLight : logoDark;
  
  const navItems = [
    "Carnes Premium",
    "Nuestra Historia",
    "Recetas",
    "Mayorista",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="CaraNegra" className="h-12 w-12 object-contain" />
          <span className="font-serif text-xl font-semibold tracking-wide">
            CARA<span className="text-primary">NEGRA</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link text-sm font-medium uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search & Cart */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-48 pl-10 pr-4 py-2 text-sm bg-secondary/50 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          
          <button className="relative p-2 rounded-full hover:bg-secondary transition-colors">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs font-bold rounded-full bg-blood-red text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
