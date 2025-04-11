
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "React.js / Next.js", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Redux", level: 85 },
      { name: "Styled Components / SASS", level: 90 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 70 },
      { name: "GitHub CI/CD", level: 85 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    title: "Additional Skills",
    skills: [
      { name: "TypeScript", level: 70 },
      { name: "React Native", level: 60 },
      { name: "Cypress", level: 80 },
      { name: "Storybook", level: 85 },
      { name: "Docker", level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading numbered-heading" data-number="04">
            My Skills
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-navy rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-foreground text-xl font-semibold mb-6 pb-2 border-b border-slate/20">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-light">{skill.name}</span>
                      <span className="text-accent font-mono">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-navy-dark" 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
