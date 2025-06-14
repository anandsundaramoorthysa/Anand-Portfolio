import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Education() {
  useEffect(() => {
    document.title = "Education | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      degree: "Master of Data Science",
      institution: "Loyola College, Chennai",
      period: "June 2025 – May 2027",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Loyola College of Arts & Science, Mettala",
      period: "Aug 2022 – May 2025",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary School",
      institution: "Virudhunagar Hindu Nadar Higher Secondary School, Madurai",
      period: "June 2019 – May 2022",
      icon: GraduationCap,
    },
    {
      degree: "Elementary Education",
      institution: "Harvey Nursery & Primary School, Madura",
      period: "June 2008 – May 2019",
      icon: GraduationCap,
    }
  ];

  const certifications = [
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    description: "Covers JavaScript, Jest testing, and frontend development.",
    icon: Award,
    url: "https://www.coursera.org/account/accomplishments/records/08S27VVFO1W4",
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    description: "Enhances prompt engineering skills for AI-based applications.",
    icon: Award,
    url: "https://learn.deeplearning.ai/accomplishments/e818a064-cb93-4c39-9c37-6767123e87b7",
  },
  {
    title: "Algorithmic Toolbox",
    issuer: "UC San Diego",
    description: "Focuses on algorithms and problem-solving techniques.",
    icon: Award,
    url: "https://www.coursera.org/account/accomplishments/records/8KXZE7AVX5JE",
  },
  {
    title: "Cyber Security and Privacy",
    issuer: "IIT Madras",
    description: "12-week course covering cybersecurity and privacy principles.",
    icon: Award,
    url: "https://drive.google.com/file/d/1QSsMMmClWPEdibO8ET-AzHe6GaDlfZXT/view?usp=drive_link",
  },
  {
    title: "Blockchain and its Application",
    issuer: "IIT Kharagpur",
    description: "Understanding blockchain technology and its applications.",
    icon: Award,
    url: "https://drive.google.com/file/d/1VWpJswEJjQQIu77_D40CrcuR0MdIJWu8/view?usp=drive_link",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    description: "Introduction to AI ethics, generative models, and applications.",
    icon: Award,
    url: "https://www.linkedin.com/learning/certificates/cb659fcd7891bc3bd92e0df9615aa3574efc4e660d163fdca4145776282818c3?trk=share_certificate",
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
            <h1 className="text-3xl md:text-4xl font-bold">Education & Certifications</h1>
            <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-3"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-2 h-6 w-6 text-primary" />
                Education
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="p-6 rounded-lg border border-border bg-background/50 hover:bg-accent/10 shadow-sm transition-all duration-300 card-hover"
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary w-fit mb-4">
                      <edu.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium">{edu.degree}</h3>
                    <p className="text-primary mt-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-3"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center mt-12">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Certifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-lg border border-border bg-background/50 hover:bg-accent/10 shadow-sm card-hover group"
                    onClick={() => window.open(cert.url, "_blank")}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary w-fit mb-4">
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-medium">{cert.title}</h3>
                        <p className="text-primary mt-2">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
                <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" className="group hover-glow active-press">
              <a
                href="https://www.linkedin.com/in/anandsundaramoorthysa/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Award className="mr-2 h-5 w-5" /> 
                View All Certificates
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> 
              </a>
            </Button>
          </motion.div>
        </section>
    </PageTransition>
  );
}
