
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Code } from "lucide-react";

// Project data
const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg",
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.example.com",
    featured: true
  },
  {
    title: "E-Commerce Dashboard",
    description: "Adumin dashboard for managing products, orders, and customers.",
    technologies: ["React", "Next.js", "TanStack Query", "Tailwind CSS"],
    image: "/placeholder.svg",
    github: "https://github.com/username/ecommerce-dashboard",
    demo: "https://dashboard.example.com",
    featured: true
  },
  {
    title: "Weather App",
    description: "Real-time weather application with forecasts and location search.",
    technologies: ["JavaScript", "React", "Weather API", "CSS"],
    image: "/placeholder.svg",
    github: "https://github.com/username/weather-app",
    demo: "https://weather.example.com",
    featured: false
  },
  {
    title: "Task Manager",
    description: "A Kanban-style task management application with drag-and-drop functionality.",
    technologies: ["React", "Redux", "DnD Kit", "Styled Components"],
    image: "/placeholder.svg",
    github: "https://github.com/username/task-manager",
    demo: "https://tasks.example.com",
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
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
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
