
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <p className="font-mono text-accent mb-4">Hi, my name is</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-2"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground">
            Great Oke.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate">
            I build things for the web.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mb-12"
        >
          <p className="text-slate text-lg">
            I'm a Front-end Engineer with over 6 years of experience specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products at{" "}
            <a href="#" className="text-accent hover:underline focus-ring">
              Centralstack Technologies
            </a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild size="lg" className="bg-transparent border border-accent text-accent hover:bg-accent/10">
            <a href="#projects">Check out my work!</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
