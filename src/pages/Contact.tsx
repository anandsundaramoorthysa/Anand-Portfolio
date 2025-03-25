import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { useToast } from "@/components/ui/use-toast";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Contact | Anand Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} has been copied to clipboard.`,
    });
  };

  return (
    <PageTransition>
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ContactHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <ContactInfo copyToClipboard={copyToClipboard} />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
