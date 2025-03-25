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
              className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p className="text-lg font-medium text-center md:text-left">
                Howdy guys! I'm a passionate Developer 👨🏻‍💻 & Prompt Engineer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "💡 Tech Enthusiast & Explorer",
                    text: "I explore technologies from Flutter and Firebase to Streamlit and AI/ML. Even Emacs & Org Mode for Static Site Generation. Learning & experimenting keeps me adaptable.",
                  },
                  {
                    title: "🚀 Flutter & Firebase Journey",
                    text: "My journey began as a Flutter Developer at Corizo. The experience of integrating Firebase services & building scalable mobile apps shaped my development career.",
                  },
                  {
                    title: "🤝 Community Engagement",
                    text: "I contribute to KanchiLung, a Tamil tech community, and work on the TamilRulePy Python Package.",
                  },
                  {
                    title: "🤖 AI/ML with Flask",
                    text: "As a Machine Learning Intern at DiffuseAI, I worked with Open Source AI models, integrating them into web applications with Flask.",
                  },
                  {
                    title: "💼 Finance Enthusiast",
                    text: "Alongside my tech pursuits, I actively explore ways to manage, grow, and invest my finances, understanding financial independence.",
                  },
                  {
                    title: "✍️ Blog Writer on Medium",
                    text: "As a tech and finance enthusiast, I write about what I learn and understand in both tech and finance with passion, which fuels my curiosity even further.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-muted/20 rounded-lg shadow-md flex flex-col h-full"
                    whileHover={{ scale: 1.03 }}
                  >
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="flex-grow">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-lg font-medium text-primary mt-8">
                Thank you for taking the time to know about me. I look forward to connecting and collaborating with fellow enthusiasts!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
