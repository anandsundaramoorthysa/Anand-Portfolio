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
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary">About Me</h1>
            <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* TypedTitle (Animated Intro) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-2xl font-semibold text-primary mb-10"
          >
            <TypedTitle />
          </motion.div>

          {/* First Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Image */}
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
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-medium text-lg">ANAND SUNDARAMOORTHY SA</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: 20 }}
              animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p className="text-xl font-semibold text-primary">
                𝐓𝐡𝐞 𝐋𝐢𝐟𝐞 𝐢𝐬 𝐧𝐨𝐭 𝐚𝐬 𝐆𝐮𝐞𝐬𝐬. 𝐁𝐮𝐭 𝐰𝐞 𝐚𝐫𝐞 𝐚𝐥𝐰𝐚𝐲𝐬 𝐭𝐫𝐲 𝐭𝐨 𝐛𝐞 𝐛𝐞𝐬𝐭.
              </p>
              <p className="text-lg font-medium">Howdy guys! I'm a passionate Developer 👨🏻‍💻 & Prompt Engineer.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1 */}
                <div className="space-y-6">
                  <div className="p-6 bg-muted/20 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary">💡 Tech Enthusiast & Explorer</h3>
                    <p>
                      I explore technologies from Flutter and Firebase to Streamlit and AI/ML. Even Emacs & Org Mode for Static Site Generation. Learning & experimenting keeps me adaptable.
                    </p>
                  </div>

                  <div className="p-6 bg-muted/20 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary">🚀 Flutter & Firebase Journey</h3>
                    <p>
                      My journey began as a Flutter Developer at Corizo. The experience of integrating Firebase services & building scalable mobile apps shaped my development career.
                    </p>
                  </div>

                  <div className="p-6 bg-muted/20 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary">💼 Finance Enthusiast</h3>
                    <p>
                      Beyond tech, I explore finance—investing, managing assets, and understanding financial independence in the modern economy.
                    </p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  <div className="p-6 bg-muted/20 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary">🤝 Community Engagement</h3>
                    <p>
                      I believe in knowledge sharing. I contribute to <strong>KanchiLung</strong>, a Tamil tech community, and work on the <strong>TamilRulePy</strong> Python Package.
                    </p>
                  </div>

                  <div className="p-6 bg-muted/20 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary">🤖 AI/ML with Flask</h3>
                    <p>
                      Alongside my tech pursuits, I’ve developed a keen interest in finance. I’m actively explore to manage, grow, and invest my finances, understanding the importance of financial independence.
                    </p>
                  </div>

                  <div className="p-6 bg-muted/20 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary">✍️ Blog Writer on Medium</h3>
                    <p>
                      As a tech and finance enthusiast, I write about what I learn and understand in both tech and finance with passion, which fuels my curiosity even further.
                    </p>
                  </div>
                </div>
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
