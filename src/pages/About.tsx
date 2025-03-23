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
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
            <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left Side - Two Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5 flex flex-col items-center md:items-end space-y-6"
            >
              {/* First Image */}
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

              {/* Second Image (Newly Added) */}
              <div className="relative group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[3/4] w-full max-w-sm bg-muted/30">
                  <img
                    src="Anand3.jpg" /* Replace with actual image path */
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

            {/* Right Side - About Me Text */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: 20 }}
              animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-7"
            >
              <div className="mb-6 flex items-center">
                <TypedTitle />
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  𝐓𝐡𝐞 𝐋𝐢𝐟𝐞 𝐢𝐬 𝐧𝐨𝐭 𝐚𝐬 𝐆𝐮𝐞𝐬𝐬. 𝐁𝐮𝐭 𝐰𝐞 𝐚𝐫𝐞 𝐚𝐥𝐰𝐚𝐲𝐬 𝐭𝐫𝐲 𝐭𝐨 𝐛𝐞 𝐛𝐞𝐬𝐭.
                </p>
                <p>
                  Howdy guys! I'm a passionate Developer 👨🏻‍💻 & Prompt Engineer.
                </p>
                <p>
                  💡 <strong>𝐓𝐞𝐜𝐡 𝐄𝐧𝐭𝐡𝐮𝐬𝐢𝐚𝐬𝐭 & 𝐄𝐱𝐩𝐥𝐨𝐫𝐞𝐫</strong> <br />
                  I always love to explore the tools and technologies in development, from Flutter and Firebase to Streamlit and AI/ML. Even I explore an aesthetic Emacs & Org Mode for Static Site Generation. By continuously learning and experimenting with different tools & technologies, I stay agile and adaptable in the fast-evolving tech landscape.
                </p>
                <p>
                  🤝 <strong>𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 𝐄𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭</strong> <br />
                  I believe in the power of knowledge sharing. As a tech enthusiast, I attend meetups and build a network with like-minded individuals. One of the communities I recently explored and contribute to is <strong>KanchiLung</strong>, a Tamil community. I am also working on the <strong>TamilRulePy</strong> Python Package with the help of the community.
                </p>
                <p>
                  🚀 <strong>𝐅𝐥𝐮𝐭𝐭𝐞𝐫 & 𝐅𝐢𝐫𝐞𝐛𝐚𝐬𝐞 𝐉𝐨𝐮𝐫𝐧𝐞𝐲</strong> <br />
                  My journey into cross-platform mobile development began with an internship at Corizo as a Flutter Developer. Despite being a paid internship, I gained invaluable experience in integrating Firebase back-end services and building scalable mobile apps. This experience has been a game-changer in my development career.
                </p>
                <p>
                  🤖 <strong>𝐀𝐈/𝐌𝐋 𝐰𝐢𝐭𝐡 𝐅𝐥𝐚𝐬𝐤</strong> <br />
                  In my internship at DiffuseAI as a Machine Learning Intern, I was exposed to real-world applications of AI. Working with Open Source AI models and integrating them into web projects using Flask has broadened my practical understanding of AI/ML, transitioning from theoretical knowledge to hands-on experience.
                </p>
                <p>
                  📝 <strong>𝐏𝐫𝐨𝐦𝐩𝐭 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 & 𝐀𝐈 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧</strong> <br />
                  As a Prompt Engineer, I specialize in crafting high-quality prompts for optimizing AI interactions. By understanding model behaviors, I fine-tune prompts to enhance accuracy and generate meaningful responses.
                </p>
                <p>
                  Thank you for taking the time to know about me. I look forward to connecting, learning, and collaborating with other enthusiasts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
