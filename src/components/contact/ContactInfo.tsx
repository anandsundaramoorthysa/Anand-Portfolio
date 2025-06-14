import { motion } from "framer-motion";
import { Copy, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

interface ContactInfoProps {
  copyToClipboard: (text: string, label: string) => void;
}

const ContactInfo = ({ copyToClipboard }: ContactInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
      
      <div className="space-y-6">
        <div 
          className="p-4 rounded-lg border border-border bg-background/50 contact-item-hover flex items-center gap-4"
          onClick={() => copyToClipboard("sanand03072005@gmail.com", "Email")}
        >
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
            <p>sanand03072005@gmail.com</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 active-press"
            aria-label="Copy email"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        
        <div 
          className="p-4 rounded-lg border border-border bg-background/50 contact-item-hover flex items-center gap-4"
          onClick={() => copyToClipboard("+91 80124 84177", "Phone")}
        >
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
            <p>+91 80124 84177</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 active-press"
            aria-label="Copy phone"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4 rounded-lg border border-border bg-background/50 contact-item-hover flex items-center gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
            <p>Chennai, Tamil Nadu, India</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default ContactInfo;
