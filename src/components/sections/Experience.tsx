
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    id: "centralstack",
    title: "Lead Engineer",
    company: "Centralstack Technologies",
    date: "July 2023 - Present",
    points: [
      "Led and collaborated with developers/designers to implement various applications including microfinance bank web app, classified marketplace, and POS management system",
      "Made technical decisions for frontend development, improving integration and testing strategies that reduced production bugs",
      "Trained and managed over 5 interns from zero programming knowledge to intermediate level",
      "Utilized technologies including JavaScript, TypeScript, React.js, Redux, Next.js, PHP, Laravel, and Docker"
    ]
  },
  {
    id: "softalx",
    title: "Frontend Engineer",
    company: "Softalx Solutions",
    date: "December 2021 - April 2023",
    points: [
      "Developed frontend for attendance management software that helped track staff performance effectively",
      "Led development and maintenance of internal dashboards for the Customer service team",
      "Converted over 40+ UI prototypes to frontend components and documented reusable components using React Storybook",
      "Worked with JavaScript, TypeScript, React.js, Redux, Styled Components, and SCSS"
    ]
  },
  {
    id: "kingdom",
    title: "Software Engineer",
    company: "Kingdom Energy",
    date: "March 2020 - November 2021",
    points: [
      "Designed and developed several internal systems including Attendance Management, Pump Sales App, and Inventory Management System",
      "Built and maintained a component design system using styled-components",
      "Improved company revenue through implementation of efficient tracking systems",
      "Used Javascript, React.js, styled-components, Laravel, and PHP"
    ]
  },
  {
    id: "zenith",
    title: "Software Engineer",
    company: "ZenithTech Solutions",
    date: "August 2018 - December 2019",
    points: [
      "Taught over 50 students HTML, CSS, and JavaScript fundamentals",
      "Collaborated with developers to design and develop various applications including event management platform and client management portal",
      "Contributed to hospital, school, and church management systems",
      "Utilized JavaScript, PHP, jQuery, and Laravel"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading numbered-heading" data-number="02">
            Where I've Worked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Tabs defaultValue="centralstack" className="max-w-3xl">
            <TabsList className="flex flex-wrap mb-8 border-l border-slate/20">
              {experiences.map(({ id, company }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="data-[state=active]:border-accent data-[state=active]:text-accent border-l-2 border-transparent px-4 py-2 -ml-0.5 font-mono text-sm transition-all"
                >
                  {company}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {experiences.map(({ id, title, company, date, points }) => (
              <TabsContent key={id} value={id} className="space-y-4 text-slate-light">
                <h3 className="text-xl">
                  <span className="text-foreground">{title}</span>{" "}
                  <span className="text-accent">@ {company}</span>
                </h3>
                
                <p className="font-mono text-sm">{date}</p>
                
                <ul className="space-y-2 mt-4">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mt-1 mr-2">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
