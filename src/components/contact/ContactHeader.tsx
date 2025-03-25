import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-3xl md:text-4xl font-bold">Contact Me</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        Reach out for collaborations, projects, or just to say hello!
      </p>
      <div className="mt-4 h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
    </motion.div>
  );
};

export default ContactHeader;
