import { Link } from "react-router-dom";
import { Linkedin, Mail, Instagram, Send, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold hover:opacity-80 transition-opacity duration-300">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                ANAND SUNDARAMOORTHY SA
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
            LCM'25 | Tech & Finance Enthusiast | Blog Writer | Developer & Prompt Engineer | Explore Which I Love | Unexpected Freelancer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://linkedin.com/in/anandsundaramoorthysa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-125 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="tel:+918012484177" 
              className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-125 transform"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="https://t.me/anandsundaramoorthysa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-125 transform"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a 
              href="https://instagram.com/anandsundaramoorthysa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-125 transform"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:sanand03072005@gmail.com" 
              className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-125 transform"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} ANAND SUNDARAMOORTHY SA. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link to="/" className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              About
            </Link>
            <Link to="/experience" className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Experience
            </Link>
            <Link to="/education" className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Education
            </Link>
            <Link to="/portfolio" className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Projects
            </Link>
            <Link to="/blog" className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Blogs
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
