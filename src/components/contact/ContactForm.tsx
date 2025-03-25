import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState, useEffect, CSSProperties } from 'react';

const ContactForm = () => {
  const calLink = "anandsundaramoorthysa";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = windowWidth >= 640;
  const imageSizeSmall = '96px';
  const imageSizeLarge = '160px';

  const imageContainerStyle: CSSProperties = {
    borderRadius: '50%',
    overflow: 'hidden',
    width: imageSizeSmall,
    height: imageSizeSmall,
    ...(windowWidth >= 768 && {
      width: imageSizeLarge,
      height: imageSizeLarge,
    }),
    marginBottom: '1rem',
  };

  const infoSectionStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom: '1rem',
  };

  const handleBookMeeting = () => {
    window.open(`https://cal.com/${calLink}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="p-4 sm:p-8 md:p-12 rounded-lg border border-border shadow-md overflow-hidden flex flex-col items-center text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-8 sm:mb-12">
        Schedule a Meeting
      </h2>

      <div
        className="rounded-full overflow-hidden"
        style={imageContainerStyle}
      >
        <img
          src="favicon.ico"
          alt="Anand Sundaramoorthy SA"
          className="object-cover w-full h-full"
        />
      </div>

      <div
        className="sm:text-left"
        style={infoSectionStyle}
      >
        <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-2">Anand Sundaramoorthy SA</h3>
        <p className="text-foreground/70 text-base sm:text-lg">
          LCM'25 | Tech & Finance Enthusiast | Blog Writer | Developer & Prompt Engineer | Explore Which I Love
        </p>
      </div>

      <button
        onClick={handleBookMeeting}
        className="relative w-full py-4 sm:py-5 rounded-md bg-primary text-primary-foreground font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 active:bg-primary/90 flex items-center justify-center space-x-3"
      >
        <Calendar className="h-6 sm:h-7 w-6 sm:w-7" />
        <span>Book a Meeting on Cal.com</span>
      </button>
    </motion.div>
  );
};

export default ContactForm;
