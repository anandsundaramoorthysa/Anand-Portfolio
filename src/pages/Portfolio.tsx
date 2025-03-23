
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Code, FastForward } from "lucide-react";

// Project data
const projects = [
  {
    title: "Loyola Admission 2K25",
    description: "Develop a Admission Form for Loyola College of Arts & Science, Mettala.",
    technologies: ["React.js", "Express.js", "Node.js", "PostgreSQL"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Loyola-Admission-2K25",
    github: "https://github.com/anandsundaramoorthysa/Loyola-Admission-2K25",
    demo: "https://loyola-admission-2k25.vercel.app/",
    featured: false
  },
  {
    title: "Goldayan",
    description: "Goldayan is a portfolio and blog website for Gold Ayyanar, where I redesigned the CSS to creatively represent 'Gold' in my unique style.",
    technologies: ["Org Mode", "Emacs Lisp", "CSS"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/goldayan.github.io",
    github: "https://github.com/anandsundaramoorthysa/goldayan.github.io",
    demo: "https://anandsundaramoorthysa.github.io/",
    featured: false
  },
  {
    title: "My Portfolio",
    description: "A personal portfolio website showcasing my skills, projects, and blog posts.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN/UI", "Framer Motion"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Anand-Portfolio",
    github: "https://github.com/anandsundaramoorthysa/Anand-Portfolio",
    demo: "https://anand.jigg.win/",
    featured: false
  }
];

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects, focusing on web development and design.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full flex flex-col overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-accent/50 text-accent-foreground text-xs rounded-full px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-end gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover-scale"
                      aria-label="View Github code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover-scale"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
