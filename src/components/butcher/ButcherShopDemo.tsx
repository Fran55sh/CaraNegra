import Header from "./Header";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

interface ButcherShopDemoProps {
  mode: "light" | "dark";
}

const ButcherShopDemo = ({ mode }: ButcherShopDemoProps) => {
  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <Header mode={mode} />
        <Hero mode={mode} />
        <Categories mode={mode} />
        <FeaturedProducts mode={mode} />
        <Testimonials mode={mode} />
        <Footer mode={mode} />
      </div>
    </div>
  );
};

export default ButcherShopDemo;
