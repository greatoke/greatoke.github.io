
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Microfinance Bank System",
    description: "An internal web application for tracking customer's deposits, withdrawals, interests, loans, and general financial portfolio for financial institutions.",
    technologies: ["React", "TypeScript", "Redux", "Styled Components", "PHP", "Laravel"],
    imageUrl: "https://via.placeholder.com/640x360?text=Microfinance+Bank+System",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Classified Marketplace",
    description: "A web platform that allows users to buy and sell goods and services locally with features for listings, messaging, and transactions.",
    technologies: ["Next.js", "TypeScript", "Redux", "Styled Components", "Docker"],
    imageUrl: "https://via.placeholder.com/640x360?text=Classified+Marketplace",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "POS Management System",
    description: "A point-of-sale system that helps supermarkets track daily sales, expenses, and revenue, while also managing inventory and generating financial reports.",
    technologies: ["React", "JavaScript", "Context API", "PHP", "Laravel"],
    imageUrl: "https://via.placeholder.com/640x360?text=POS+Management+System",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Attendance Management System",
    description: "A software application that helps companies track employee attendance effectively and award rewards based on performance reports.",
    technologies: ["React", "Redux", "Styled Components", "SCSS", "Storybook"],
    imageUrl: "https://via.placeholder.com/640x360?text=Attendance+Management+System",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading numbered-heading" data-number="03">
            Some Things I've Built
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid md:grid-cols-12 gap-4"
            >
              {/* Project Image */}
              <div className={`md:col-span-7 ${
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'
              }`}>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative group aspect-video overflow-hidden rounded-md"
                >
                  <div className="absolute inset-0 bg-navy-light opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
              
              {/* Project Content */}
              <div className={`md:col-span-5 ${
                index % 2 === 0 ? 'md:order-2 md:text-right' : 'md:order-1 md:text-left'
              } flex flex-col justify-center`}>
                <p className="section-subtitle mb-1">Featured Project</p>
                <h3 className="text-foreground text-2xl font-semibold mb-4">{project.title}</h3>
                
                <div className="bg-navy-light p-6 rounded-md mb-4 shadow-md">
                  <p className="text-slate-light">{project.description}</p>
                </div>
                
                <div className={`flex flex-wrap gap-2 mb-4 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-transparent border-slate/30 text-slate-light">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className={`flex gap-4 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}>
                  <Button asChild variant="ghost" size="icon" className="text-slate hover:text-accent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="text-slate hover:text-accent">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
