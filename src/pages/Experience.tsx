import { useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { motion, useInView } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

const ExperienceItem = ({ 
  experience, 
  index, 
  delayMultiplier = 0.1 
}: { 
  experience: any; 
  index: number; 
  delayMultiplier?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * delayMultiplier }}
      className={`relative flex items-start md:items-center flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
      }`}
    >
      <div className="absolute z-10 left-4 md:left-1/2 md:-ml-3 mt-1.5 md:mt-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      
      <div 
        className={`ml-12 md:ml-0 md:w-1/2 ${
          index % 2 === 0 ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <div className="p-5 rounded-lg border border-border bg-background/50 hover:bg-accent/20 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg active:scale-98">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-primary/10 text-primary mt-1">
              <BriefcaseIcon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xl font-medium">{experience.title}</h3>
              <p className="text-primary mt-1">{experience.company}</p>
              <p className="text-sm text-muted-foreground mt-1">{experience.location} | {experience.period}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  useEffect(() => {
    document.title = "Experience | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      title: "Freelancer",
      company: "Self-Employed",
      location: "Remote",
      period: "April 2025 – Present"
    },
    {
      title: "Full Stack Developer",
      company: "DiffuseAI",
      location: "Hosur, Tamil Nadu, India",
      period: "Oct 2024 – Present"
    },
    {
      title: "Machine Learning Intern",
      company: "DiffuseAI",
      location: "Hosur, Tamil Nadu, India",
      period: "Aug 2024 – Oct 2024"
    },
    {
      title: "Tech Research Intern",
      company: "To-Let Globe",
      location: "Lucknow, Uttar Pradesh, India",
      period: "July 2024 – Sep 2024"
    },
    {
      title: "Flutter Developer Intern",
      company: "Corizo",
      location: "Bengaluru, Karnataka, India",
      period: "April 2024 – June 2024"
    }
  ];

  return (
    <PageTransition>
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold">Work Experience</h1>
            <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="mt-16 relative">
            <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-ml-0.5 w-0.5 bg-border"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <ExperienceItem 
                  key={index}
                  experience={exp}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
