import { useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { motion, useInView } from "framer-motion";
import TypedTitle from "@/components/TypedTitle";

export default function About() {
  useEffect(() => {
    document.title = "About | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <PageTransition>
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary">About Me</h1>
            <div className="mt-3 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="text-2xl font-semibold text-primary">
              <TypedTitle />
            </div>
            <p className="text-lg font-medium text-muted-foreground max-w-2xl">
              𝐓𝐡𝐞 𝐋𝐢𝐟𝐞 𝐢𝐬 𝐧𝐨𝐭 𝐚𝐬 𝐆𝐮𝐞𝐬𝐬. 𝐁𝐮𝐭 𝐰𝐞 𝐚𝐫𝐞 𝐚𝐥𝐰𝐚𝐲𝐬 𝐭𝐫𝐲 𝐭𝐨 𝐛𝐞 𝐛𝐞𝐬𝐭.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5 flex justify-center md:justify-start"
            >
              <div className="relative group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[3/4] w-full max-w-sm bg-muted/30">
                  <img
                    src="Anand3.jpg"
                    alt="ANAND SUNDARAMOORTHY SA"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-medium text-lg">ANAND SUNDARAMOORTHY SA</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: 20 }}
              animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground"
            >
              <p className="text-xl font-semibold text-center md:text-left text-primary">
                Howdy folks! I'm a passionate Developer 👨🏻‍💻 & Prompt Engineer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "💡 Tech Enthusiast & Explorer",
                    text: "I love exploring tools and technologies—Flutter, Firebase, Streamlit, AI/ML, even Emacs & Org Mode for SSG. Continuous learning keeps me agile in a fast-evolving tech world.",
                  },
                  {
                    title: "🤝 Community Engagement",
                    text: "I believe in sharing knowledge. I regularly attend meetups and connect with fellow tech enthusiasts to learn and grow together.",
                  },
                  {
                    title: "🚀 Flutter & Firebase Journey",
                    text: "My journey started with a Flutter Developer internship at Corizo. I gained real-world experience in building scalable apps and integrating Firebase services.",
                  },
                  {
                    title: "🤖 AI/ML with Flask",
                    text: "At DiffuseAI, I worked as an ML Intern on open-source AI models and built web integrations using Flask—turning theory into practical impact.",
                  },
                  {
                    title: "💼 Finance Enthusiast",
                    text: "Outside tech, I'm into personal finance—managing, growing, and investing money while learning about financial independence.",
                  },
                  {
                    title: "✍️ Blogging on Medium",
                    text: "I write about tech and finance with curiosity-driven passion. Medium is where I share what I learn and reflect on my journey.",
                  },
                  {
                    title: "🛠️ Freelancing & Personal Branding",
                    text: "I offer freelance services in web dev, LinkedIn optimization, and branding. Through Chennai Freelancers WhatsApp Group, get my first client in April. Currently helping my clients for a personal branding in LinkedIn.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-5 bg-muted/10 rounded-xl shadow-sm border border-muted flex flex-col justify-between min-h-[200px]"
                  >
                    <h3 className="text-primary text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-base text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-lg font-medium text-primary mt-8">
                Thank you for taking the time to know about me. I look forward to connecting, learning, and collaborating with other enthusiasts.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
