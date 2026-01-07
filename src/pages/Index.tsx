import ButcherShopDemo from "@/components/butcher/ButcherShopDemo";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Light Mode Panel */}
      <div className="w-1/2 overflow-y-auto h-screen relative">
        <div className="absolute top-4 left-4 z-[60] bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
            Light Mode
          </span>
        </div>
        <ButcherShopDemo mode="light" />
      </div>

      {/* Divider */}
      <div className="w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 shadow-lg flex-shrink-0" />

      {/* Dark Mode Panel */}
      <div className="w-1/2 overflow-y-auto h-screen relative">
        <div className="absolute top-4 right-4 z-[60] bg-black/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
            Dark Mode
          </span>
        </div>
        <ButcherShopDemo mode="dark" />
      </div>
    </div>
  );
};

export default Index;
