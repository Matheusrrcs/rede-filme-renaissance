
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import LatestNews from "@/components/LatestNews";
import TrendingMovies from "@/components/TrendingMovies";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <LatestNews />
        <TrendingMovies />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
