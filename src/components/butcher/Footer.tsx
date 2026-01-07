import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

interface FooterProps {
  mode: "light" | "dark";
}

const Footer = ({ mode }: FooterProps) => {
  const logo = mode === "light" ? logoLight : logoDark;

  return (
    <footer className="border-t border-border bg-secondary/50 py-12 px-6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="CaraNegra" className="h-10 w-10" />
              <span className="font-serif text-lg font-semibold">CARANEGRA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Carnes premium argentinas desde 2012. Calidad que se nota.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Todos los Productos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Vacuno</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cordero</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cerdo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustentabilidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mayorista</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Mantenete Informado</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Suscribite para ofertas exclusivas y recetas.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button 
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  mode === "dark"
                    ? "bg-gold text-charcoal hover:bg-gold/90"
                    : "bg-blood-red text-white hover:bg-blood-red/90"
                }`}
              >
                Unirme
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 CaraNegra. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
