import { useState } from "react";
import ButcherShopDemo from "@/components/butcher/ButcherShopDemo";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen relative">
      {/* Mode Toggle Button */}
      <button
        onClick={toggleMode}
        className={`fixed top-4 right-4 z-[100] flex items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur transition-all duration-300 ${
          mode === "dark"
            ? "bg-black/80 text-amber-400 hover:bg-black/90"
            : "bg-white/90 text-gray-800 hover:bg-white"
        }`}
        aria-label="Cambiar modo"
      >
        {mode === "dark" ? (
          <>
            <Sun className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Modo Claro</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Modo Oscuro</span>
          </>
        )}
      </button>

      <ButcherShopDemo mode={mode} />
    </div>
  );
};

export default Index;
