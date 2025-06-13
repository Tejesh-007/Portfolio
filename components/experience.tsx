"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    company: "Seanergy Digital Inc.",
    position: "Software Engineer",
    location: "Plano, TX",
    duration: "February 2025 – Present",
    description: [
      "Developed and maintained scalable React.js applications, ensuring optimal performance and user experience",
      "Implemented state management using Redux and Redux-Saga, optimizing data flow and API interactions",
      "Integrated frontend applications with backend services, consuming REST APIs and managing API calls efficiently",
      "Optimized frontend performance by implementing code-splitting, lazy loading, and memoization techniques",
      "Wrote unit tests using Jest and React Testing Library to ensure code reliability and over 80% test coverage",
    ],
    technologies: ["React.js", "Next.js", "Redux", "Redux-Saga", "Jest", "React Testing Library", "REST APIs"],
  },
  {
    company: "eNcloud Services",
    position: "Software Engineer",
    location: "Katy, TX",
    duration: "August 2024 - January 2025",
    description: [
      "Involved in gathering requirements for the application and worked with the business team to review the requirements",
      "Designed and developed a cross-platform website using React Native, incorporating Material UI for a clean and responsive user experience",
      "Optimized components and workflows to enhance performance and scalability of the application",
      "Proficient in building RESTful APIs and server-side applications using Node.js",
      "Integrated Oracle DB with a Node.js backend to handle robust data storage and retrieval",
      "Developed test cases for each component using Junit, reported and deployed using Jenkins",
    ],
    technologies: ["React Native", "Material UI", "Node.js", "Oracle DB", "Jenkins", "RESTful APIs"],
  },
  {
    company: "Cencora (AmerisourceBergen)",
    position: "Application Delivery ERP & Integration Intern",
    location: "Pennsylvania, USA",
    duration: "June 2024 – August 2024",
    description: [
      "Developed an enterprise-level portal utilizing Angular for frontend architecture and Node.js with Oracle DB for backend API development",
      "Designed responsive, visually appealing UIs, adhering to best practices for UI/UX to enhance user experience",
      "Implemented new features including automated email notifications, enhancing system functionality",
      "Managed code repositories using GIT within Azure DevOps, implementing RESTful APIs",
      "Established CI/CD pipelines in Azure DevOps, automating build, test, and deployment workflows",
      "Developed data flow diagrams for five production systems using MS Visio",
    ],
    technologies: ["Angular", "Node.js", "Oracle DB", "Azure DevOps", "SAP PI NetWeaver", "MS Visio"],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    position: "System Engineer",
    location: "Hyderabad, India",
    duration: "November 2020 – August 2022",
    description: [
      "Worked as a UI Developer, integrating user interfaces with backend services using React framework and Java services",
      "Developed a web application to streamline maintenance and loading of manual positions",
      "Contributed to the rewrite and migration of an existing .NET application to React.js and Java",
      "Worked on ETL operations, implementing batch jobs based on business logic using Spring Boot",
      "Built server-side applications and performed database manipulation using Oracle database with JPA approach",
      "Created and executed test cases for each implementation, performing unit testing",
    ],
    technologies: ["React.js", "Java", "Spring Boot", "Oracle DB", "JPA", ".NET Migration"],
  },
  {
    company: "Centre for Development of Advanced Computing (C-DAC)",
    position: "Intern",
    location: "Hyderabad, India",
    duration: "May 2019 – June 2019",
    description: [
      "Developed RTL code in Verilog/VHDL for circuit design",
      "Created test benches and performed functional verification using system Verilog",
      "Collaborated with senior engineers to troubleshoot design issues and optimize performance",
    ],
    technologies: ["Verilog", "VHDL", "System Verilog", "Circuit Design"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
