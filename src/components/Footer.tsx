
import { Github, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-slate/20">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate hover:text-accent transition-colors focus-ring"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="text-sm text-slate text-center">
            <p className="mb-2">
              Designed & Built by Great Oke
            </p>
            <p className="flex items-center justify-center">
              <a 
                href="https://github.com/greatoke" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-accent transition-colors focus-ring"
              >
                View Source <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <span className="mx-2">•</span>
              <span>© {currentYear} All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
