import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GreetingAnimation = () => {
  const greetings = [
    { text: "வணக்கம் 🙏", language: "Tamil" },
    { text: "ഹലോ 👋", language: "Malayalam" },
    { text: "హలో 👋", language: "Telugu" },
    { text: "ಹಲೋ 👋", language: "Kannada" },
    { text: "नमस्ते 🙏", language: "Hindi" },
    { text: "Hi 👋", language: "English" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center mb-2">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-left"
      >
        <span className="text-lg md:text-2xl font-bold">
          {greetings[currentIndex].text}
        </span>
        <span className="text-sm md:text-base text-muted-foreground">
          {greetings[currentIndex].language}
        </span>
      </motion.div>
    </div>
  );
};

export default GreetingAnimation;
