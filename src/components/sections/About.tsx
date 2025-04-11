
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading numbered-heading" data-number="01">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 space-y-4 text-slate-light"
          >
            <p>
              Hello! I'm Great, a Front-end Engineer based in Nigeria. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <p>
              I graduated from Delta State Polytechnic with a Higher National Diploma in Computer Science in 2018, and I also completed a Software Engineering program at ALX Academy in 2021. Since then, I've had the privilege of working at{" "}
              <a href="#" className="text-accent hover:underline">a tech education company</a>,{" "}
              <a href="#" className="text-accent hover:underline">an energy company</a>, and{" "}
              <a href="#" className="text-accent hover:underline">a software solutions firm</a>. 
              Currently, I'm leading frontend development at Centralstack Technologies, where we build innovative solutions for various industries.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {["JavaScript", "React.js", "Next.js", "Redux", "Styled Components", "Node.js"].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="text-accent mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-accent rounded-md opacity-50 group-hover:opacity-70 blur transition duration-300"></div>
              <div className="relative">
                <Avatar className="w-64 h-64 bg-cotain">
                  <AvatarImage src="/profile.jpg" alt="Great Oke" />
                  <AvatarFallback>GO</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
