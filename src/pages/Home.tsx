import { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      {/* SEO Meta Tags */}
      <Helmet>
        {/* Basic SEO */}
        <title>Home | Anand Portfolio</title>
        <meta name="description" content="The official portfolio of Anand Sundaramoorthy SA, showcasing projects, skills, and contact information." />
        <meta name="keywords" content="Anand Sundaramoorthy, Portfolio, Web Developer, Frontend Developer, AI, Machine Learning, Finance Enthusiast, React, Flutter" />
        <meta name="author" content="Anand Sundaramoorthy SA" />

        {/* Canonical URL (Your subdomain) */}
        <link rel="canonical" href="https://anand.jigg.win/" />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="Anand Sundaramoorthy SA | Portfolio" />
        <meta property="og:description" content="Explore my portfolio showcasing projects, skills, and expertise in web development, AI, and finance." />
        <meta property="og:url" content="https://anand.jigg.win/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://anand.jigg.win/Anand.jpg" />

        {/* Twitter Card (For Twitter/X Sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anand Sundaramoorthy SA | Portfolio" />
        <meta name="twitter:description" content="Explore my portfolio showcasing projects, skills, and expertise in web development, AI, and finance." />
        <meta name="twitter:image" content="https://anand.jigg.win/Anand.jpg" />

        {/* Social Media Links */}
        <meta property="og:site_name" content="Anand Portfolio" />
        <meta property="article:author" content="https://www.linkedin.com/in/anandsundaramoorthysa/" />
        <meta property="article:publisher" content="https://www.linkedin.com/in/anandsundaramoorthysa/" />
        <meta property="og:see_also" content="https://www.instagram.com/ehspodcast_/" />
        <meta property="og:see_also" content="https://medium.com/@anandsundaramoorthysa" />
      </Helmet>

      <div className="min-h-screen">
        <HeroSection />
        <Footer />
      </div>
    </PageTransition>
  );
}
