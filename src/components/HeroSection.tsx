
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TypedTitle from "./TypedTitle";
import GreetingAnimation from "./GreetingAnimation";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto w-full flex md:flex-row flex-col items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative rounded-full overflow-hidden w-full h-full bg-muted/30 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
              <img
                src="/Anand.jpg"
                alt="Profile Image"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

        </motion.div>

        {/* Content Column */}
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-2"
            >
              <GreetingAnimation />
              <TypedTitle />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  ANAND SUNDARAMOORTHY SA
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
            >
              Passionate and result-oriented Front-End Developer with expertise in creating
              responsive and user-friendly websites and applications using modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group hover-glow active-press">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-glow active-press">
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
