
import { useEffect, useState } from "react";
import { 
  Code, BookText, Lightbulb, TrendingUp
} from "lucide-react";

type TitleData = {
  text: string;
  icon: JSX.Element;
};

const TypedTitle = () => {
  const titles: TitleData[] = [
    { text: "Front-End & Flutter Developer", icon: <Code className="h-6 w-6" /> },
    { text: "Tech & Finance Enthusiast", icon: <TrendingUp className="h-6 w-6" /> },
    { text: "Passionate Learner", icon: <Lightbulb className="h-6 w-6" /> },
    { text: "Writer", icon: <BookText className="h-6 w-6" /> },
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex].text;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        
        if (displayText === currentTitle) {
          // Start deleting after a pause
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentTitleIndex, isDeleting, typingSpeed]);

  return (
    <div className="flex items-center space-x-2 text-primary font-medium tracking-wider">
      {titles[currentTitleIndex].icon}
      <span className="text-sm md:text-base">{displayText}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypedTitle;
