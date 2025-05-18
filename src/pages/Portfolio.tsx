import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, FastForward } from "lucide-react"; // Removed Code import

const projectsData = [
  {
    title: "TamilKavi",
    description: "TamilKavi is a Python package & Dataset.",
    technologies: ["Python"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/tamilkavi",
    github: "https://github.com/anandsundaramoorthysa/tamilkavi",
    demo: "https://pypi.org/project/tamilkavi",
    category: "others",
    completionDate: "April 2025"
  },
  {
    title: "TamilKavi Website",
    description: "TamilKaviWebsite is an website used to describe about the TamilKavi as digitally & help to contribute.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide React"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/TamilKaviWebsite",
    github: "https://github.com/anandsundaramoorthysa/TamilKaviWebsite",
    demo: "https://tamilkavi.com",
    category: "web development",
    completionDate: "April 2025"
  },
  {
    title: "Anand Portfolio",
    description: "A personal portfolio website showcasing my skills, projects, and blog posts.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN/UI", "Framer Motion"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Anand-Portfolio",
    github: "https://github.com/anandsundaramoorthysa/Anand-Portfolio",
    demo: "https://anand.jigg.win/",
    category: "web development",
    completionDate: "April 2025"
  },
  {
    title: "Loyola Admission 2K25",
    description: "Developed an Admission Form for Loyola College of Arts & Science, Mettala.",
    technologies: ["React.js", "Express.js", "Node.js", "PostgreSQL"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Loyola-Admission-2K25",
    github: "https://github.com/anandsundaramoorthysa/Loyola-Admission-2K25",
    demo: "https://loyola-admission-2k25.vercel.app/",
    category: "web development",
    completionDate: "March 2025"
  },
  {
    title: "Goldayan",
    description: "A portfolio and blog website for Gold Ayyanar, where I redesigned the CSS to creatively represent 'Gold' in my unique style.",
    technologies: ["Org Mode", "Emacs Lisp", "CSS"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/anandsundaramoorthysa.github.io",
    github: "https://github.com/anandsundaramoorthysa/anandsundaramoorthysa.github.io",
    demo: "https://anandsundaramoorthysa.github.io/",
    category: "web development",
    completionDate: "March 2025"
  },
  {
    title: "Fraud Detection",
    description: "Detects fraud using IP/email verification via IPQualityScore API. It also provides a detailed report of the verification process using IpQualityScore API.",
    technologies: ["React", "TypeScript", "Express.js", "Node.js", "IPQualityScore API"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Fraud-Detection",
    github: "https://github.com/anandsundaramoorthysa/Fraud-Detection",
    demo: null,
    category: "web development",
    completionDate: "March 2025"
  },
  {
    title: "Final Year Project Ideas",
    description: "A collection of final year project ideas curated from the community.",
    technologies: ["Markdown"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/FinalYear-Project-Ideas",
    github: "https://github.com/anandsundaramoorthysa/FinalYear-Project-Ideas",
    demo: null,
    category: "others",
    completionDate: "March 2025"
  },
  {
    title: "LOYONOVATE 2K25 Symposium",
    description: "Web page for the Department of Computer Science Symposium 2K25 at Loyola College of Arts & Science, Mettala.",
    technologies: ["HTML", "CSS"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/LOYONOVATE-2K25-Symposium-2K25-",
    github: "https://github.com/anandsundaramoorthysa/LOYONOVATE-2K25-Symposium-2K25-",
    demo: "https://loyonovate-2k25-symposium-2k25.vercel.app/",
    category: "web development",
    completionDate: "December 2024"
  },
  {
    title: "Stock Price Alert Telegram Bot",
    description: "A Telegram bot that sends real-time stock price alerts.",
    technologies: ["Python", "Telegram Bot"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Stock-Prize-Alert-Telegram-Bot",
    github: "https://github.com/anandsundaramoorthysa/Stock-Prize-Alert-Telegram-Bot",
    demo: null,
    category: "others",
    completionDate: "November 2024"
  },
  {
    title: "CGPA Calculator",
    description: "A web application to calculate GPA and CGPA with ease.",
    technologies: ["Python", "Streamlit"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/CGPA-Calculator",
    github: "https://github.com/anandsundaramoorthysa/CGPA-Calculator",
    demo: "https://sa-cgpa-calculator.streamlit.app/",
    category: "web development",
    completionDate: "November 2024"
  },
  {
    title: "Internet Speed Finder",
    description: "A simple Flask-based web tool to test your internet speed.",
    technologies: ["Python", "Flask", "Speedtest"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Internet-Speed-Finder",
    github: "https://github.com/anandsundaramoorthysa/Internet-Speed-Finder",
    demo: "https://sa-internet-speed-finder-using-flask.vercel.app/",
    category: "web development",
    completionDate: "October 2024"
  },
  {
    title: "Hostel Attendance App (Lohos)",
    description: "Flutter app to manage student attendance and data at hostels.",
    technologies: ["Flutter", "Firebase"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Hostel-Attendance",
    github: "https://github.com/anandsundaramoorthysa/Hostel-Attendance",
    demo: null,
    category: "app development",
    completionDate: "September 2024"
  },
  {
    title: "Symposium 2K24",
    description: "Web page for the Department of Computer Science Symposium 2K24 at Loyola College of Arts & Science, Mettala.",
    technologies: ["HTML", "CSS"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/Symposium2K24",
    github: "https://github.com/anandsundaramoorthysa/Symposium2K24",
    demo: "https://sa-symposium2k24.vercel.app/",
    category: "web development",
    completionDate: "May 2024"
  },
  {
    title: "YouTube Home Clone",
    description: "A clone of the YouTube homepage using only HTML and CSS.",
    technologies: ["HTML", "CSS"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/youtubehomeclone",
    github: "https://github.com/anandsundaramoorthysa/youtubehomeclone",
    demo: "https://sa-youtubehomeclone.vercel.app/",
    category: "web development",
    completionDate: "May 2024"
  },
  // {
  //   title: "E-Voting App",
  //   description: "A secure and simple e-voting application.",
  //   technologies: ["Flutter", "Firebase"],
  //   image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/FFD700/000000/?Text=E-Voting+App",
  //   github: null,
  //   demo: null,
  //   category: "app development",
  //   completionDate: "May 2024",
  // },
  {
    title: "My Portfolio with Particles.js",
    description: "Portfolio website built using Particles.js and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Particles.js"],
    image: "https://opengraph.githubassets.com/1/anandsundaramoorthysa/My-Portfolio",
    github: "https://github.com/anandsundaramoorthysa/My-Portfolio",
    demo: "https://anandsundaramoorthysa.github.io/My-Portfolio/",
    category: "web development",
    completionDate: "June 2023"
  },
];

// Function to convert a string to title case
const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <PageTransition>
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects, focusing on web development and design.
            </p>

            {/* Floating Filter Buttons Container */}
            <div className="mt-6 flex justify-center">
              <div className="bg-accent/10 rounded-full flex items-center overflow-hidden">
                {["all", "web development", "app development", "others"].map(category => {
                  const displayCategory = titleCase(category);
                  return (
                    <button
                      key={category}
                      className={`text-xs py-2 px-3 transition-colors duration-200
                        ${filter === category
                          ? 'bg-primary text-primary-foreground font-semibold hover:bg-primary/80'
                          : 'bg-accent/50 text-accent-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                      onClick={() => setFilter(category)}
                    >
                      {displayCategory}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredProjects.map((project, index) => (
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
                    {project.completionDate && (
                      <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded">
                        {project.completionDate}
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover-scale"
                        aria-label="View Github code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover-scale"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {/* The third icon and its button have been removed */}
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