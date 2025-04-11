
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Email", icon: Mail, url: "mailto:greatoke@gmail.com" },
];

const SocialSidebar = () => {
  return (
    <>
      {/* Left sidebar - Social links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-5 hidden xl:flex flex-col items-center"
      >
        <div className="flex flex-col space-y-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate hover:text-accent hover:-translate-y-1 transition-all focus-ring"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        <div className="h-24 w-px bg-slate/50 mt-5"></div>
      </motion.div>

      {/* Right sidebar - Email */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 right-5 hidden xl:flex flex-col items-center"
      >
        <a
          href="mailto:greatoke@gmail.com"
          className="font-mono text-xs tracking-widest text-slate hover:text-accent hover:-translate-y-1 transition-all focus-ring vertical-text"
          style={{ writingMode: "vertical-rl" }}
        >
          greatoke@gmail.com
        </a>
        <div className="h-24 w-px bg-slate/50 mt-5"></div>
      </motion.div>
    </>
  );
};

export default SocialSidebar;
