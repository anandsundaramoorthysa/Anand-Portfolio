
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection />
        <Footer />
      </div>
    </PageTransition>
  );
}
