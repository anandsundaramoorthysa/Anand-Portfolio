import { useEffect, useState } from "react";
 import PageTransition from "@/components/PageTransition";
 import { motion } from "framer-motion";
 import { ArrowRight, FileText } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
 } from "@/components/ui/dialog";

 const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(function (word) {
   return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
 }

 // Function to generate a slug from a title
 const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
 };

 // Export this for use in the [slug].tsx page
 export const blogPostsData = [
  {
   "title": "The Impact of AI Tools Like Lovable.dev on Developers",
   "excerpt": "To be honest, I was shocked when I used Lovable.dev. It made me fearful about job prospects. To know more about it. Check...",
   "date": "April 4, 2025",
   "image": "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*EtCYmx4IehmP-qkjTve8bw.png",
   "url": "https://medium.com/@anandsundaramoorthysa/the-impact-of-ai-tools-like-lovable-dev-on-developers-3953eb18485f",
   "category": ["Tech"],
   "slug": generateSlug("13the-impact-of-ai-tools-like-lovable-dev-on-developers")
  },
  {
   "title": "Books vs. Audiobooks: Which One is Best?",
   "excerpt": "Which Book is best to learn, Books or Audio Books. Check it out my blog to know more about it...",
   "date": "April 4, 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Uoj-cc8zbosK62eT_qc9sw.png",
   "url": "https://medium.com/@anandsundaramoorthysa/books-vs-audiobooks-which-one-is-best-5429667a0609",
   "category": ["Others"],
   "slug": generateSlug("12books-vs-audiobooks-which-one-is-best")
  },
  {
   "title": "Lulu Mall: More Than Shoppings🛒 — A Business Viewpoint",
   "excerpt": "\"Use people's laziness and become rich.\" If someone can capitalize on people's laziness, they can become rich. Check my blog...",
   "date": "March 18, 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*z-4VgP_aYX3ciGLLThZvFw.jpeg",
   "url": "https://medium.com/@anandsundaramoorthysa/lulu-mall-more-than-shoppings-a-business-viewpoint-763c121549f8",
   "category": ["Finance"],
   "slug": generateSlug("11lulu-mall-more-than-shoppings-a-business-viewpoint")
  },
  {
   "title": "Emacs & Org Mode in Windows",
   "excerpt": "How I use the Emacs in Windows. What are the issues I face? To know about that check my blog...",
   "date": "March 18, 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BuBhny8k374jrc90t9UGjA.jpeg",
   "url": "https://medium.com/@anandsundaramoorthysa/emacs-org-mode-in-windows-95922d3233b3",
   "category": ["Tech"],
   "slug": generateSlug("10emacs-org-mode-in-windows")
  },
  {
   "title": "How Failure Feels?",
   "excerpt": "Failure is just a part of life—an unskippable, teaching part. But, How to tackle that. Check my blog...",
   "date": "March 9, 2025",
   "image": "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*HVlvCWH5s8r3tmUeZjVPhw.jpeg",
   "url": "https://medium.com/@anandsundaramoorthysa/how-failure-feels-bb07aaabbb5c",
   "category": ["Others"],
   "slug": generateSlug("9how-failure-feels")
  },
  {
   "title": "Prompting & My Life",
   "excerpt": "How the prompting change my life? From nothing to tech & finance enthusiast. Check the blog to know...",
   "date": "March 7, 2025",
   "image": "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*__uylPhQvcbY76Y1Cj18WQ.jpeg",
   "url": "https://medium.com/@anandsundaramoorthysa/prompting-my-life-ef76d6d34681",
   "category": ["Tech", "Others"],
   "slug": generateSlug("8prompting-my-life")
  },
  {
   "title": "The Evolution & Backclash of Developers Using ChatGPT",
   "excerpt": "Explore how developers are evolving with AI and the backlash that follows. Read more in my blog...",
   "date": "February 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Wf1fUi5nnUja-mrI-H3pmg.jpeg",
   "url": "https://medium.com/@anandsundaramoorthysa/the-evolution-backclash-of-developers-using-chatgpt-20ddfaa698e1",
   "category": ["Tech"],
   "slug": generateSlug("7the-evolution-backclash-of-developers-using-chatgpt")
  },
  {
   "title": "ChatGPT & RLHF",
   "excerpt": "How reinforcement learning with human feedback (RLHF) shapes ChatGPT’s responses. Dive into the core concept in my blog...",
   "date": "February 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*xqil4m7ixyLMNJYPbpouUg.png",
   "url": "https://medium.com/@anandsundaramoorthysa/chatgpt-rlhf-29711a0a1469",
   "category": ["Tech"],
   "slug": generateSlug("6chatgpt-rlhf")
  },
  {
   "title": "Neuralink: Send Humans to the Next Level",
   "excerpt": "Neuralink is pushing the frontier of human enhancement. Here's my perspective on its potential and risks...",
   "date": "February 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tWf9cZSczdbRgA-m8zAbHw.png",
   "url": "https://medium.com/@anandsundaramoorthysa/neuralink-send-humans-to-the-next-level-97b30340b36a",
   "category": ["Tech"],
   "slug": generateSlug("5neuralink-send-humans-to-the-next-level")
  },
  {
   "title": "Journey of the Stupid Explorer in Flutter & Namma Flutter",
   "excerpt": "My initial struggle and realization while learning Flutter. What I found about its strengths. Read on...",
   "date": "January 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*10RECXGTH5NyaeBg5yD1pw.png",
   "url": "https://medium.com/nammaflutter/journey-of-the-stupid-explorer-in-flutter-namma-flutter-44a52a58b6b5",
   "category": ["Tech"],
   "slug": generateSlug("4journey-of-the-stupid-explorer-in-flutter-namma-flutter")
  },
  {
   "title": "Why HTML, CSS is a Foundation for Web Development",
   "excerpt": "Many jump to React and JS, but forget the basics. This blog explains why HTML & CSS are still essential...",
   "date": "January 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*0baVApvLZXh9fPzJ",
   "url": "https://medium.com/@anandsundaramoorthysa/why-html-css-is-a-foundation-for-web-development-7593e6639b8b",
   "category": ["Tech"],
   "slug": generateSlug("3why-html-css-is-a-foundation-for-web-development")
  },
  {
   "title": "What’s Behind Rising Prices? Inflation in Simple Terms",
   "excerpt": "Learn what causes inflation and how it affects your daily expenses in simple language. Read my blog...",
   "date": "January 2025",
   "image": "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*q7gRHJ5msc4yPRG7",
   "url": "https://medium.com/@anandsundaramoorthysa/whats-behind-rising-prices-inflation-in-simple-terms-46deb5e873ab",
   "category": ["Finance"],
   "slug": generateSlug("2whats-behind-rising-prices-inflation-in-simple-terms")
  },
  {
   "title": "Same Chip, Varying Speed: The Mystery Behind U, P and H Series Performance",
   "excerpt": "Ever wondered why chips with same specs behave differently? Learn about U, P, and H series CPUs in my blog...",
   "date": "January 2025",
   "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*I31Q0NTBHUtuQ4bt",
   "url": "https://medium.com/@anandsundaramoorthysa/same-chip-varying-speed-the-mystery-behind-u-p-and-h-series-performance-0b64c70f4a55",
   "category": ["Tech"],
   "slug": generateSlug("1same-chip-varying-speed-the-mystery-behind-u-p-and-h-series-performance")
  }
 ];

const Blog = () => {
 const [filter, setFilter] = useState("all"); // Added the filter state

 const filteredBlogPosts = filter === "all"
 ? blogPostsData
 : blogPostsData.filter(post => post.category.map(cat => cat.toLowerCase()).includes(filter.toLowerCase()));

 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [selectedBlog, setSelectedBlog] = useState(null);

 const handleOpenDialog = (post) => {
  setSelectedBlog(post);
  setIsDialogOpen(true);
 };

 const handleCloseDialog = () => {
  setIsDialogOpen(false);
  setSelectedBlog(null);
 };

 const handleViewOnWebsite = () => {
  if (selectedBlog && selectedBlog.slug) {
   window.location.href = `/blog/${selectedBlog.slug}`; // Adjust based on your routing
  }
  handleCloseDialog();
 };

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
       Read my latest articles
      </p>
      <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
     </motion.div>

     <div className="mt-6 flex justify-center">
      <div className="bg-accent/10 rounded-full flex items-center overflow-hidden">
       {["all", "Tech", "Finance", "Others"].map(category => {
        const displayCategory = titleCase(category);
        return (
         <button
          key={category}
          className={`text-xs py-2 px-3 transition-colors duration-200
           ${filter === category.toLowerCase()
            ? 'bg-primary text-primary-foreground font-semibold hover:bg-primary/80'
            : 'bg-accent/50 text-accent-foreground hover:bg-accent hover:text-accent-foreground'
           }`}
          onClick={() => setFilter(category.toLowerCase())}
         >
          {displayCategory}
         </button>
        );
       })}
      </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {filteredBlogPosts.map((post, index) => (
       <motion.div
        key={post.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
       >
        <div
         className="block group cursor-pointer"
         onClick={() => handleOpenDialog(post)}
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
            <span>Read More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
           </div>
          </div>
         </div>
        </div>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* Dialog to choose between Medium and local website */}
   <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="sm:max-w-[425px]">
     <DialogHeader>
      <DialogTitle>{selectedBlog?.title}</DialogTitle>
      <DialogDescription>Where would you like to read this blog?</DialogDescription>
     </DialogHeader>
     <div className="grid gap-4 py-4">
      <Button asChild>
       <a href={selectedBlog?.url} target="_blank" rel="noopener noreferrer" className="w-full">
        Blog on Medium
       </a>
      </Button>
      <Button onClick={handleViewOnWebsite} className="w-full">
       Blog on My website
      </Button>
      <Button type="button" onClick={handleCloseDialog}>
       Close
      </Button>
     </div>
     <DialogFooter className="flex justify-start">
     </DialogFooter>
    </DialogContent>
   </Dialog>
  </PageTransition>
 );
};
export default Blog;