import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/portfolio" },
  { name: "Blogs", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        {
          "bg-background/95 dark:bg-[#05071F]/95 backdrop-blur-lg shadow-md py-2": scrolled,
          "bg-background/60 dark:bg-[#05071F]/95 py-4": !scrolled
        }
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8">
        <Link 
          to="/" 
          className={cn(
            "font-bold transition-all duration-300 hover:opacity-80",
            {
              "text-base md:text-lg": scrolled,
              "text-lg md:text-xl": !scrolled
            }
          )}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/70">
            ANAND SUNDARAMOORTHY SA
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative",
                {
                  "text-primary dark:text-primary": location.pathname === item.path,
                  "text-foreground/80 hover:text-primary dark:text-white/80 dark:hover:text-primary": location.pathname !== item.path,
                  "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:transition-all hover:after:w-1/2": true,
                  "after:bg-primary dark:after:bg-primary": true,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex md:hidden items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full transition-all duration-300 hover:bg-accent/20 text-foreground dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 top-16 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
            "bg-background/95 dark:bg-[#05071F]/95": true,
          }
        )}
      >
        <div className="flex flex-col p-4 space-y-4 h-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "px-4 py-3 rounded-md text-center text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95",
                {
                  "text-primary bg-accent/50 dark:text-primary dark:bg-white/10": location.pathname === item.path,
                  "text-foreground hover:bg-accent/20 dark:text-white dark:hover:bg-white/10": location.pathname !== item.path,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
