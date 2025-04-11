
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="section-subtitle">What's Next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-slate-light max-w-xl mx-auto mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-navy-light p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-slate-light">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-navy border-slate/20 focus-visible:ring-accent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-slate-light">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-navy border-slate/20 focus-visible:ring-accent"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-slate-light">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-navy border-slate/20 focus-visible:ring-accent resize-none"
              />
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                className="bg-transparent border border-accent text-accent hover:bg-accent/10 w-full md:w-auto px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending... <Send className="ml-2 h-4 w-4 animate-pulse" /></>
                ) : (
                  <>Send Message <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>
          </form>
          
          <div className="mt-10 flex justify-center">
            <a 
              href="mailto:greatoke@gmail.com" 
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" /> greatoke@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
