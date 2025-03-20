
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  useEffect(() => {
    document.title = "Blogs | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Lulu Mall: More Than Shoppings🛒 — A Business Viewpoint",
      excerpt: "How businesses capitalize on people's laziness to generate wealth.",
      date: "March 18, 2025",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*z-4VgP_aYX3ciGLLThZvFw.jpeg",
      url: "https://medium.com/@anandsundaramoorthysa/lulu-mall-more-than-shoppings-a-business-viewpoint-763c121549f8"
    },
    {
      title: "Emacs & Org Mode in Windows",
      excerpt: "How I use Emacs in Windows and the challenges I faced.",
      date: "March 18, 2025",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BuBhny8k374jrc90t9UGjA.jpeg",
      url: "https://medium.com/@anandsundaramoorthysa/emacs-org-mode-in-windows-95922d3233b3"
    },
    {
      title: "How Failure Feels?",
      excerpt: "Failure is an unskippable, teaching part of life. But how do we tackle it?",
      date: "March 9, 2025",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*HVlvCWH5s8r3tmUeZjVPhw.jpeg",
      url: "https://medium.com/@anandsundaramoorthysa/how-failure-feels-bb07aaabbb5c"
    },
    {
      title: "Prompting & My Life",
      excerpt: "How prompting changed my life from nothing to a tech & finance enthusiast.",
      date: "March 7, 2025",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*__uylPhQvcbY76Y1Cj18WQ.jpeg",
      url: "https://medium.com/@anandsundaramoorthysa/prompting-my-life-ef76d6d34681"
    },
    {
      title: "The Evolution & Backlash of Developers Using ChatGPT",
      excerpt: "Exploring the positives and negatives of ChatGPT in software development.",
      date: "January 8, 2025",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Wf1fUi5nnUja-mrI-H3pmg.jpeg",
      url: "https://medium.com/@anandsundaramoorthysa/the-evolution-backclash-of-developers-using-chatgpt-20ddfaa698e1"
    },
    {
      title: "ChatGPT & RLHF",
      excerpt: "How ChatGPT provides more accurate data through reinforcement learning.",
      date: "January 7, 2025",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7Soiv4DIWvMe3PhiJfttHA.jpeg",
      url: "https://medium.com/@anandsundaramoorthysa/chatgpt-rlhf-29711a0a1469"
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
            <h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Read my latest articles on Medium
            </p>
            <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="rounded-lg overflow-hidden border border-border bg-background/50 hover:bg-accent/5 hover:shadow-xl transition-all duration-300 h-full flex flex-col card-hover">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded">
                        {post.date}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-primary font-medium">
                        <span>Read on Medium</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" className="group hover-glow active-press">
              <a 
                href="https://medium.com/@anandsundaramoorthysa" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5" />
                View All Articles on Medium
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
