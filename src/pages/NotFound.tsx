import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 | Page Not Available - Anand Portfolio";
    console.error("⚠️ 404 Error: User attempted to access:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full p-10 rounded-lg shadow-lg text-center border border-border"
      >
        {/* Enlarged Profile Image in a Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg"
        >
          <img
            src="/favicon.ico"
            alt="Anand Sundaramoorthy SA"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-extrabold text-primary mt-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3"
        >
          <h2 className="text-2xl font-semibold text-foreground">Hi 👋</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            This page is not available. I think you tried to access an unavailable page.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-col gap-4"
        >
          {/* Back to Home Button */}
          <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
            <Link to="/" aria-label="Back to Home">
              <ArrowLeftCircle className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>

          {/* Connect with Me Button */}
          <Button asChild size="lg" className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md">
            <Link to="/contact" aria-label="Connect with Me">
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Connect with Me
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
